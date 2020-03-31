<template>
  <el-carousel
    :interval="4500"
    type="card"
    height="230px"
    class="container"
  >
    <el-carousel-item
      v-for="(item, index) in swiperData"
      :key="index"
      class="item"
    >
      <h3 class="medium">
        <img v-lazy="item.imageUrl">
      </h3>
    </el-carousel-item>

  </el-carousel>
</template>

<script>

export default {
  name: 'Swiper',
  props: {
    swiperData: {
      type: Array
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  margin: 0 40px;
}

.item {
  border-radius: 20px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.9;
  line-height: 200px;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>