<template>
  <div class="blogBox">
    <div class="left" :class="hidePop ? 'hide':''">
      <div class="leftPop" @click="isShowPop">{{hidePop?'展开':'收起'}}</div>
      <div class="leftTop">
        <img src="~/assets/img/1.jpg" alt="">
      </div>
      <div class="titleP">Nathan's blog</div>
    </div>
    <div class="right" :class="hidePop ? 'center':''">
      <nuxt/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hidePop: false
    };
  },
  methods: {
    isShowPop() {
      this.hidePop = !this.hidePop;
    }
  }
};
</script>

<style lang='scss' scoped>
.blogBox {
  width: 100%;
  height: 100%;
  & .left {
    width: 16%;
    height: 100%;
    float: left;
    position: relative;
    -moz-box-shadow: 1px 1px 40px #787878;
    -webkit-box-shadow: 1px 1px 40px #787878;
    box-shadow: 1px 1px 40px #787878;
    & .leftPop {
      position: absolute;
      bottom: 0%;
      left: calc(100% - 24px);
      width: 24px;
      height: 80px;
      line-height: 40px;
      margin-top: -40px;
      border: 1px solid #ddd;
      text-align: center;
      border-radius: 6px 0 0 0;
      color: #fff;
      background: #787878;
      cursor: pointer;
    }
  }
  & .left.hide {
    width: 0;
    flex: none;
    border: none;
    & .leftPop {
      left: 100%;
      border-radius: 0 6px 0 0;
    }
  }
  & .right {
    width: 84%;
    height: 100%;
    float: left;
  }
  & .right.center {
    width: 1200px;
    margin: 0 auto;
    float: none;
    -moz-box-shadow: 1px 1px 40px #787878;
    -webkit-box-shadow: 1px 1px 40px #787878;
    box-shadow: 1px 1px 40px #787878;
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
  height: 24px;
}
</style>
