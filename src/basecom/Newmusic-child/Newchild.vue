<template>
  <div>
    <div class="tab_bar">
      <span
        class="bar_item"
        :class="(barItem===tabBar[index].name) ? 'actived': ''"
        v-for="(item, index) in tabBar"
        :key="index"
        @click="isActived(index)"
      >{{tabBar[index].name}}</span>
    </div>

    <div class="table_music">
      <el-table
        :data="musicData"
        style="width:100%"
        stripe
      >
        <el-table-column
          width="80"
          prop="data"
          type="index"
        ></el-table-column>
        <el-table-column
          prop="data"
          width="200"
        >
          <template slot-scope="scope">
            <img
              :src="scope.row.album.blurPicUrl"
              min-width="70"
              height="70"
              @click="_getNewmusicUrl(scope.row.id)"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="音乐标题"
          width="280"
        >
          <template slot-scope="scope">
            <span class="music_name">{{scope.row.name}}</span>
            <i
              class="iconfont"
              v-if="scope.row.mvid!=0"
            >&#xe79b;</i>
          </template>
        </el-table-column>
        <el-table-column
          prop="artists"
          label="歌手"
          width="280"
        >
          <template slot-scope="scope">
            <span
              class="singer_name"
              v-for="(item, index) in scope.row.artists"
              :key="index"
            >{{item.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="album.name"
          label="专辑"
          width="280"
        >
        </el-table-column>
        <el-table-column
          prop="duration"
          label="时长"
          width="142"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getNewMusic, getNewmusicUrl } from '@/basejs/ajaxapi'
import { mapMutations } from 'vuex'

export default {
  name: 'Newchild',
  data () {
    return {
      // tar_bar 
      tabBar: [
        {
          name: '全部',
          type: 0
        },
        {
          name: '华语',
          type: 7
        },
        {
          name: '欧美',
          type: 96
        },
        {
          name: '日本',
          type: 8
        },
        {
          name: '韩国',
          type: 16
        }
      ],
      // 默认 谁高亮
      barItem: '全部',
      // 音乐数据
      musicData: [],
      // tabBar 的 type
      type: 0
    }
  },
  created () {
    this._getNewMusic(this.type)
  },
  methods: {
    ...mapMutations({
      setCurrentUrl: 'SET_CURRENT_URL'
    }),
    isActived (index) {
      this.barItem = this.tabBar[index].name
      // 并且改变 type 值
      this.type = this.tabBar[index].type
    },
    _getNewMusic (type) {
      const url = '/top/song'
      getNewMusic(url, type).then((res) => {
        if (res.statusText === 'OK') {
          let data = res.data.data
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
  },
  watch: {
    type (newType) {
      // 重新根据 type 渲染 数据
      this._getNewMusic(newType)
      this.$message({
        message: `切换到${this.barItem}歌单页面！`,
        type: 'success',
        showClose: true
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.tab_bar {
  display: flex;
  justify-content: flex-end;

  .bar_item {
    color: #808080;
    font-size: 17px;
    letter-spacing: 1px;
    padding: 0 20px;
    text-shadow: 1px 0 5px rgba(128, 128, 128, 1);
    cursor: pointer;
  }

  .actived {
    color: #dd6d60;
  }
}

.table_music {
  padding-top: 20px;
  padding-bottom: 50px;
  cursor: pointer;
}

.iconfont {
  color: red;
  padding-left: 5px;
  cursor: pointer;
}

.singer_name {
  padding: 0 5px;
}
</style>