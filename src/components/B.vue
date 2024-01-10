<template>
  <div>
    <h1>B组件</h1>
    <button @click="doB1">doB1</button>
    <button @click="DOB1">DOB1</button>
    <h3>state:{{ b }}</h3>
    <h3>getters:{{ computedB1 }}</h3>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
  name: 'B-Vue',
  computed: {
    ...mapState('bModule', ['b']),
    ...mapGetters('bModule', ['computedB1'])
  },
  methods: {
    ...mapActions('bModule', ['doB1']),
    ...mapMutations('bModule', ['DOB1'])
  }
}

</script>