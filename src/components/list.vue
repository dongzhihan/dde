<template>
  <div class="header">
    <h1> {{ title }} </h1>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        title: 'list'
      }
    }
    ,
    methods: {
        
    }
    ,
    beforeCreate () {
      this.$http.get("http://api.jirengu.com/weather.php?callback=getWeather") .then(function (response) {
    console.log(response);
   eval(response.data)
      function  getWeather(data)
      {
          console.log(data)
      }
  })
    }
    
  }
</script>

<style scoped>
 
</style>










