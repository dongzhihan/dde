<template>

  <ul id="example-1">
    <li v-for="item of items">
      {{ item.message }}
    </li>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  <el-input v-model="input2" placeholder="请输入内容"></el-input>
      <span>jieguo{{to}}</span> 
      <span>123{{to1}}</span>
  </ul>

</template>

<style>

</style>
<script>
  export default {
    data: function () {
      return {
        items: [
          {message: 'Foo'},
          {message: 'Bar'}

        ],
        input:0,
     input2:0 ,
     to1(){return this.input}
      }

    },
    computed: {
         to(){return this.input+this.input2}
    }

  }

</script>
<style>
   
 </style>