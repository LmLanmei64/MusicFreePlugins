const axios = require('axios');
const CryptoJS = require('crypto-js');
const qs = require('qs');
const BigInt = require('big-integer');
const dayjs = require('dayjs');

// ---------- 官方 API 加密部分 ----------
const headers = {
    authority: 'music.163.com',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36',
    'content-type': 'application/x-www-form-urlencoded',
    accept: '*/*',
    origin: 'https://music.163.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    referer: 'https://music.163.com/api/djradio/v2/get',
    'accept-language': 'zh-CN,zh;q=0.9',
};

function random16() {
    const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
        result += str.charAt(Math.floor(Math.random() * str.length));
    }
    return result;
}

function aesEncrypt(text, key) {
    const iv = CryptoJS.enc.Utf8.parse('0102030405060708');
    const keyBytes = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.AES.encrypt(text, keyBytes, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
}

function rsaEncrypt(text) {
    const reversed = text.split('').reverse().join('');
    const modulus = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7';
    const exponent = '010001';
    const reversedHex = reversed
        .split('')
        .map(ch => ch.charCodeAt(0).toString(16))
        .join('');
    const result = BigInt(reversedHex, 16)
        .modPow(BigInt(exponent, 16), BigInt(modulus, 16))
        .toString(16);
    return result.padStart(256, '0');
}

function getParamsAndEnc(data) {
    const first = aesEncrypt(JSON.stringify(data), '0CoJUm6Qyw8W8jud');
    const rand = random16();
    const params = aesEncrypt(first, rand);
    const encSecKey = rsaEncrypt(rand);
    return { params, encSecKey };
}

// ---------- 工具函数 ----------
function formatMusicItem(program) {
    const mainSong = program.mainSong || {};
    // 添加 qualities 字段以兼容音源重定向，至少包含 standard 音质
    const qualities = {
        standard: { size: mainSong.lMusic?.size || 0 },
    };
    // 如果存在更高音质，也可以加入
    if (mainSong.mMusic) {
        qualities.standard = { size: mainSong.mMusic.size };
    }
    if (mainSong.hMusic) {
        qualities.high = { size: mainSong.hMusic.size };
    }
    if (mainSong.sq) {
        qualities.super = { size: mainSong.sq.size };
    }

    return {
        id: String(program.id),
        title: program.name || mainSong.name || '未知',
        artist: program.dj?.nickname || (mainSong.artists && mainSong.artists[0]?.name) || '未知',
        artwork: program.coverUrl || program.blurCoverUrl || '',
        album: program.radio?.name || '',
        duration: Math.floor((program.duration || 0) / 1000),
        mainTrackId: mainSong.id || program.mainTrackId,
        qualities, // 音质信息
    };
}

function formatAlbumItem(radio) {
    return {
        id: String(radio.id),
        title: radio.name,
        artist: radio.dj?.nickname || '未知',
        artwork: radio.picUrl || '',
        description: radio.desc || '',
        date: dayjs.unix(radio.createTime / 1000).format('YYYY-MM-DD'),
    };
}

function musicCanPlayFilter(program) {
    return program.feeScope === 0 || program.feeScope === 8;
}

const pageSize = 30;

// ---------- 官方 API 请求 ----------
async function searchBase(query, page, type) {
    const data = {
        s: query,
        limit: pageSize,
        type: type,
        offset: (page - 1) * pageSize,
        csrf_token: '',
    };
    const pae = getParamsAndEnc(JSON.stringify(data));
    const res = await axios({
        method: 'post',
        url: 'https://music.163.com/weapi/search/get',
        headers: headers,
        data: qs.stringify(pae),
    });
    return res.data;
}

async function searchUserRadio(uid) {
    const data = { userId: uid, csrf_token: '' };
    const pae = getParamsAndEnc(JSON.stringify(data));
    const res = await axios({
        method: 'post',
        url: 'https://music.163.com/weapi/djradio/get/byuser',
        headers: headers,
        data: qs.stringify(pae),
    });
    return res.data;
}

// ---------- 第三方 API 请求 ----------
async function thirdPartyGet(apiBase, path, params = {}) {
    const url = new URL(apiBase + path);
    Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
            url.searchParams.append(key, params[key]);
        }
    });
    const response = await axios.get(url.toString(), {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://music.163.com/',
        },
        timeout: 15000,
    });
    return response.data;
}

