<template>
  <div class="navs">
    <ul class="parent">
      <li class="parentLi" :class="nav.id == $route.query.id ? 'show':''" v-for="(nav,index) in navs" :key="index" @click='showChilder(nav,index)'>
        <span class="parentSpan" :class="nav.id == $route.query.id && is?'active':''" @click="toroute(nav,index)" @mouseover="stylesing()" @mouseout='stylesout()'>{{nav.title}}</span>
        <ul class="childer">
          <li class="childerLi" v-for="(item,k) in nav.childers" :key="k">
            <span class="childerSpan" :class="item.path == $route.fullPath?'active':''" @click="navBall(item,k)">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { navs } from "~/plugins/navs.js";
export default {
  data() {
    return {
      ck: -1,
      num: 0,
      is: true,
      navs: navs,
      active: 0
    };
  },
  methods: {
    showChilder(nav, index) {
      this.num = index;
    },
    //类别选择
    toroute(nav, index) {
      this.active = index;
      this.$router.push(nav.path);
      this.ck = -1;
    },
    //类别项选择
    navBall(item, k) {
      console.log(item);
      
      this.ck = k;
      localStorage.setItem("listItem", JSON.stringify(item.list));
      this.$router.push(item.path);
    },
    stylesing() {
      this.is = false;
    },
    stylesout() {
      this.is = true;
    }
  }
};
</script>
<style scoped lang="scss">
.navs {
  & ul.parent {
    width: 100%;
    margin: 0 auto;
    font-size: 14px;
    > li.parentLi {
      line-height: 32px;
      text-align: left;
      cursor: pointer;
      & span {
        display: inline-block;
        width: 100%;
        height: 100%;
        padding-left: 12px;
      }
    }
    .parentSpan.active,
    .parentSpan:hover {
      cursor: pointer;
      background: rgb(16, 132, 240);
      border-left: 4px solid rgb(16, 132, 240);
      color: #fff;
      font-size: 16px;
    }
  }
  & ul.childer {
    display: none;
    width: 100%;
    margin: 0 auto;
    font-size: 12px;
    & .childerLi {
      height: 32px;
      line-height: 32px;
      & .childerSpan {
        margin-left: 12px;
      }
      & .childerSpan.active {
        cursor: pointer;
        background: rgba(160, 197, 232, 0.5);
        border-left: 4px solid rgb(16, 132, 240);
        padding: 0;
        text-align: center;
        margin: 0;
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
.parentLi.show {
  background: rgba(160, 197, 232, 0.5);
  ul.childer {
    display: block;
    position: relative;
  }
}
</style>
