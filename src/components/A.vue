<template>
  <div>
    <h1>A组件</h1>
    <button @click="doA1">doA1</button>
    <button @click="DOA1">DOA1</button>
    <h3>state:{{ a }}</h3>
    <h3>getters:{{ computedA1 }}</h3>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
  name: 'A-Vue',
  computed: {
    ...mapState('aModule', ['a']),
    ...mapGetters('aModule', ['computedA1'])
  },
  methods: {
    ...mapActions('aModule', ['doA1']),
    ...mapMutations('aModule', ['DOA1'])
  }
}

</script>