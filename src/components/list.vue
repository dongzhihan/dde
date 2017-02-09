<template>
  <div class="header">
    <h1>{{cityName}}  {{dataTime}} </h1>

  <el-row>
  <el-col       v-for="item in weatherFature" :span="6">
            <h1>{{item.date}}</h1>
       <img v-bind:src="item.dayPictureUrl" >
    <img v-bind:src="item.nightPictureUrl" >
       <h1>{{item.temperature}}</h1>
       <h1>{{item.weather}}</h1>
       <h1>{{item.wind}}</h1>
  </el-col>
</el-row>



</template>
<script>
  export default {
    data: function () {
      return {
        title: 'list',
        cityName: '',
        dataTime:'',
        weatherFature:[],
      }
    },
    methods: {

    },
    beforeCreate() {
      this.$http.get("http://api.jirengu.com/weather.php?callback=getWeather").then(function (response) {
        console.log(response.data);
        var  getWeather= function (data) {
          console.log(data)
        this.cityName=data.results["0"].currentCity
          this.dataTime=data.date
          console.log(data.results["0"].weather_data)
           this.weatherFature=data.results["0"].weather_data

        }.bind(this)
        eval(response.data)
      
      
 
      }.bind(this))
    }

  }

</script>
<style scoped>


</style>
