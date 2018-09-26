<template>
  <div class="blogBox">
    <div class="left" :class="hidePop ? 'hide':''">
      <div class="leftPop" @click="isShowPop">{{hidePop?'展开':'收起'}}</div>
      <div class="detail">
        <div class="leftTop">
          <img src="~/assets/img/1.jpg" alt="">
        </div>
          <div class="titleP">Nathan's blog</div>
          <navs></navs>
        </div>
      </div>
      <div class="right" :class="hidePop ? 'center':''">
        <nuxt />
      </div>
    </div>
</template>
<script>
import navs from '../components/navs.vue'
export default {
  data() {
    return {
      hidePop: false,
    };
  },
  methods: {
    isShowPop() {
      this.hidePop = !this.hidePop;
    }
  },
  components:{
    navs
  }
};
</script>

<style lang='scss' scoped>
.blogBox {
  width: 100%;
  height: 100%;
}
.left {
  width: 16%;
  height: 100%;
  float: left;
  position: relative;
  -o-box-shadow: 1px 1px 40px #787878;
  -moz-box-shadow: 1px 1px 40px #787878;
  -webkit-box-shadow: 1px 1px 40px #787878;
  box-shadow: 1px 1px 40px #787878;
  & .leftPop {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 24px;
    height: 80px;
    line-height: 40px;
    margin-top: -40px;
    border: 1px solid #ddd;
    text-align: center;
    border-radius: 0px 6px 0 0;
    color: #fff;
    background: #787878;
    cursor: pointer;
  }
}
.left.hide {
  width: 0;
  height: 0;
  flex: none;
  border: none;
  & .leftPop {
    left: 0;
  }
  & .detail {
    display: none;
  }
}
.right {
  width: 84%;
  height: 100%;
  float: left;
  overflow: hidden;
  overflow-y: scroll;
  padding: 10px 16px;
}
.right.center {
  width: 1200px;
  height: auto;
  margin: 2% auto 2%;
  float: none;
  overflow: visible;
  -o-box-shadow: 1px 1px 40px #787878;
  -moz-box-shadow: 1px 1px 40px #787878;
  -webkit-box-shadow: 1px 1px 40px #787878;
  box-shadow: 1px 1px 40px #787878;
  > section{
    min-height: 799px;
  }
}
.leftTop {
  width: 168px;
  height: 168px;
  border-radius: 50%;
  overflow: hidden;
  margin: 66px auto 20px;
}
.titleP {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #802125;
  height: 48px;
  line-height: 48px;
}
</style>
