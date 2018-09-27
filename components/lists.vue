<template>
  <div class="list">
    <div class="listBox" v-for="(item,index) in lists" :key="index">
      <div class="title">
        <h1>{{item.title}}</h1><small>{{item.date}}</small>
      </div>
      <div class="img" :style="{backgroundImage:'url('+item.img+')'}"></div>
      <div class="content">
        <p>{{item.content}}</p>
      </div>
      <div class="toball">
        <button @click="toDetail(item,index)">阅读全文</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    lists: Array
  },
  methods: {
    toDetail(item, index) {
      this.$router.push(item.toball);
      this.$store.state.listItem = item;
      this.$store.state.listIndex = index;
    }
  }
};
</script>
<style scoped lang="scss">
.listBox {
  margin: 2px 10px 20px;
  position: relative;
}
.title {
  padding-left: 12px;
  & h1 {
    font-size: 24px;
  }
  & small {
    margin-left: 28px;
    line-height: 28px;
  }
}
.img {
  text-align: center;
  vertical-align: middle;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  border-radius: 6px;
  height: 208px;
  width: 100%;
  background-position: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
  -o-background-size: 100% 100%;
}
.content {
  margin: 8px 0px;
  font-size: 14px;
  text-indent: 28px;
}
.toball {
  position: relative;
  height: 50px;
  width: 100%;
  & button {
    position: absolute;
    right: 12px;
    bottom: 3px;
    display: inline-block;
    color: black;
    line-height: 40px;
    background: #ddd;
    padding: 0 20px;
    border-radius: 4px;
    outline: none;
    border: none;
    cursor: pointer;
  }
  & button:hover {
    background: #5691d7;
    color: #fff;
  }
}
</style>
