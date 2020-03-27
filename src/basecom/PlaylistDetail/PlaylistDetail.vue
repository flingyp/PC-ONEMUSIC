<template>
  <div class="container">
    <!-- 顶部歌单详情信息 -->
    <div class="top_wrap">
      <div class="img_wrap">
        <img :src="itemDetail.image">
      </div>
      <div class="info_wrap">
        <p class="title">{{itemDetail.name}}</p>
        <div class="author">
          <img :src="itemDetail.avatarUrl">
          <span class="author_name">{{itemDetail.nickname}}</span>
        </div>
        <div class="tag">
          <span class="title">标签：</span>
          <ul>
            <li
              v-for="(item, index) in tags"
              :key="index"
            >{{item}}</li>
          </ul>
        </div>
        <div class="desc">
          <span class="desc_title">简介：</span>
          <span class="desv_content">{{itemDetail.signature}}</span>
        </div>
      </div>
    </div>
    <!-- 网友评论信息 -->
    <el-tabs v-model="activeData">
      <el-tab-pane
        label="歌曲列表"
        name="musicsList"
      >
        <el-table
          :data="musicData"
          style="width:100%"
          stripe
        >
          <el-table-column
            width="60"
            prop="data"
            type="index"
          ></el-table-column>
          <el-table-column
            prop="data"
            width="120"
          >
            <template slot-scope="scope">
              <img
                class="music_img"
                :src="scope.row.al.picUrl"
                height="70"
                width="70"
                @dblclick="_getNewmusicUrl(scope.row.id)"
              />
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="音乐标题"
          >
            <template slot-scope="scope">
              <span class="music_name">{{scope.row.name}}</span>
              <i
                class="iconfont"
                v-if="scope.row.mv!=0"
              >&#xe79b;</i>
            </template>
          </el-table-column>
          <el-table-column
            prop="singerName"
            label="歌手"
          >
            <template slot-scope="scope">
              <span
                v-for="(item, index) in scope.row.ar"
                :key="index"
              >{{item.name}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="al.name"
            label="专辑"
          >
          </el-table-column>
          <el-table-column
            prop="dt"
            label="时长"
            width="80"
          >
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane
        label="评论"
        name="desc"
      >
        <song-desc></song-desc>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getPlayListDetail, getNewmusicUrl } from '@/basejs/ajaxapi'
import { mapMutations } from 'vuex'
import SongDesc from '@/basecom/SongDesc/SongDesc'
import { createSongDetail } from '@/basejs/basejs'
export default {
  name: 'PlaylistDetail',
  data () {
    return {
      activeData: 'musicsList',
      musicData: [],
      itemDetail: {}
    }
  },
  computed: {
    // 歌单id
    id () {
      return this.$route.params.id
    },
    tags () {
      return this.itemDetail.tags
    }
  },
  components: {
    SongDesc
  },
  created () {
    // 获取歌单 详情数据
    this._getPlayListDetail(this.id)
  },
  methods: {
    ...mapMutations({
      setCurrentUrl: 'SET_CURRENT_URL'
    }),
    _getPlayListDetail (id) {
      const url = '/playlist/detail'
      getPlayListDetail(url, id).then((res) => {
        if (res.statusText === 'OK') {
          let item = res.data.playlist
          this.itemDetail = createSongDetail(item)
          let data = res.data.playlist.tracks
          data.map((item) => {
            let duration = item.dt
            let miao = duration / 1000
            // 分钟
            let min = Math.ceil(miao / 60)
            // 秒
            let second = Math.floor(miao % 60)
            if (min < 10) {
              min = '0' + min
            }
            if (second < 10) {
              second = '0' + second
            }
            let time = `${min}:${second}`
            // 把修改的时间 重新赋给 duration
            item.dt = time
          })
          // 歌单歌曲数据
          this.musicData = data
        }
      })
    },
    _getNewmusicUrl (id) {
      const url = 'https://autumnfish.cn/song/url'
      getNewmusicUrl(url, id).then((res) => {
        if (res.statusText === 'OK') {
          const musicUrl = res.data.data[0].url
          if (musicUrl === null) {
            this.$message({
              message: '未查找到歌曲的音源',
              type: 'warning',
              showClose: true
            })
          }
          this.setCurrentUrl(musicUrl)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;

  .top_wrap {
    display: flex;
    padding-top: 30px;

    .img_wrap {
      margin-right: 30px;

      img {
        width: 230px;
        height: 230px;
      }
    }

    .info_wrap {
      .title {
        margin-bottom: 20px;
      }

      .author {
        display: flex;
        box-align: center;
        align-items: center;
        margin-bottom: 25px;

        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .author_name {
          margin-right: 10px;
        }
      }

      .tag {
        display: flex;
        margin-bottom: 15px;

        .title {
          margin: 0;
        }

        ul {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          box-align: center;
          align-items: center;

          li {
            padding: 0 5px;
          }
        }
      }

      .desc {
      }
    }
  }

  .el-tabs {
    padding-top: 10px;
    padding-bottom: 50px;

    .music_img {
      cursor: pointer;
    }

    .iconfont {
      color: red;
      padding-left: 5px;
      cursor: pointer;
    }
  }
}
</style>