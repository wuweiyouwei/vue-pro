<template>
  <div>
    <h3>品牌：{{brand}}</h3>
    <h3>价格：{{price}}</h3>
    <h3>颜色：{{color}}</h3>
  </div>
</template>
<script>
  export default {
    /*data() {
      return {
        brand : '宝马',
        price : 99,
        color : '黑色'
      }
    }*/
    // props : ['brand', 'price', 'color']
    props : {
      brand : {
        required : true,
        type : String,
      },
      price : {
        type : Number,
        default : 66
      },
      color : {
        require : true,
        type : String,
      }
    }
  }
</script>