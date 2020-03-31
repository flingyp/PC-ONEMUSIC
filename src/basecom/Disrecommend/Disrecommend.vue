<template>
  <div class="container">
    <div class="title">推荐歌单</div>
    <div class="disrecommend">
      <ul>
        <li
          class="item"
          v-for="(item, index) in recommendData"
          :key="index"
          @click="goPlayListDetail(item.id)"
        >
          <div class="itemImg">
            <div class="desc-wrap">
              <span class="desc">{{item.copywriter}}</span>
            </div>
            <img v-lazy="item.picUrl">
            <span class="iconfont">&#xe6df;</span>
          </div>
          <p class="itemName">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Disrecommend',
  props: {
    recommendData: {
      type: Array
    }
  },
  methods: {
    // 跳转到歌单详情页
    goPlayListDetail (id) {
      this.$router.push({
        path: `/playlist/${id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  margin: 0 10px;

  .title {
    padding: 0 0 0 35px;
    font-size: 21px;
    font-weight: 600;
    opacity: 0.8;
    letter-spacing: 1px;
    text-shadow: 2px 1px 5px rgba(0, 0, 0, 0.5);
  }

  .disrecommend {
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 200px;
        margin: 10px 20px;
        cursor: pointer;

        .itemImg {
          position: relative;

          .desc-wrap {
            position: absolute;
            width: 100%;
            max-height: 50px;
            background: rgba(0, 0, 0, 0.4);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            color: #ecf0f1;
            font-size: 13px;
            opacity: 0.8;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 4px 0px;
            transform: translateY(-10px);
            opacity: 0;
            transition: opacity 0.4s linear, transform 0.4s linear;
            text-align: center;
          }

          .iconfont {
            position: absolute;
            right: -2px;
            bottom: -2px;
            width: 40px;
            height: 40px;
            color: #e74c3c;
            font-size: 30px;
            border-radius: 50%;
            opacity: 0;
            transform: translateX(20px);
            transition: opacity 0.4s linear, transform 0.4s linear;
            cursor: pointer;
          }
        }

        .itemImg:hover .desc-wrap {
          transform: translateY(0px);
          opacity: 1;
          transition: opacity 1s ease, transform 1s ease;
        }

        .itemImg:hover .iconfont {
          transform: translateX(0px);
          opacity: 1;
          transition: opacity 1s ease, transform 1s ease;
        }

        .itemName {
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
          margin: 0;
          opacity: 0.8;
          font-weight: 600;
          letter-spacing: 1px;
          color: #8e44ad;
          text-shadow: 1px 0px 5px rgba(142, 68, 173, 0.4);
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
}
</style>