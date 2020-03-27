<template>
  <div class="pcheader">
    <!-- 左右按钮 -->
    <div class="button">
      <el-button
        circle
        class="iconfont"
        @click="back"
      >&#xe609;
      </el-button>
      <el-button
        circle
        class="iconfont"
        @click="go"
      >&#xe600;
      </el-button>
    </div>
    <!-- 标题 -->
    <div class="title">
      <router-link
        to="/"
        tag="div"
      >{{title}}</router-link>
    </div>
    <!-- 搜索框 -->
    <div class="search">
      <el-input
        v-model="inputContent"
        placeholder="搜索"
        maxlength="20"
        prefix-icon="el-icon-search"
        @change="goSearch"
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PcHeader',
  data () {
    return {
      // 音乐标题
      title: 'PC-ONEMUSIC',
      // 输入框搜索内容
      inputContent: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    go () {
      this.$router.go(1)
    },
    goSearch () {
      if (this.inputContent != '') {
        this.$router.push('/search?result=' + this.inputContent, () => { })
      } else {
        this.$message({
          message: '请输入搜索的关键字',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.pcheader {
  display: flex;
  align-content: space-between;
  align-items: center;
  padding: 10px 10px;

  .button {
    flex: 2;
  }

  .title {
    font-family: 'OptimusPrinceps';
    font-size: 35px;
    color: #f39c12;
    text-shadow: 3px 5px 5px rgba(0, 0, 0, 0.4);
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    flex: 1.8;
  }
}
</style>