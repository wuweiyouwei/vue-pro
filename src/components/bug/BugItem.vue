<template>
  <tr>
    <td><input type="checkbox" :checked="bug.resolved" @change="modifyResolved(bug.id)"></td>
    <!--    <td><input type="checkbox" :checked="bug.resolved" @click="modifyResolved(bug.id)"></td>-->
    <td>
      <span v-show="!bug.editState" class="desc" @click="enterEdit(bug)">{{ bug.desc }}</span>
      <input ref="inputDesc" v-show="bug.editState" type="text" :value="bug.desc" @blur="updateDesc(bug, $event)">
    </td>
    <td>
      <button class="small red button" @click="deleteById(bug.id)">删除</button>
    </td>
  </tr>
</template>

<script>

export default {
  name: 'BugItem',
  props: ['bug', 'modifyResolvedCallback', 'deleteByIdCallback', 'updateDescCallback'],
  methods: {
    modifyResolved(bugId) {
      // 修改bug状态
      this.modifyResolvedCallback(bugId)
    },
    deleteById(bugId) {
      // 删除bug
      this.deleteByIdCallback(bugId)
    },
    // 进入编辑状态
    enterEdit(bug) {
      // 显示 input 框，隐藏 span
      // bug.editState = true
      if (bug.hasOwnProperty('editState')) {
        bug.editState = true
      } else {
        this.$set(bug, 'editState', true)
      }
      this.$nextTick(function () {
        this.$refs.inputDesc.focus()
      })
    },
    // 更新 bug信息
    updateDesc(bug, e) {
      let newDesc = e.target.value.trim()
      if (!newDesc) return
      // console.log(e.target.value)
      this.updateDescCallback(bug.id, newDesc)
      // 隐藏文本框
      bug.editState = false
    }
  }
}

</script>

<style scoped>
/* item */
table tbody tr:nth-child(odd) {
  background-color: #eee;
}

table tbody tr:hover {
  background-color: #ccc;
}

table tbody tr td:first-child {
  color: #f40;
}

td {
  border: 1px solid #999;
  text-align: center;
  padding: 5px 0;
}

.desc {
  cursor: pointer;
}
</style>