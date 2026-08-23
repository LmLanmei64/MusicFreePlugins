// 可修改的 API 基础地址（用户可替换为其他代理）
const API_BASE = "https://ncm.sarmon.top/"; // 备选："https://163api.qijieya.cn/"

// 格式化歌曲评论（支持嵌套回复）
function formatComment(item) {
    return {
        id: item.commentId,
        nickName: item.user?.nickname || '',
        avatar: item.user?.avatarUrl || '',
        comment: item.content || '',
        like: item.likedCount || 0,
        createAt: item.time || 0,
        location: item.ipLocation?.location || '',
        // 处理回复（递归格式化）
        replies: (item.beReplied || []).map(formatComment),
        // 其他附加字段
        type: "6"
    };
}

// 获取歌曲评论（每次只获取一页，通过 offset 分页，isEnd 根据 more 字段判断）
async function getMusicComments(musicItem, page = 1) {
    const limit = 20;                     // 每页评论数
    const offset = (page - 1) * limit;    // 计算偏移量
    
    // 构建请求 URL
    const url = `${API_BASE}comment/music`;
    
    try {
        const response = await axios_1.default.get(url, {
            params: {
                id: musicItem.id,
                limit: limit,
                offset: offset
            },
            headers: {
                // 可添加必要的 Headers，如 Referer 等
                'User-Agent': 'Mozilla/5.0'
            }
        });
        
        const data = response.data;
        
        // 检查响应有效性
        if (data.code !== 200 || !data.comments) {
            throw new Error(`获取评论失败: ${data.msg || '未知错误'}`);
        }
        
        // 格式化评论列表
        const comments = (data.comments || []).map(formatComment);
        
        // 判断是否还有更多评论
        // more 为 true 表示还有下一页，否则已到底
        const isEnd = !data.more;  // 如果 more 为 false，则 isEnd=true
        
        return {
            isEnd: isEnd,
            data: comments,
            total: data.total || 0   // 可选，返回总条数
        };
    } catch (error) {
        console.error("获取歌曲评论时出错:", error.message);
        // 出错时返回空列表并标记结束（避免死循环）
        return {
            isEnd: true,
            data: []
        };
    }
}
