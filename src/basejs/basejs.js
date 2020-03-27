// 歌单 详情 信息
class SongDetail {
  constructor({ image, name, tags, nickname, signature, avatarUrl }) {
    this.image = image
    this.name = name
    this.tags = tags
    this.nickname = nickname
    this.signature = signature
    this.avatarUrl = avatarUrl
  }
}

export function createSongDetail (item) {
  return new SongDetail({
    // 歌单图片
    image: item.coverImgUrl,
    // 歌单名字
    name: item.name,
    // 歌单标签
    tags: item.tags,
    // 歌单创建者 名字
    nickname: item.creator.nickname,
    // 歌单 简介
    signature: item.creator.signature,
    // 歌单创建者 头像
    avatarUrl: item.creator.avatarUrl
  })
}

// MV 相关信息
class MvDetail {
  constructor({ singerImage, singerName, mvName, data, number, desc }) {
    this.singerImage = singerImage
    this.singerName = singerName
    this.mvName = mvName
    this.data = data
    this.number = number
    this.desc = desc
  }
}

export function createMvDetil (item) {
  return new MvDetail({
    // 歌手图片
    singerImage: item.singerImage,
    // 歌手名字
    singerName: item.artistName,
    // mv 名字
    mvName: item.name,
    // 发布日期
    data: item.publishTime,
    // 播放次数
    number: item.playCount,
    // MV简介
    desc: item.desc
  })
}


