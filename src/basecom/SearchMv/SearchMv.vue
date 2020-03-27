<template>
  <div class="newmv">
    <div
      class="item"
      v-for="(item, index) in searchData"
      :key="index"
      @click="goMvDetail(item.id)"
    >
      <div class="img_wrap">
        <img :src="item.cover">
        <span class="iconfont iconfont1">&#xe6df;</span>
        <div class="num_wrap">
          <div class="iconfont iconfont2">&#xe6df;</div>
          <div class="num">{{item.playCount}}</div>
        </div>
      </div>

      <div class="info_wrap">
        <div class="name">{{item.copywriter}}</div>
        <div class="singer">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchMv',
  props: {
    searchData: {
      type: Array
    }
  },
  methods: {
    goMvDetail (id) {
      this.$router.push({
        path: `/newmv/${id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.newmv {
  display: flex;
  flex-wrap: wrap;
  padding: 0 40px;

  .item {
    width: 250px;
    padding: 10px 15px;

    .img_wrap {
      width: 100%;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        cursor: pointer;
      }

      .iconfont1 {
        position: absolute;
        width: 40px;
        height: 40px;
        color: #dd6d60;
        font-size: 20px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.5s linear;
        cursor: pointer;
      }

      .num_wrap {
        position: absolute;
        display: flex;
        top: 0;
        right: 1px;
        color: #fff;
        opacity: 0.8;

        .iconfont2, .num {
          font-size: 14px;
          line-height: 19.2px;
          padding: 2px 0.5px 0 1px;
        }
      }
    }

    .img_wrap:hover .iconfont1 {
      opacity: 1;
      transition: opacity 0.5s linear;
    }

    .info_wrap {
      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 15px;
        margin: 0;
        opacity: 0.8;
        font-weight: 600;
        letter-spacing: 1px;
        color: #000;
        text-shadow: 3px 0px 5px rgba(0, 0, 0, 0.4);
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        padding: 0 0 5px 0;
      }

      .singer {
        color: #ccc;
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 14px;
      }
    }
  }
}
</style>