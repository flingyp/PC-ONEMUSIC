import axios from 'axios'
// 发现音乐组件 请求函数
export async function getRecommendData (url) {
  const res = await axios.get(`${url}`)
  return res
}

// 请求音乐歌曲的URL地址
export async function getNewmusicUrl (url, id) {
  const res = await axios.get(`${url}`, {
    params: {
      id
    }
  })
  return res
}

// 推荐歌单  请求一条精品歌单数据
export async function getGoodPlaylist (url, tag) {
  const res = await axios.get(`${url}?limit=1`, {
    params: {
      cat: tag
    }
  })
  return res
}

// 推荐歌单  歌单 数据
// url 请求地址 tag 请求数据的类型 例如： 全部 欧美 华语等  pagenum 当前页数  limit 每页多少条
export async function getPlaylist (url, tag, pagenum, limit) {
  const res = await axios.get(`${url}`, {
    params: {
      limit: limit,
      cat: tag,
      offset: (pagenum - 1) * 10
    }
  })
  return res
}

// 最新音乐 歌单数据
export async function getNewMusic (url, type) {
  const res = await axios.get(`${url}`, {
    params: {
      type
    }
  })
  return res
}

// 发现MV MV数据
export async function getMV (url, area, type, order, limit, offset) {
  const res = await axios.get(`${url}`, {
    params: {
      area,
      type,
      order,
      limit,
      offset
    }
  })
  return res
}

// 搜索 
export async function getSearchData (url, keywords, limit, offset, type) {
  const res = await axios.get(`${url}`, {
    params: {
      keywords,
      limit,
      offset,
      type
    }
  })
  return res
}

// 请求歌单详情数据
export async function getPlayListDetail (url, id) {
  const res = await axios.get(`${url}`, {
    params: {
      id
    }
  })
  return res
}

// 请求 MV 播放地址
export async function getMvUrl (url, id) {
  const res = await axios.get(`${url}`, {
    params: {
      id
    }
  })
  return res
}

// 请求 MV 相关信息
export async function getMvDetail (url, mvid) {
  const res = await axios.get(`${url}`, {
    params: {
      mvid
    }
  })
  return res
}

// 歌手相关信息
export async function getSinger (url, id) {
  const res = await axios.get(`${url}`, {
    params: {
      id
    }
  })
  return res
}

// 相似 MV
export async function getSimiMv (url, mvid) {
  const res = await axios.get(`${url}`, {
    params: {
      mvid
    }
  })
  return res
}
