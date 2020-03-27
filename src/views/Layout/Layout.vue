<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="header">
      <pc-header></pc-header>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside
        width="200px"
        class="aside"
      >
        <pc-aside></pc-aside>
      </el-aside>
      <!-- 主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- 播放器 -->
    <play></play>
  </el-container>
</template>

<script>
import PcHeader from '@/basecom/Header/PcHeader'
import PcAside from '@/basecom/Aside/PcAside'
import Play from '@/views/Play/Audio'
export default {
  name: 'Layout',
  components: {
    PcHeader,
    PcAside,
    Play
  },
  created () {
    // 当用户刷新浏览器时回到首页 发现音乐组件
    if (this.$router.path !== '/discovery') {
      this.$router.replace('/discovery')
    }
  }
}
</script>

<style lang="stylus" scoped>
.header {
  background: #f9f9f9;
}

.aside {
  background: #f5f6fa;
  height: 602px;
}
</style>