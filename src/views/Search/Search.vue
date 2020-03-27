<template>
  <div class="container">
    <div class="title_wrap">
      <h2 class="search_result">{{this.$route.query.result}}</h2>
      <span class="search_count">找到{{searchCount}}个结果</span>
    </div>

    <el-tabs v-model="activeName">
      <el-tab-pane
        label="歌曲"
        name="music"
      >
        <search-music
          @getUrl='_getMusicUrl'
          :searchData="searchData"
        ></search-music>
      </el-tab-pane>
      <el-tab-pane
        label="歌单"
        name="playlist"
      >
        <search-list :searchData="searchData"></search-list>
      </el-tab-pane>
      <el-tab-pane
        label="MV"
        name="findmv"
      >
        <search-mv :searchData="searchData"></search-mv>
      </el-tab-pane>
    </el-tabs>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-size="limit"
      layout="prev, pager, next, jumper"
      :total="searchCount"
    >
    </el-pagination>
  </div>
</template>

<script>
import SearchMusic from '@/basecom/SearchMusic/SearchMusic'
import SearchList from '@/basecom/SearchList/SearchList'
import SearchMv from '@/basecom/SearchMv/SearchMv'
import { getSearchData, getNewmusicUrl } from '@/basejs/ajaxapi'
import { mapMutations } from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
      activeName: 'music',
      // 搜索的数据
      searchData: [],
      // 搜索的数据总数
      searchCount: 0,
      // 页码
      pagenum: 1,
      limit: 15,
      // 搜索类型
      type: 1
    }
  },
  components: {
    SearchMusic,
    SearchList,
    SearchMv
  },
  computed: {
    offset () {
      return (this.pagenum - 1) * this.limit
    },
    // keywords 搜索的关键字
    keywords () {
      return this.$route.query.result
    }

  },
  created () {
    this._getSearchData(this.keywords, this.limit, this.offset, this.type)
  },
  methods: {
    ...mapMutations({
      setCurrentUrl: 'SET_CURRENT_URL'
    }),
    _getSearchData (keywords, limit, offset, type) {
      const url = 'http://musicapi.leanapp.cn/search'
      // 调用 歌曲
      if (this.type === 1) {
        getSearchData(url, keywords, limit, offset, type).then((res) => {
          if (res.statusText === 'OK') {
            this.searchCount = res.data.result.songCount
            let data = res.data.result.songs
            // 提取歌手名字
            data.map((item) => {
              let singerName = []
              item.artists.forEach((val) => {
                singerName.push(val.name)
              })
              item.singerName = singerName
            })
            // 修改歌曲时长格式
            data.map((item) => {
              let duration = item.duration
              let miao = duration / 1000
              // 分钟
              let min = Math.floor(miao / 60)
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
              item.duration = time
            })
            this.searchData = data
          }
        })
      }
      // 调用 歌单
      if (this.type === 1000) {
        getSearchData(url, keywords, limit, offset, type).then((res) => {
          if (res.statusText === 'OK') {
            this.searchCount = res.data.result.playlistCount
            this.searchData = res.data.result.playlists
          }
        })
      }
      if (this.type === 1004) {
        getSearchData(url, keywords, limit, offset, type).then((res) => {
          if (res.statusText === 'OK') {
            this.searchCount = res.data.result.mvCount
            this.searchData = res.data.result.mvs
          }
        })
      }
    },
    _getMusicUrl (id) {
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
    },
    // 点击分页
    handleCurrentChange (newCurrent) {
      // 获取当前页
      this.pagenum = newCurrent
      // 根据 newCurrent 获取这页的数据
      this._getSearchData(this.keywords, this.limit, this.offset, this.type)
    }
  },
  watch: {
    keywords () {
      // 监听搜索框中的关键字的变化 重新调用接口获取数据
      this._getSearchData(this.keywords, this.limit, this.offset, this.type)
    },
    activeName (newActiveName) {
      if (newActiveName === 'music') {
        this.type = 1
      }
      if (newActiveName === 'playlist') {
        this.type = 1000
      }
      if (newActiveName === 'findmv') {
        this.type = 1004
      }
      this._getSearchData(this.keywords, this.limit, this.offset, this.type)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;

  .title_wrap {
    display: flex;
    height: 30px;
    padding-bottom: 30px;

    .search_result {
      margin: 0;
      line-height: 30px;
      margin-right: 10px;
      color: #c0392b;
      text-shadow: 4px 1px 5px rgba(192, 57, 43, 0.5);
    }

    .search_count {
      font-size: 15px;
      color: #BEBEBE;
      line-height: 40px;
    }
  }

  .el-tabs {
    padding-bottom: 60px;
  }

  .el-pagination {
    padding-bottom: 50px;
    text-align: center;
  }
}
</style>
