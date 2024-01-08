<template>
  <div>
    <h1>App 组件</h1>
    <X></X>
    <Y></Y>
  </div>
</template>
<script>
  import X from './components/X.vue'
  import Y from './components/Y.vue'
  export default {
    components : {
      X : X,
      Y : Y
    }
  }
</script>