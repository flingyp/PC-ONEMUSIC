<template>
  <div class="container">
    <!-- top顶部部分 -->
    <div class="top_card">
      <div class="icon_warp">
        <img
          class="icon"
          :src="playlists.coverImgUrl"
          alt="精品歌单"
        >
      </div>
      <div class="content">
        <div class="tag">精品歌单</div>
        <div class="title">{{playlists.copywriter}}</div>
        <div class="info">{{playlists.description}}</div>
      </div>
      <img
        class="bg"
        :src="playlists.coverImgUrl"
      >
      <div class="bg_mask"></div>
    </div>
    <!-- 中间部分 -->
    <div class="tab">
      <div class="tab_title">
        <ul>
          <li
            class="title_item"
            :class="{actived:tag===tabData[index]}"
            @click="isActived(index)"
            v-for="(item, index) in tabData"
            :key="index"
          >{{tabData[index]}}</li>
        </ul>
      </div>

      <div class="disrecommend">
        <ul>
          <li
            class="item"
            v-for="(item, index) in playlist"
            :key="index"
            @click="goPlayListDetail(item.id)"
          >
            <div class="itemImg">
              <div class="desc-wrap">
                <span class="desc">播放量: {{item.playCount}}</span>
              </div>
              <img :src="item.coverImgUrl">
              <span class="iconfont">&#xe6df;</span>
            </div>
            <p class="itemName">{{item.description}}</p>
          </li>
        </ul>
      </div>

    </div>
    <!-- 底部分页部分 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[5,10,15,20]"
      :page-size="pagesize"
      layout="sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getGoodPlaylist, getPlaylist } from '@/basejs/ajaxapi'
export default {
  name: 'Playchild',
  data () {
    return {
      tabData: ['全部', '欧美', '华语', '流行', '说唱', '摇滚', '民谣', '电子', '轻音乐', '影视原声', 'ACG'],
      // 一条 精品歌单数据
      playlists: {},
      // 歌单 数据
      playlist: [],
      // 默认 全部 高亮
      tag: '全部',
      // 当前页数
      pagenum: 1,
      // 每页显示多少条
      pagesize: 10,
      // 总页数
      total: 0
    }
  },
  created () {
    // 获取精品歌单数据
    this._getGoodPlaylist(this.tag)
    // 获取歌单数据
    this._getPlaylist(this.tag, this.pagenum, this.pagesize)
  },
  methods: {
    isActived (index) {
      // 点击 tab 的一项li后  切换 tabName的值
      this.tag = this.tabData[index]
    },
    _getGoodPlaylist (tag) {
      const url = '/top/playlist/highquality'
      getGoodPlaylist(url, tag).then((res) => {
        this.playlists = res.data.playlists[0]
      })
    },
    _getPlaylist (tag, pagenum, pagesize) {
      const url = '/top/playlist'
      getPlaylist(url, tag, pagenum, pagesize).then((res) => {
        this.total = res.data.total
        this.playlist = res.data.playlists
      })
    },
    // 每页条数发生变化时
    handleSizeChange (newPage) {
      this.pagesize = newPage
      this._getPlaylist(this.tag, this.pagenum, this.pagesize)
      this.$message({
        message: '已切换当前显示条数',
        type: 'success',
        showClose: true
      })
    },
    // 当前页发生变化时
    handleCurrentChange (newPage) {
      this.pagenum = newPage
      this._getPlaylist(this.tag, newPage, this.pagesize)
    },
    // 跳转到歌单详情页
    goPlayListDetail (id) {
      this.$router.push({
        path: `/playlist/${id}`
      })
    }
  },
  watch: {
    tag (newTag) {
      this._getGoodPlaylist(newTag)
      this._getPlaylist(newTag, this.pagenum, this.pagesize)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  max-width: 1180px;
  margin: 0 auto;

  .top_card {
    padding: 20px;
    display: flex;
    overflow: hidden;
    height: 200px;
    position: relative;
    border-radius: 8px;
    box-sizing: border-box;

    .icon_warp {
      z-index: 1;
      margin-right: 20px;

      .icon {
        width: 160px;
        height: 160px;
        border-radius: 50%;
      }
    }

    .content {
      z-index: 1;

      .tag {
        width: 100px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        color: #7bed9f;
        border: 1px solid #7bed9f;
        text-shadow: 1px 1px 5px #7bed9f;
        cursor: pointer;
        border-radius: 5px;
      }

      .title {
        color: #ffffff;
        padding-top: 10px;
        padding-bottom: 4px;
      }

      .info {
        color: #888482;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
    }

    .bg {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      filter: blur(20px);
    }

    .bg_mask {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .tab {
    padding-top: 10px;

    .tab_title {
      padding-bottom: 10px;

      ul {
        list-style: none;
        display: flex;
        padding: 0;

        .title_item {
          color: #808080;
          font-size: 17px;
          padding: 0 10px;
          cursor: pointer;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          letter-spacing: 1px;
        }

        .actived {
          color: #EA2027;
        }
      }
    }

    .disrecommend {
      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        padding: 0;

        .item {
          width: 200px;
          margin: 10px 15px;
          cursor: pointer;

          .itemImg {
            position: relative;

            .desc-wrap {
              position: absolute;
              width: 100%;
              max-height: 50px;
              background: rgba(0, 0, 0, 0.4);
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              color: #ecf0f1;
              font-size: 13px;
              opacity: 0.8;
              overflow: hidden;
              text-overflow: ellipsis;
              padding: 4px 0px;
              transform: translateY(-10px);
              opacity: 0;
              transition: opacity 0.4s linear, transform 0.4s linear;
              text-align: center;
            }

            .iconfont {
              position: absolute;
              right: -2px;
              bottom: -2px;
              width: 40px;
              height: 40px;
              color: #e74c3c;
              font-size: 30px;
              border-radius: 50%;
              opacity: 0;
              transform: translateX(20px);
              transition: opacity 0.4s linear, transform 0.4s linear;
              cursor: pointer;
            }
          }

          .itemImg:hover .desc-wrap {
            transform: translateY(0px);
            opacity: 1;
            transition: opacity 1s ease, transform 1s ease;
          }

          .itemImg:hover .iconfont {
            transform: translateX(0px);
            opacity: 1;
            transition: opacity 1s ease, transform 1s ease;
          }

          .itemName {
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
            margin: 0;
            opacity: 0.8;
            font-weight: 600;
            letter-spacing: 1px;
            color: #8e44ad;
            text-shadow: 1px 0px 5px rgba(142, 68, 173, 0.4);
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
        }
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }

  .el-pagination {
    padding-bottom: 50px;
    text-align: center;
  }
}
</style>