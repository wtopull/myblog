<template>
  <div class="navs">
    <ul>
      <li :class="index == active && is?'active':''" v-for="(nav,index) in navs" :key="index" @mouseover="stylesing()" @mouseout='stylesout()' @click="navBall(nav,index)">[&nbsp;&nbsp;&nbsp;{{nav.name}}&nbsp;&nbsp;&nbsp;]</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:0,
      is:true,
      navs: [
        { name: "HOME", path: "/" },
        { name: "CSS", path: "/css" },
        { name: "J S", path: "/js" },
        { name: "VUE", path: "/vue" }
      ]
    };
  },
  methods: {
    navBall(nav, index) {
      this.$router.push(nav.path);
      this.active = index;
    },
    stylesing(){
      this.is = false;
    },
    stylesout(){
      this.is = true;
    }
  }
};
</script>
<style scoped lang="scss">
.navs {
  & ul {
    width: 70%;
    margin: 0 auto;
    & li {
      line-height: 32px;
      border-bottom: 1px solid #ddd;
      text-align: left;
      cursor: pointer;
    }
    & li.active,li:hover {
      text-align: center;
      cursor: pointer;
      background: rgba(160,197,232,0.5);
    }
  }
}
</style>
