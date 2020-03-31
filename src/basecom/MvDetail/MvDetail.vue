<template>
  <div class="container">
    <!-- mv 详情部分 -->
    <div class="mv_wrap">
      <h3 class="title">MV详情</h3>
      <!-- mv 播放器 -->
      <div class="video">
        <video
          controls="controls"
          :src="mvUrl"
        ></video>
      </div>
      <!-- 相关信息 -->
      <div class="info">
        <div class="info_singer">
          <div class="avatar_wrap">
            <img :src="MvDetail.singerImage">
          </div>
          <span>{{MvDetail.singerName}}</span>
        </div>
        <div class="info_mv">
          <h2 class="title">{{MvDetail.mvName}}</h2>
          <span class="date">发布：{{MvDetail.data}}</span>
          <span class="number">播放：{{MvDetail.number}}次</span>
          <div class="desc">{{MvDetail.desc}}</div>
        </div>
      </div>

    </div>
    <!-- mv 推荐部分 -->
    <div class="mv_recommend">
      <h3 class="title">相关推荐</h3>
      <div class="mvs">
        <div
          class="items"
          v-for="(item, index) in miniMvs"
          :key="index"
          @click="goMvDetail(item.id)"
        >
          <div class="item">
            <div class="img_wrap">
              <img :src="item.cover">
            </div>
            <div class="info_wrap">
              <div class="name">{{item.name}}</div>
              <div class="singer">{{item.artistName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMvUrl, getMvDetail, getSinger, getSimiMv } from '@/basejs/ajaxapi'
import { mapMutations, mapGetters } from 'vuex'
import { createMvDetil } from '@/basejs/basejs'
export default {
  name: 'MvDetail',
  data () {
    return {
      // 存放歌手相关信息
      MvDetail: {},
      // 存放 相似MV
      miniMvs: []
    }
  },
  computed: {
    ...mapGetters([
      'mvUrl'
    ]),
    // mv 的 id
    id () {
      return this.$route.params.id
    }
  },
  created () {
    // MV 播放地址
    this._getMvUrl(this.id)
    // MV 相关信息
    this._getMvDetail(this.id)
    // 相似 MV
    this._getSimiMv(this.id)
  },
  methods: {
    ...mapMutations({
      setMvUrl: 'SET_MV_URL'
    }),
    _getMvUrl (id) {
      const url = '/mv/url'
      getMvUrl(url, id).then((res) => {
        if (res.statusText === 'OK') {
          const mvUrl = res.data.data.url
          this.setMvUrl(mvUrl)
        }
      })
    },
    _getMvDetail (id) {
      const url = '/mv/detail'
      getMvDetail(url, id).then((res) => {
        if (res.statusText === 'OK') {
          const item = res.data.data
          // 获取歌手 id
          const singerId = res.data.data.artists[0].id
          const singerUrl = '/artists'
          getSinger(singerUrl, singerId).then((res) => {
            if (res.statusText === 'OK') {
              const singerImage = res.data.artist.img1v1Url
              // 把歌手图片 放到 item对象上
              item.singerImage = singerImage
              this.MvDetail = createMvDetil(item)
            }
          })
        }
      })
    },
    _getSimiMv (id) {
      const url = '/simi/mv'
      getSimiMv(url, id).then((res) => {
        if (res.statusText === 'OK') {
          this.miniMvs = res.data.mvs
        }
      })
    },
    goMvDetail (id) {
      // console.log(id)
      this.$router.push({
        path: `/newmv/${id}`
      })
    }
  },
  watch: {
    '$route' (to) {
      console.log(to)
      const id = to.params.id
      // MV 播放地址
      this._getMvUrl(id)
      // MV 相关信息
      this._getMvDetail(id)
      // 相似 MV
      this._getSimiMv(id)
    }
  }
}
</script>a

<style lang="stylus" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding-bottom: 100px;

  .mv_wrap {
    width: 700px;
    margin-right: 35px;

    .video {
      width: 100%;
      height: 390px;

      video {
        height: 100%;
        width: 100%;
        outline: none;
        border-radius: 8px;
      }
    }

    .info {
      padding-top: 20px;

      .info_singer {
        display: flex;
        box-align: center;
        align-items: center;

        .avatar_wrap {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 10px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .info_mv {
        .title {
          font-size: 30px;
        }

        .date, .number {
          color: #cccccc;
          font-size: 14px;
          padding: 0 4px;
        }

        .desc {
          padding-top: 10px;
        }
      }
    }
  }

  .mv_recommend {
    flex: 1;

    .mvs {
      .items {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 10px;

        .item {
          width: 100%;
          display: flex;
          box-align: center;
          align-items: center;
          cursor: pointer;

          .img_wrap {
            width: 180px;
            position: relative;
            padding-right: 10px;

            img {
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }

          .info_wrap {
            flex: 1;

            .name {
              font-size: 15px;
            }

            .singer {
              font-size: 14px;
              color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>