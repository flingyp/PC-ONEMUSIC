<template>
  <div class="container">
    <div class="title">最新音乐</div>
    <div class="newmusic">
      <div
        class="item"
        v-for="(item, index) in newmusicData"
        :key="index"
      >
        <div
          class="img_wrap"
          @click="getMusicUrl(item.id)"
        >
          <img v-lazy="item.picUrl">
          <span class="iconfont">&#xe6df;</span>
        </div>
        <div class="song_wrap">
          <div class="song_name">{{item.name}}</div>
          <div class="singer">{{item.song.artists[0].name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Disnewmusic',
  props: {
    newmusicData: {
      type: Array
    }
  },
  methods: {
    getMusicUrl (id) {
      // 触发父组件 的自定义事件
      this.$emit('getMusicUrl', id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  margin: 0 10px;

  .title {
    padding: 0 0 20px 35px;
    font-size: 21px;
    font-weight: 600;
    opacity: 0.8;
    letter-spacing: 1px;
    text-shadow: 2px 1px 5px rgba(0, 0, 0, 0.5);
  }

  .newmusic {
    display: flex;
    flex-wrap: wrap;
    padding: 0 55px;

    .item {
      width: 50%;
      display: flex;
      padding: 8px 0px;
      border-radius: 5px;
      cursor: pointer;

      .img_wrap {
        position: relative;
        padding: 0 0 0 10px;

        img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          // padding: 0 0 0 10px;
        }

        .iconfont {
          position: absolute;
          color: #dd6d60;
          font-size: 25px;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s linear;
          cursor: pointer;
          left: 30%;
          top: 22px;
        }
      }

      .img_wrap:hover .iconfont {
        opacity: 0.8;
      }

      .song_wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        padding: 10px;
        font-size: 15px;
        color: rgb(255, 99, 72);
        letter-spacing: 1px;
        font-weight: 700;
        text-shadow: 2px 2px 5px rgba(255, 99, 72, 0.6);
      }
    }

    .item:hover {
      transition: background-color 1s linear;
      -webkit-transition: background-color 1s linear;
      background: rgba(189, 195, 199, 0.4);
    }
  }
}
</style>