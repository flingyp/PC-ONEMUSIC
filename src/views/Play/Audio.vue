<template>
  <div class="player">
    <audio
      class="audioPlayer"
      autoplay
      loop
      controls
      :src="currentUrl"
      ref="audio"
      @playing="waitMusic"
    ></audio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Audio',
  computed: {
    ...mapGetters([
      'currentUrl'
    ])
  },
  methods: {
    waitMusic () {
      this.$message({
        message: '歌曲正在缓存中......',
        type: 'warning',
        showClose: true
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.player {
  width: 100%;
  height: 60px;
  background: #f1f3f4;
  position: fixed;
  bottom: 0;

  .audioPlayer {
    width: 100%;
    outline: none;
  }
}
</style>