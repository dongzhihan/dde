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
        <el-button  type="primary" @click="shuffle" size="large">生成随机</el-button>
    
    </el-row>
          
      <p>{{radomRest}}</p>
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
        radom: 0, // 
        radomRest:"",
        length:5,
        arr:[]
      }
    },
    methods: {
      rodamChange: function (value) {
    
        this.num2 = value
        this.radom = value
         
      },
      radomReturn() {
        this.radomRest=Math.floor(Math.random() * (this.num2 - this.num1))+this.num1
        
      }
        ,
        shuffle() {
          console.log(this.arr)
          this.createArray();
          for (let i =0; i <= (this.num2-this.num1); i++) {
            let j = Math.floor(Math.random() * (this.num2 - this.num1)) 

            this.swap(this.arr, i, j)
          }
          console.log(...this.arr)
        
        },
        swap(array, i, j) {
          let k = array[i]
          array[i] = array[j]
          array[j] = k
           
        }
       ,
        createArray() {
           this.arr=[]
          for (var i = 0; i <= (this.num2-this.num1); i++) {
            this.arr.push(i+this.num1)
          }
        }
    },
    components: {

    }
  }

</script>
