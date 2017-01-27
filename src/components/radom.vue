<template>
  <div>
    <el-row>
      <el-col :span="3">
        <el-input-number v-model="num1" @change="rodamChange" :min="0" :max="10"></el-input-number>
      </el-col>
      <el-col :span="1">
        <p>到</p>
      </el-col>
      <el-col :span="3">
        <el-input-number v-model="num2" :min="radom" :max="10"></el-input-number>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" @click="radomReturn" size="large">生成随机</el-button>
    </el-row>
  </div>
</template>
<style>


</style>
<script>
  export default {

    data() {
      return {
        num1: 0,
        num2: 0,
        radom: 0 // 
      }
    },

    methods: {
      rodamChange: function (value) {

        this.num2 = value
        this.radom = value

      },
      radomReturn() {
        console.log(Math.floor(Math.random() * (this.num2 - this.num1))+this.num1)
      }

    },
    components: {

    }
  }

</script>