// ---------- 辅助函数：获取第三方 API 地址 ----------
function getApiBase() {
    if (typeof env !== 'undefined' && env.getUserVariables) {
        const vars = env.getUserVariables();
        return vars.apiBase || 'https://ncm.sarmon.top';
    }
    return 'https://ncm.sarmon.top';
}

// ---------- 插件导出 ----------
module.exports = {
    platform: '网易云电台',
    author: '咕咕mur（融合版）',
    version: '0.2.3',
    srcUrl: 'https://fastly.jsdelivr.net/gh/GuGuMur/MusicFreePlugin-NeteaseRadio@master/dist/plugin.js',
    cacheControl: 'no-store',
    supportedSearchType: ['music', 'album', 'artist'],
    userVariables: [
        {
            key: 'apiBase',
            name: '第三方API地址',
            hint: '用于搜索声音、导入单曲/歌单、获取播放链接，默认 https://ncm.sarmon.top',
            default: 'https://ncm.sarmon.top',
        },
    ],
    hints: {
        importMusicItem: [
            '支持输入节目ID（纯数字）或包含 id= 的URL',
            '例如：1367665101 或 https://music.163.com/#/program?id=1367665101',
        ],
        importMusicSheet: [
            '支持输入电台ID（纯数字）或包含 rid= 的URL',
            '例如：336355127 或 https://music.163.com/#/djradio?id=336355127',
        ],
    },

    // ===== 搜索 =====
    async search(query, page, type) {
        if (type === 'music') {
            const apiBase = getApiBase();
            const offset = (page - 1) * pageSize;
            const data = await thirdPartyGet(apiBase, '/search', {
                keywords: query,
                type: 2000,
                limit: pageSize,
                offset: offset,
            });

            if (data.code !== 200) {
                throw new Error(`搜索失败: ${data.code} - ${data.message || ''}`);
            }

            const resources = data.data?.resources || [];
            const total = data.data?.totalCount || 0;

            return {
                isEnd: offset + pageSize >= total,
                data: resources
                    .filter(r => r.resourceType === 'voice')
                    .map(r => formatMusicItem(r.baseInfo)),
            };
        }

        if (type === 'album') {
            const res = await searchBase(query, page, 1009);
            const albums = (res.result?.djRadios || []).map(formatAlbumItem);
            return {
                isEnd: (res.result?.albumCount || 0) <= page * pageSize,
                data: albums,
            };
        }

        if (type === 'artist') {
            const res = await searchBase(query, page, 1002);
            const users = res.result?.userprofiles || [];
            const artists = [];
            for (const user of users) {
                const radioInfo = await searchUserRadio(user.userId);
                artists.push({
                    id: String(user.userId),
                    name: user.nickname,
                    avatar: user.avatarUrl,
                    worksNum: radioInfo.count || 0,
                });
            }
            return {
                isEnd: (res.result?.userCount || 0) <= page * pageSize,
                data: artists,
            };
        }

        return { isEnd: true, data: [] };
    },

    // ===== 获取专辑（电台）详情 =====
    async getAlbumInfo(albumItem, page) {
        const data = {
            radioId: albumItem.id,
            limit: pageSize,
            offset: (page - 1) * pageSize,
            csrf_token: '',
        };
        const pae = getParamsAndEnc(JSON.stringify(data));
        const res = await axios({
            method: 'post',
            url: 'https://music.163.com/weapi/dj/program/byradio',
            headers: headers,
            data: qs.stringify(pae),
        }).then(r => r.data);

        const programs = res.programs || [];
        return {
            isEnd: programs.length < pageSize,
            musicList: programs.filter(musicCanPlayFilter).map(p => {
                // 构建 qualities
                const qualities = {
                    standard: { size: p.mainSong.lMusic?.size || 0 },
                };
                if (p.mainSong.mMusic) {
                    qualities.standard = { size: p.mainSong.mMusic.size };
                }
                if (p.mainSong.hMusic) {
                    qualities.high = { size: p.mainSong.hMusic.size };
                }
                if (p.mainSong.sq) {
                    qualities.super = { size: p.mainSong.sq.size };
                }
                return {
                    id: String(p.mainSong.id),
                    title: p.mainSong.name,
                    artist: p.mainSong.artists[0]?.name || '未知',
                    artwork: p.coverUrl || '',
                    album: p.radio?.name || '',
                    duration: Math.floor((p.duration || 0) / 1000),
                    mainTrackId: p.mainSong.id,
                    qualities,
                };
            }),
        };
    },

    // ===== 获取歌手作品 =====
    async getArtistWorks(artistItem, page, type) {
        if (type === 'music') {
            return { isEnd: true, data: [] };
        } else if (type === 'album') {
            const res = await searchUserRadio(artistItem.id);
            return {
                isEnd: true,
                data: (res.djRadios || []).map(formatAlbumItem),
            };
        }
        return { isEnd: true, data: [] };
    },

    // ===== 获取播放链接（使用第三方 API） =====
    async getMediaSource(musicItem, quality) {
        const songId = musicItem.mainTrackId || musicItem.id;
        if (!songId) {
            throw new Error('缺少歌曲ID');
        }

        const apiBase = getApiBase();
        const data = await thirdPartyGet(apiBase, '/song/url', { id: songId });

        if (data.code !== 200) {
            throw new Error(`获取播放链接失败: ${data.code} - ${data.msg || ''}`);
        }

        const urlInfo = data.data?.[0];
        if (!urlInfo || !urlInfo.url) {
            throw new Error('该歌曲暂无可用音源');
        }

        return {
            url: urlInfo.url,
            headers: {
                'Referer': 'https://music.163.com/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
        };
    },

    // ===== 获取歌词 =====
    async getLyric(musicItem) {
        const data = { id: musicItem.id, csrf_token: '' };
        const pae = getParamsAndEnc(JSON.stringify(data));
        const res = await axios({
            method: 'post',
            url: 'https://music.163.com/api/dj/program/detail',
            headers: headers,
            data: qs.stringify(pae),
        }).then(r => r.data);
        const desc = res.program?.description || '';
        return { rawLrc: desc, translation: null };
    },

    // ===== 导入单曲 =====
    async importMusicItem(urlLike) {
        const apiBase = getApiBase();

        let id = urlLike;
        const idMatch = urlLike.match(/[?&]id=(\d+)/);
        if (idMatch) {
            id = idMatch[1];
        } else if (!/^\d+$/.test(id)) {
            const pathMatch = urlLike.match(/(\d+)/);
            if (pathMatch) id = pathMatch[1];
            else throw new Error('无法识别输入，请输入节目ID或含id参数的URL');
        }

        const data = await thirdPartyGet(apiBase, '/dj/program/detail', { id });
        if (data.code !== 200) {
            throw new Error(data.msg || `获取失败 (code: ${data.code})`);
        }
        if (!data.program) {
            throw new Error('未找到该节目');
        }
        return formatMusicItem(data.program);
    },

    // ===== 导入歌单 =====
    async importMusicSheet(urlLike) {
        const apiBase = getApiBase();

        let rid = urlLike;
        const ridMatch = urlLike.match(/[?&]rid=(\d+)/);
        if (ridMatch) {
            rid = ridMatch[1];
        } else if (!/^\d+$/.test(rid)) {
            const pathMatch = urlLike.match(/(\d+)/);
            if (pathMatch) rid = pathMatch[1];
            else throw new Error('无法识别输入，请输入电台ID或含rid参数的URL');
        }

        const data = await thirdPartyGet(apiBase, '/dj/program', {
            rid: rid,
            limit: 100,
            offset: 0,
        });
        if (data.code !== 200) {
            throw new Error(data.msg || `获取列表失败 (code: ${data.code})`);
        }
        const programs = data.programs || [];
        if (programs.length === 0) {
            throw new Error('该电台暂无节目');
        }
        return programs.map(formatMusicItem);
    },
};