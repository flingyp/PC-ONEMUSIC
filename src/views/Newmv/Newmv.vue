<template>
  <div>
    <newmvchild v-if="!this.$route.params.id"></newmvchild>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import Newmvchild from '@/basecom/Newmv-child/Newmvchild'
export default {
  name: 'Newmv',
  components: {
    Newmvchild
  }
}
</script>

<style lang="stylus" scoped></style>