<template>
  <div>
    <!-- 轮播组件 -->
    <swiper :swiperData="swiperData"></swiper>
    <!-- 推荐歌单组件 -->
    <disrecommend :recommendData="recommendData"></disrecommend>
    <!-- 最新音乐组件 -->
    <disnewmusic
      :newmusicData="newmusicData"
      @getMusicUrl="getMusicUrl"
    ></disnewmusic>
    <!-- 推荐MV组件 -->
    <disnewmv :newmvData="newmvData"></disnewmv>
  </div>
</template>

<script>
import Swiper from '@/basecom/Swiper/Swiper'
import Disrecommend from '@/basecom/Disrecommend/Disrecommend'
import Disnewmusic from '@/basecom/Disnewmusic/Disnewmusic'
import Disnewmv from '@/basecom/Disnewmv/Disnewmv'
import { getRecommendData, getNewmusicUrl } from '@/basejs/ajaxapi'
import { mapMutations } from 'vuex'


export default {
  name: 'Discovery',
  components: {
    Swiper,
    Disrecommend,
    Disnewmusic,
    Disnewmv
  },
  data () {
    return {
      // 存放轮播图数据
      swiperData: [],
      // 存放推荐歌单数据
      recommendData: [],
      // 存放新音乐歌单歌曲
      newmusicData: [],
      // 存放最新mv数据
      newmvData: []
    }
  },
  created () {
    // 获取轮播图数据
    this._getSwiperData()
    // 获取推荐歌单数据
    this._getRecommendData()
    // 获取新音乐歌单数据
    this._getNewMusicData()
    // 获取最新mv数据
    this._getNewMvData()
  },
  methods: {
    ...mapMutations({
      setCurrentUrl: 'SET_CURRENT_URL'
    }),
    // 轮播图 数据
    _getSwiperData () {
      const url = '/banner?type=0'
      getRecommendData(url).then((res) => {
        if (res.statusText === 'OK') {
          this.swiperData = res.data.banners
        }
      })
    },
    // 推荐歌单 数据
    _getRecommendData () {
      const url = '/personalized?limit=10'
      getRecommendData(url).then((res) => {
        if (res.statusText === 'OK') {
          this.recommendData = res.data.result
        }
      })
    },
    // 新音乐歌单 数据
    _getNewMusicData () {
      const url = '/personalized/newsong'
      getRecommendData(url).then((res) => {
        if (res.statusText === 'OK') {
          this.newmusicData = res.data.result
        }
      })
    },
    // 最新mv 数据
    _getNewMvData () {
      const url = '/personalized/mv'
      getRecommendData(url).then((res) => {
        if (res.statusText === 'OK') {
          this.newmvData = res.data.result
        }
      })
    },
    // 新音乐歌曲的 url
    getMusicUrl (id) {
      // 通过 id 值去请求歌曲的URL
      // 这里调用另一个网站的接口 原本接口好像没了
      const url = 'https://autumnfish.cn/song/url'
      getNewmusicUrl(url, id).then((res) => {
        if (res.statusText === 'OK') {
          const url = res.data.data[0].url
          // 把URL存入vuex中
          this.setCurrentUrl(url)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped></style>