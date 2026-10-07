const axios = require('axios');

module.exports = {
    platform: 'SoundCloak',
    version: '0.0.4',
    author: 'Lm_蓝莓（辅助编写：Kimi）',
    srcUrl: 'https://fastly.jsdelivr.net/gh/LmLanmei64/MusicFreePlugins/dist/soundcloak/plugin.js',
    description: `
## 配置说明

本插件通过 SoundCloak 实例代理访问 SoundCloud，使用前必须先配置实例地址。

### 用户变量

| key | 名称 | 是否必填 | 要求 |
| --- | --- | --- | --- |
| instanceUrl | SoundCloak 实例地址 | 必填 | 完整的 https 地址，例如 https://sc1.maid.zone；末尾不要带斜杠；所选实例必须开启 API（EnableAPI = true） |

### 插件功能列表

- 搜索：歌曲、专辑/歌单、歌手
- 歌手页：歌曲列表、专辑列表
- 专辑/歌单详情：自动过滤精简 track 并批量补全信息
- 音频播放：默认经 Progressive 接口直出 mp3（128k）；高音质（super/high）在实例开启 Restream 时自动切换 Restream（aac_hq）
- 图片加载：封面/头像统一走实例图片代理
- URL 导入：支持导入单曲链接与歌单链接
- 推荐标签与按标签搜索歌单
- 歌词：暂不支持（返回空）
- 榜单：官方 Charts 选集，按地区（US/UK 等）分组，进入后展示对应流派榜\n- 评论：SoundCloak 未放行该端点，返回空结果不报错

### 实例地址获取教程

1. 打开 SoundCloak 实例列表页：https://maid.zone/soundcloak/instances.html （JSON 版：https://maid.zone/soundcloak/instances.json ）
2. 选择 Status 为 🟢 且 API 为 ✅ 的实例
3. 复制其 https 地址，填入 instanceUrl 变量

### 注意事项

- 必须选择 API 列为 ✅ 的实例（即 Settings.EnableAPI = true），否则搜索、详情等接口无法使用
- ProxyImages ✅ 影响封面显示；Restream 仅影响高音质（super/high）播放，普通音质播放不再需要
- 实例状态会变化，若当前实例失效或 API 关闭，请回到实例列表页重新选择
- 填写地址时去掉末尾斜杠，例如 https://sc1.maid.zone 而不是 https://sc1.maid.zone/
- 截至本说明编写时 API 可用的实例有：sc1.maid.zone、sc2.maid.zone、sc3.maid.zone、soundcloak.tijn.dev、sc.monochrome.tf，实际以列表页实时状态为准
`,
    primaryKey: ['id'],
    cacheControl: 'no-store',
    userVariables: [
        {
            key: 'instanceUrl',
            name: 'SoundCloak 实例地址',
            hint: '必填，格式与实例选择要求见插件描述'
        }
    ],

    /** 辅助：获取实例根地址 */
    _getBaseUrl() {
        const raw = env.getUserVariables().instanceUrl;
        if (!raw || !raw.trim()) {
            throw new Error('请先配置 SoundCloak 实例地址');
        }
        return raw.trim().replace(/\/+$/, '');
    },

    /** 辅助：图片走 SoundCloak 代理 */
    _proxyImage(url) {
        if (!url) return undefined;
        const baseUrl = this._getBaseUrl();
        return `${baseUrl}/_/proxy/images?url=${encodeURIComponent(url)}`;
    },

    /** 辅助：把 SoundCloud 原生的 next_href 转换为 SoundCloak 代理地址 */
    _convertNextHref(nextHref, baseUrl) {
        if (!nextHref) return null;
        try {
            const url = new URL(nextHref);
            return `${baseUrl}/_/api/v2${url.pathname}${url.search}`;
        } catch (e) {
            return null;
        }
    },

    /** 辅助：查询实例能力（缓存），用于判断是否支持 Restream 等高阶功能 */
    _instanceInfo: null,
    _instanceInfoUrl: null,

    async _getInstanceInfo() {
        const baseUrl = this._getBaseUrl();
        if (this._instanceInfo && this._instanceInfoUrl === baseUrl) {
            return this._instanceInfo;
        }
        try {
            const res = await axios.get(`${baseUrl}/_/info`);
            this._instanceInfo = res.data || {};
        } catch (e) {
            this._instanceInfo = {};
        }
        this._instanceInfoUrl = baseUrl;
        return this._instanceInfo;
    },

    /** 辅助：判断 track 是否为有效完整对象（过滤精简占位） */
    _isValidTrack(track) {
        return track && track.kind === 'track' && track.title && track.permalink && track.user;
    },

    /** 辅助：SoundCloud track -> IMusicItem */
    _formatTrack(track) {
        if (!this._isValidTrack(track)) return null;

        const rawArtwork = track.artwork_url || track.user?.avatar_url;
        const artwork = rawArtwork
            ? this._proxyImage(rawArtwork.replace('-large', '-t500x500'))
            : undefined;

        return {
            id: String(track.id),
            title: track.title,
            artist: track.user.username || track.user.permalink || 'Unknown',
            duration: track.duration ? Math.floor(track.duration / 1000) : 0,
            artwork: artwork,
            album: track.publisher_metadata?.album_title || '',
            url: track.permalink_url || '',
            _authorPermalink: track.user.permalink,
            _trackPermalink: track.permalink,
            genre: track.genre || '',
            description: track.description || '',
            playCount: track.playback_count || 0,
            likeCount: track.likes_count || 0,
            streamable: track.streamable || false,
        };
    },

    /** 辅助：SoundCloud playlist -> IMusicSheetItem / IAlbumItem */
    _formatPlaylist(playlist) {
        const rawArtwork = playlist.artwork_url || playlist.user?.avatar_url;
        const artwork = rawArtwork
            ? this._proxyImage(rawArtwork.replace('-large', '-t500x500'))
            : undefined;

        return {
            id: String(playlist.id),
            title: playlist.title || 'Unknown',
            artist: playlist.user?.username || '',
            artwork: artwork,
            description: playlist.description || '',
            trackCount: playlist.track_count || 0,
            playCount: playlist.playback_count || 0,
            _authorPermalink: playlist.user?.permalink,
            _playlistPermalink: playlist.permalink,
        };
    },

    /** 辅助：SoundCloud user -> IArtistItem */
    _formatUser(user) {
        return {
            id: String(user.id),
            name: user.username || user.permalink || 'Unknown',
            avatar: user.avatar_url
                ? this._proxyImage(user.avatar_url.replace('-large', '-t500x500'))
                : undefined,
            description: user.description || '',
            permalink: user.permalink || '',
            trackCount: user.track_count || 0,
            followersCount: user.followers_count || 0,
            _nextHrefTracks: null,
            _nextHrefPlaylists: null,
        };
    },

    /** 辅助：解析可能混有精简 track 的数组，批量补全缺失信息 */
    async _parseTracks(tracks) {
        const baseUrl = this._getBaseUrl();
        const musicList = [];
        const missingIds = [];

        tracks.forEach((t, idx) => {
            if (this._isValidTrack(t)) {
                musicList[idx] = this._formatTrack(t);
            } else if (t && t.id) {
                missingIds.push({ id: String(t.id), index: idx });
                musicList[idx] = null;
            }
        });

        if (missingIds.length > 0) {
            const idsStr = missingIds.map(m => m.id).join(',');
            try {
                const batchRes = await axios.get(`${baseUrl}/_/api/v2/tracks?ids=${idsStr}`);
                const batchTracks = batchRes.data || [];
                const trackMap = {};
                batchTracks.forEach(bt => {
                    if (bt && bt.id) trackMap[String(bt.id)] = bt;
                });
                missingIds.forEach(({ id, index }) => {
                    const fullTrack = trackMap[id];
                    if (fullTrack) musicList[index] = this._formatTrack(fullTrack);
                });
            } catch (e) {
                // 批量请求失败，跳过这些精简 track
            }
        }

        return musicList.filter(Boolean);
    },

    /** 搜索 */
    async search(query, page, type) {
        const baseUrl = this._getBaseUrl();
        const limit = 10;
        const offset = (page - 1) * limit;

        let endpoint;
        if (type === 'music') {
            endpoint = `${baseUrl}/_/api/v2/search/tracks?q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`;
        } else if (type === 'album' || type === 'sheet') {
            endpoint = `${baseUrl}/_/api/v2/search/playlists?q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`;
        } else if (type === 'artist') {
            endpoint = `${baseUrl}/_/api/v2/search/users?q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`;
        } else {
            endpoint = `${baseUrl}/_/api/v2/search/tracks?q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`;
        }

        const res = await axios.get(endpoint);
        const data = res.data;

        let results = [];
        if (type === 'music' || (!type)) {
            const tracks = (data.collection || []).filter(t => this._isValidTrack(t));
            results = tracks.map(t => this._formatTrack(t)).filter(Boolean);
        } else if (type === 'album' || type === 'sheet') {
            const playlists = data.collection || [];
            results = playlists.map(p => this._formatPlaylist(p));
        } else if (type === 'artist') {
            const users = data.collection || [];
            results = users.map(u => this._formatUser(u));
        }

        return {
            isEnd: !data.next_href || (data.collection || []).length < limit,
            data: results
        };
    },

    /** 获取音频直链 */
    async getMediaSource(musicItem, quality) {
        const baseUrl = this._getBaseUrl();
        const author = musicItem._authorPermalink;
        const track = musicItem._trackPermalink;

        if (!author || !track) {
            throw new Error('缺少 track 的 permalink 信息，请重新搜索后再播放');
        }

        // 高音质：实例开启 Restream 时走 restream(aac_hq)，否则回退 progressive
        if (quality === 'super' || quality === 'high') {
            const info = await this._getInstanceInfo();
            if (info.Restream) {
                return {
                    url: `${baseUrl}/_/api/restream/${author}/${track}?metadata=true&audio=aac_hq`,
                    headers: {}
                };
            }
        }

        // 默认音质 / 低音质 / 实例未开 Restream：progressive 直出 mp3（128k）
        return {
            url: `${baseUrl}/_/api/progressive/${author}/${track}`,
            headers: {}
        };
    },

    /** 获取歌词 */
    async getLyric(musicItem) {
        return { rawLrc: '', translation: '' };
    },

    /** 获取专辑/歌单详情 */
    async getAlbumInfo(albumItem, page) {
        const baseUrl = this._getBaseUrl();
        const res = await axios.get(`${baseUrl}/_/api/v2/playlists/${albumItem.id}`);
        const data = res.data;

        const musicList = await this._parseTracks(data.tracks || []);

        return {
            isEnd: true,
            musicList,
            albumItem: {
                ...albumItem,
                description: data.description || albumItem.description,
                artwork: data.artwork_url
                    ? this._proxyImage(data.artwork_url.replace('-large', '-t500x500'))
                    : albumItem.artwork,
            }
        };
    },

    /** 歌单详情 */
    async getMusicSheetInfo(sheetItem, page) {
        return this.getAlbumInfo(sheetItem, page);
    },

    /** 获取歌手作品 */
    async getArtistWorks(artistItem, page, type) {
        const baseUrl = this._getBaseUrl();
        const limit = 10;

        if (type === 'music' || !type) {
            let endpoint;
            if (page === 1) {
                try { artistItem._nextHrefTracks = null; } catch (e) {}
                endpoint = `${baseUrl}/_/api/v2/users/${artistItem.id}/tracks?limit=${limit}&offset=0`;
            } else if (artistItem._nextHrefTracks) {
                endpoint = this._convertNextHref(artistItem._nextHrefTracks, baseUrl);
            } else {
                const offset = (page - 1) * limit;
                endpoint = `${baseUrl}/_/api/v2/users/${artistItem.id}/tracks?limit=${limit}&offset=${offset}`;
            }

            const res = await axios.get(endpoint);
            const data = res.data;

            try {
                artistItem._nextHrefTracks = data.next_href || null;
            } catch (e) {}

            const tracks = (data.collection || []).filter(t => this._isValidTrack(t));
            return {
                isEnd: !data.next_href || tracks.length < limit,
                data: tracks.map(t => this._formatTrack(t)).filter(Boolean)
            };
        } else if (type === 'album') {
            const offset = (page - 1) * limit;
            const res = await axios.get(`${baseUrl}/_/api/v2/users/${artistItem.id}/playlists?limit=${limit}&offset=${offset}`);
            const data = res.data;
            const playlists = data.collection || [];

            return {
                isEnd: !data.next_href || playlists.length < limit,
                data: playlists.map(p => this._formatPlaylist(p))
            };
        } else {
            throw new Error('不支持的类型: ' + type);
        }
    },

    /** 获取歌曲详细信息 */
    async getMusicInfo(musicItem) {
        const baseUrl = this._getBaseUrl();
        const res = await axios.get(`${baseUrl}/_/api/v2/tracks/${musicItem.id}`);
        return this._formatTrack(res.data);
    },

    /** 通过 URL 导入单曲 */
    async importMusicItem(urlLike) {
        const baseUrl = this._getBaseUrl();
        const res = await axios.get(`${baseUrl}/_/api/v2/resolve?url=${encodeURIComponent(urlLike)}`);
        const data = res.data;

        if (data.kind !== 'track') {
            throw new Error('该 URL 不是单曲链接');
        }

        return this._formatTrack(data);
    },

    /** 通过 URL 导入歌单 */
    async importMusicSheet(urlLike) {
        const baseUrl = this._getBaseUrl();
        const res = await axios.get(`${baseUrl}/_/api/v2/resolve?url=${encodeURIComponent(urlLike)}`);
        const data = res.data;

        if (data.kind !== 'playlist') {
            throw new Error('该 URL 不是歌单/专辑链接');
        }

        return this._parseTracks(data.tracks || []);
    },

    /** 获取推荐标签（流派） */
    async getRecommendSheetTags() {
        return {
            pinned: [
                {
                    title: '流派',
                    data: [
                        { id: 'soundcloud:genres:all-music', title: '全部音乐' },
                        { id: 'soundcloud:genres:electronic', title: '电子' },
                        { id: 'soundcloud:genres:hiphoprap', title: '嘻哈/说唱' },
                        { id: 'soundcloud:genres:pop', title: '流行' },
                        { id: 'soundcloud:genres:rock', title: '摇滚' },
                        { id: 'soundcloud:genres:alternativerock', title: '另类摇滚' },
                        { id: 'soundcloud:genres:house', title: 'House' },
                        { id: 'soundcloud:genres:techno', title: 'Techno' },
                    ]
                }
            ],
            data: []
        };
    },

    /** 根据标签获取推荐歌单 */
    async getRecommendSheetsByTag(tag, page) {
        const baseUrl = this._getBaseUrl();
        const limit = 10;
        const offset = (page - 1) * limit;

        const q = tag.id || tag.title || '';
        const endpoint = `${baseUrl}/_/api/v2/search/playlists?q=${encodeURIComponent(q)}&limit=${limit}&offset=${offset}`;
        const res = await axios.get(endpoint);
        const data = res.data;

        const playlists = data.collection || [];
        return {
            isEnd: !data.next_href || playlists.length < limit,
            data: playlists.map(p => this._formatPlaylist(p))
        };
    },

    /** 获取榜单列表（官方 Charts 选集，按地区分组） */
    async getTopLists() {
        const baseUrl = this._getBaseUrl();
        const res = await axios.get(`${baseUrl}/_/api/v2/charts/selections`);
        const data = res.data;

        const groups = [];
        (data.collection || []).forEach(sel => {
            const items = (sel.items?.collection || [])
                .filter(p => p.kind === 'playlist' && p.id)
                .map(p => {
                    const rawArtwork = p.artwork_url || p.user?.avatar_url;
                    return {
                        id: String(p.id),
                        title: p.title || 'Unknown',
                        description: sel.title || '',
                        coverImg: rawArtwork
                            ? this._proxyImage(rawArtwork.replace('-large', '-t500x500'))
                            : undefined,
                        trackCount: p.track_count || 0,
                        _playlistId: String(p.id),
                        _chartTracks: null,
                    };
                });
            if (items.length > 0) {
                groups.push({ title: sel.title || 'Charts', data: items });
            }
        });

        return groups;
    },

    /** 获取榜单详情（charts 返回的歌单为精简对象，需再取 playlists/{id} 补全曲目） */
    async getTopListDetail(topListItem, page) {
        const baseUrl = this._getBaseUrl();
        let musicList;

        if (page === 1 || !topListItem._chartTracks) {
            const playlistId = topListItem._playlistId || topListItem.id;
            const res = await axios.get(`${baseUrl}/_/api/v2/playlists/${playlistId}`);
            musicList = await this._parseTracks(res.data.tracks || []);
            try {
                topListItem._chartTracks = musicList;
            } catch (e) {}
        } else {
            musicList = topListItem._chartTracks;
        }

        return {
            isEnd: true,
            musicList,
            topListItem
        };
    },

    // 评论端点未在 SoundCloak 代理放行列表中（实测参数解析错误），返回空结果避免报错
    /** 获取歌曲评论（不可用） */
    async getMusicComments(musicItem, page) {
        return { isEnd: true, data: [] };
    }
};
