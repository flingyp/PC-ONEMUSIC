<template>
  <div class="container">
    <div class="filter_bar">
      <!-- 地区 -->
      <div class="secition_bar">
        <span class="secition">地区：</span>
        <ul class="secition_tabs">
          <li
            class="item"
            :class="(defaultSecition===item)? 'actived': ''"
            v-for="(item, index) in secitionData"
            :key="index"
            @click="isActivedSecition(index)"
          >{{item}}</li>
        </ul>
      </div>
      <!-- 类型 -->
      <div class="type_bar">
        <span class="type">类型：</span>
        <ul class="type_tabs">
          <li
            class="item"
            :class="(defaultType===item)? 'actived': ''"
            v-for="(item, index) in typeData"
            :key="index"
            @click="isActivedType(index)"
          >{{item}}</li>
        </ul>
      </div>
      <!-- 排序 -->
      <div class="order_bar">
        <span class="order">排序：</span>
        <ul class="order_tabs">
          <li
            class="item"
            :class="(defaultOrder===item)? 'actived': ''"
            v-for="(item, index) in orderData"
            :key="index"
            @click="isActivedOrder(index)"
          >{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="newmvs">
      <div class="newmv_items">
        <div
          class="mv_item"
          v-for="(item, index) in mvsData"
          :key="index"
        >
          <div
            class="mv_img"
            @click="goMvDetail(item.id)"
          >
            <img :src="item.cover">
            <div class="mv_num">
              <span class="iconfont">&#xe6df;</span>
              <span>{{item.playCount}}</span>
            </div>
          </div>
          <div class="mv_info">
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </div>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[8,12,16]"
        :page-size="pagesize"
        layout="sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getMV } from '@/basejs/ajaxapi'
export default {
  name: 'Newmvchild',
  data () {
    return {
      // mvs 数据
      mvsData: [],
      secitionData: ['全部', '内地', '港台', '欧美', '日本', '韩国'],
      typeData: ['全部', '官方版', '原声', '现场版', '网易出品'],
      orderData: ['上升最快', '最热', '最新'],
      // 默认
      defaultSecition: '全部',
      defaultType: '全部',
      defaultOrder: '上升最快',
      // 默认显示数量
      pagesize: 12,
      // 当前页数
      pagenum: 1,
      // 总页数
      total: 0
    }
  },
  computed: {
    offset () {
      return (this.pagenum - 1) * this.pagesize
    }
  },
  created () {
    this._getMV(this.defaultSecition, this.defaultType, this.defaultOrder, this.pagesize, this.offset)
  },
  methods: {
    _getMV (area, type, order, limit, offset) {
      const url = '/mv/all'
      getMV(url, area, type, order, limit, offset).then((res) => {
        if (res.statusText === 'OK') {
          if (!res.data.count) {
            this.mvsData = res.data.data
          } else {
            this.total = res.data.count
            this.mvsData = res.data.data
          }
        }
      })
    },
    isActivedSecition (index) {
      this.defaultSecition = this.secitionData[index]
    },
    isActivedType (index) {
      this.defaultType = this.typeData[index]
    },
    isActivedOrder (index) {
      this.defaultOrder = this.orderData[index]
    },
    // 每页条数发生变化时
    handleSizeChange (newPage) {
      this.pagesize = newPage
      this._getMV(this.defaultSecition, this.defaultType, this.defaultOrder, this.pagesize, this.offset)
      this.$message({
        message: '已切换当前显示条数',
        type: 'success',
        showClose: true
      })
    },
    // 当前页发生变化时
    handleCurrentChange (newPage) {
      this.pagenum = newPage
      this._getMV(this.defaultSecition, this.defaultType, this.defaultOrder, this.pagesize, this.offset)
    },
    // 跳转到 MV详情 播放 路由页面
    goMvDetail (id) {
      // 进行跳转
      this.$router.push({
        path: `/newmv/${id}`
      })
    }
  },
  watch: {
    defaultSecition (newdefaultSecition) {
      this._getMV(newdefaultSecition, this.defaultType, this.defaultOrder, this.pagesize, this.offset)
    },
    defaultType (newdefaultType) {
      this._getMV(this.defaultSecition, newdefaultType, this.defaultOrder, this.pagesize, this.offset)
    },
    defaultOrder (newdefaultOrder) {
      this._getMV(this.defaultSecition, this.defaultType, newdefaultOrder, this.pagesize, this.offset)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .secition_bar, .type_bar, .order_bar {
    padding: 13px 0;
    display: flex;

    .secition, .type, .order {
      color: #00b894;
      text-shadow: 2px 1px 5px rgba(255, 118, 117, 0.5);
    }

    .secition_tabs, .type_tabs, .order_tabs {
      padding: 0 20px;
      display: flex;

      .item {
        color: #808080;
        padding: 0 20px;
        margin: 0 4px;
        cursor: pointer;
        font-size: 14px;
      }

      .actived {
        color: #ff7675;
        width: 60px;
        background: #fcf6f5;
        border-radius: 10px;
        text-align: center;
      }
    }
  }

  .newmvs {
    padding-top: 20px;
    padding-bottom: 50px;

    .newmv_items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .mv_item {
        width: 250px;
        padding-bottom: 30px;

        .mv_img {
          width: 100%;
          cursor: pointer;
          box-sizing: border-box;
          position: relative;

          img {
            width: 250px;
            border-radius: 10px;
          }

          .mv_num {
            position: absolute;
            top: 0;
            right: 5%;
            color: #fff;
            font-size: 14px;

            .iconfont {
              font-size: 14px;
              padding-right: 2px;
              opacity: 0.8;
            }
          }
        }

        .mv_info {
          .name {
            font-size: 14px;
            color: #2d3436;
            letter-spacing: 0.5px;
          }
        }
      }
    }

    .el-pagination {
      padding-top: 50px;
      text-align: center;
    }
  }
}
</style>