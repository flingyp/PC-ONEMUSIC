<template>
  <div class="pcaside">
    <!-- 发现音乐 -->
    <div class="discovery">
      <span class="iconfont">&#xe603;</span>
      <router-link
        to="/discovery"
        tag="span"
        class="router_link"
      >发现音乐</router-link>
    </div>
    <!-- 推荐歌单 -->
    <div class="playlist">
      <span class="iconfont">&#xe68d;</span>
      <router-link
        to="/playlist"
        tag="span"
        class="router_link"
      >推荐歌单</router-link>
    </div>
    <!-- 最新音乐 -->
    <div class="newmusic">
      <span class="iconfont">&#xe662;</span>
      <router-link
        to="/newmusic"
        tag="span"
        class="router_link"
      >最新音乐</router-link>
    </div>
    <!-- 最新MV -->
    <div class="newmv">
      <span class="iconfont">&#xe79b;</span>
      <router-link
        to="/newmv"
        tag="span"
        class="router_link"
      >发现MV</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PcAside'
}
</script>

<style lang="stylus" scoped>
.discovery, .playlist, .newmusic, .newmv {
  padding: 25px 8px 20px 25px;
  cursor: pointer;

  .iconfont {
    padding: 0 10px 0 0;
    font-size: 20px;
    color: #00b894;
    text-shadow: 5px 2px 10px rgba(0, 184, 148, 0.8);
  }

  .router_link {
    font-size: 18px;
    color: #00b894;
    text-shadow: 5px 2px 10px rgba(0, 184, 148, 0.8);
  }
}
</style>