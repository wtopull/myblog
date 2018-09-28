<template>
  <div class="blogBox">
    <div class="left" :class="hidePop ? 'hide':''">
      <div class="leftPop" @click="isShowPop">{{hidePop?'展开':'收起'}}</div>
      <div class="detail">
        <div class="leftTop">
          <img src="~/assets/img/1.jpg" alt="">
        </div>
          <div class="titleP">Nathan</div>
          <!-- <navs v-if="!hidePop"></navs> -->
          <div class="title">
            <h4>那句话：</h4>
            <small>还不行？去多模仿啊？！</small>
          </div>
        </div>
      </div>

      <div class="right clearfix" :class="hidePop ? 'center':''">
        <keep-alive>
          <nuxt style='width:80%;float:left;' />
        </keep-alive>
        
        <navs class="popNavs"></navs>
      </div>
      <div class="toTop" v-if="sTop" @click="toTopBall">top</div>
    </div>
</template>
<script>
import navs from "~/components/navs.vue";
export default {
  data() {
    return {
      hidePop: true,
      sTop: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.handleScroll);
    });
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 45) {
        this.sTop = true;
      } else if (scrollTop < 20) {
        this.sTop = false;
      }
    },
    //回到顶部
    toTopBall() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 45) {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.pageYOffset = 0;
      }
    },
    isShowPop() {
      this.hidePop = !this.hidePop;
    }
  },
  components: {
    navs
  }
};
</script>

<style lang='scss' scoped>
.blogBox {
  width: 100%;
  min-width: 1200px;
  height: 100%;
}
.left {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
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
  & .leftPop:hover {
    background: #5691d7;
  }
  & .title {
    margin: 200px 0 100px;
    padding: 20px;
    font-style: italic;
    & h4 {
      line-height: 48px;
      font-size: 20px;
    }
    & small {
      font-size: 16px;
      color: steelblue;
    }
  }
}
.detail,
.left {
  min-height: 799px;
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
  position: relative;
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
  > section {
    min-height: 799px;
  }
}
.popNavs {
  width:20%;
  float:right;
  margin-top:62px;
  padding: 6px;
  background: rgba(160, 197, 232, 0.2);
  border-radius: 4px;
}
.toTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #787878;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  line-height: 66px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}
</style>
