<template>
  <section class="page">
    <div class="pageItem">
      <h1 class="title">{{item.title}}</h1>
      <p class="date">{{item.date}}</p>
      <div class="content">
        <p class="pBox" v-html='item.contents'></p>
      </div>
      <div class="footer">
        <p>------------------------ <span>完结</span> ------------------------</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      item:JSON.parse(localStorage.getItem("item"))
    }
  },
  mounted(){
    this.item = JSON.parse(localStorage.getItem("item"));
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.pageItem{
  width: 100%;
  padding: 28px 18px 10px;
  & h1.title{
    text-align: center;
    font-size: 24px;
  }
  & p.date{
    margin: 12px auto 28px;
    font-size: 14px;
    text-align: center;
  }
  & .content{
    & p.pBox{
      font-size: 14px;
      text-indent: 28px;
      line-height: 28px;
    }
  }
  & .footer{
    margin-top: 66px;
    font-size: 16px;
    text-align: center;
    color: rgb(93, 89, 94);
    & span{
      font-size:24px;
      margin: 0px 12px;
    }
  }
}
</style>
