<template>
  <div>
    <router-view v-if="this.$route.params.id"></router-view>
    <playchild v-else></playchild>
  </div>
</template>

<script>
import Playchild from '@/basecom/PlayList-child/Playchild'
export default {
  name: 'Playlist',
  components: {
    Playchild
  }
}
</script>

<style lang="stylus" scoped></style>