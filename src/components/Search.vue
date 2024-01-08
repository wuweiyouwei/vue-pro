<template>
  <div class="search">
    <input type="text" placeholder="请输入城市名字" spellcheck="false" v-model="cityName">
    <button @click="search"><img src="../assets/images/search.png"></button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search-Vue',
  data() {
    return {
      cityName: ''
    }
  },
  methods: {
    search() {
      // 如果城市名为空，直接返回不做操作
      if (!this.cityName.trim()) return
      const apiKey = 'c8a8fe122e1c6b9122d4e0d482befbd7'
      // 使用 ES6的模版语法进行字符串拼接
      const apiUrlGetLatAndLon = `http://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&appid=${apiKey}`
      // 1.执行 AJAX 请求获取城市经纬度
      axios.get(apiUrlGetLatAndLon).then(
          response => {
            if (!response.data.length) {
                // 城市不存在，触发 isNotFound 事件
              this.$bus.$emit('displayNotFound', true)
            } else {
              console.log('相应数据', response.data)
              // 获取经纬度
              const lat = response.data[0].lat
              console.log('维度', lat)
              const lon = response.data[0].lon
              console.log('经度', lon)

              // 2.根据经纬度获取天气信息，再次发送 AJAX 请求
              const apiUrlGetWeather =
                  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
              axios.get(apiUrlGetWeather).then(
                  response => {
                    console.log('相应数据', response.data)
                    // 从响应的数据中取所需要的信息：温度、湿度、风速、天气图标
                    const weatherObj = {
                      // 天气图标路径
                      imgPath: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                      // 温度
                      temp: response.data.main.temp,
                      // 湿度
                      humidity: response.data.main.humidity,
                      // 风速
                      speed: response.data.wind.speed,
                      // 城市名
                      cityName: this.cityName,
                      // 是否显示天气组件
                      isShow: true
                    }
                    // console.log(weatherObj)
                    // 触发事件（全局数据总线），将数据传递给 Weather 组件
                    this.$bus.$emit('displayWeather', weatherObj, false)
                  },
                  error => {
                    console.log('错误信息为：', error.message)
                  }
              )
            }
          },
          error => {
            console.log('错误信息为：', error.message)
          }
      )
    }
  }
}
</script>

<style scoped>
/*搜索框样式*/
.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search input {
  border: 0;
  outline: 0;
  background: #ebfffc;
  color: #555;
  padding: 10px 25px;
  height: 60px;
  border-radius: 30px;
  flex: 1;
  margin-right: 16px;
  font-size: 18px;
}

.search button {
  border: 0;
  outline: 0;
  background: #ebfffc;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.search button img {
  width: 16px;
}
</style>