<template>
  <el-table
    :data="searchData"
    style="width: 100%"
  >
    <el-table-column
      prop="date"
      label="#"
      width="60"
      type="index"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="音乐标题"
      width="250"
    >
      <template slot-scope="scope">
        <span
          class="music_name"
          @dblclick="getMusicUrl(scope.row.id)"
        >{{scope.row.name}}</span>
        <i
          class="iconfont"
          v-if="scope.row.mvid!=0"
        >&#xe79b;</i>
      </template>
    </el-table-column>
    <el-table-column
      prop="singerName"
      label="歌手"
    >
      <template slot-scope="scope">
        <span
          class="singer_name"
          v-for="(item, index) in scope.row.singerName"
          :key="index"
        >{{item}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="album.name"
      label="专辑"
    >
    </el-table-column>
    <el-table-column
      prop="duration"
      label="时长"
      width="80"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'SearchMusic',
  props: {
    searchData: {
      type: Array
    }
  },
  methods: {
    getMusicUrl (id) {
      // 音乐 id 值 调用父组件的自定义事件
      this.$emit('getUrl', id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.music_name {
  cursor: pointer;
}

.iconfont {
  color: red;
  padding-left: 5px;
  cursor: pointer;
}

.singer_name {
  padding-right: 8px;
  color: #ccc;
}
</style>