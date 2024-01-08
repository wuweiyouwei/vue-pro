<template>
  <div>
    <table v-show="bugList.length">
      <thead>
      <tr>
<!--        <th class="c1">全选 <input type="checkbox" :checked="isAll" @click="selectAll"></th>-->
        <th class="c1">全选 <input type="checkbox" v-model="isAll"></th>
        <th>bug描述</th>
        <th class="c2">操作</th>
      </tr>
      </thead>
      <tbody>
        <BugItem v-for="bug of bugList" :key="bug.id" :bug="bug"></BugItem>
      </tbody>
    </table>
  </div>
</template>

<script>
import BugItem from "@/components/bug/BugItem";
export default {
  name: 'BugList',
  props : ['bugList'],
  computed : {
    resolvedCount() {
      return this.bugList.reduce((a, b) => a + (b.resolved ? 1 : 0), 0)
    },
    // isAll() {
    //   return this.resolvedCount === this.bugList.length && this.bugList.length > 0
    // }
    isAll : {
      // getter
      get() {
        return this.resolvedCount === this.bugList.length && this.bugList.length > 0
      },
      // setter
      set(value) {
        // this.selectAllCallback(value)
        this.$emit('selectAllCallback', value)
      }
    }
  },
  methods : {
    selectAll(e) {
        this.selectAllCallback(e.target.checked)
    }

  },
  components : {BugItem}
}

</script>

<style scoped>
/* list */
table{
  width: 760px;
  border-collapse: collapse;
}
table caption{
  font-size: 1em;
  font-weight: bold;
  margin: 1em 0;
}
.c1,.c2{
  width: 100px;
}
th {
  border: 1px solid #999;
  text-align: center;
  padding: 5px 0;
}
table thead tr{
  background-color: #008c8c;
  color: #fff;
}
</style>