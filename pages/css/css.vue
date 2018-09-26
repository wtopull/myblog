<template>
  <section class="css">
    <div class="content">
      <div class="style" :class="'style'+(index+1)" v-for="(arr,index) in arrs" :key="index">
        <ul>
          <li>
            <img class="img" src="~/assets/img/1.jpg">
            <span>{{arr}}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      arrs: [
        "鼠标悬停图片变大文字消失",
        "鼠标悬停文字消失",
        "鼠标悬停整体旋转",
        "鼠标悬停整体旋转放大",
        "鼠标悬停心脏咔咔跳"
      ]
    };
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.css {
  height: 100%;
}
.content {
  & .img {
    width: 100%;
    height: 130px;
  }
}
.style ul {
  width: 100%;
  position: relative;
  & li {
    float: left;
    position: relative;
    margin: 0 2px;
    width: 19.5%;
    & span {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 2px;
      color: #fff;
      text-align: center;
      background: rgba($color: #000000, $alpha: 0.4);
      transition: all 0.5s;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      -ms-transition: all 0.5s;
    }
  }
}
// 本hover用的是：transform属性；scale是属性下放大；
.style1 ul li:hover {
  // 1.1放大值
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
}
.style1 ul li:hover span {
  opacity: 0;
}
// opacit：0；代表完全消失；0.5半透明
.style2 ul li:hover span {
  opacity: 0;
}
// css3旋转属性； 360deg（顺时针旋转360度）
.style3 ul {
  & li {
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
  }
  & li:hover {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }
}
// 鼠标悬停整体,旋转、放大
.style4 ul {
  & li {
    transition: All 0.4s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
    -moz-transition: All 0.4s ease-in-out;
    -o-transition: All 0.4s ease-in-out;
  }
  // transform 属性下 rotate（旋转）和scale（放大）属性；可以同时用
  & li:hover {
    transform: rotate(360deg) scale(1.2);
    -webkit-transform: rotate(360deg) scale(1.2);
    -moz-transform: rotate(360deg) scale(1.2);
    -o-transform: rotate(360deg) scale(1.2);
    -ms-transform: rotate(360deg) scale(1.2);
  }
}
// 鼠标悬停心脏咔咔跳
.style5 ul {
  &li {
    transition: All 0.4s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
    -moz-transition: All 0.4s ease-in-out;
    -o-transition: All 0.4s ease-in-out;
  }
  & li:first-child:hover {
    animation: play 0.3s 50 linear;
  }
  & li:last-child:hover {
    animation: play 0.3s 50 linear;
    position: relative;
  }
}

@keyframes play {
  50% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
  }
}
@-webkit-keyframes play {
  50% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
  }
}
@-moz-keyframes play {
  50% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
  }
}
@-o-keyframes play {
  50% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
  }
}
</style>
