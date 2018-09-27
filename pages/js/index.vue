<template>
  <section>
    <list :lists='lists'></list>
  </section>
</template>
<script>
import list from "~/components/lists.vue";
import { listsmap } from "~/plugins/listsmap.js";
export default {
  data() {
    return {
      lists: listsmap
    };
  },
  mounted() {},
  methods: {},
  components: {
    list
  }
};
</script>
<style scoped lang="scss">
</style>
