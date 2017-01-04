<template>

  <ul id="example-1">
    <li v-for="item of items">
      {{ item.message }}
    </li>
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

        ]
      }

    }
  }

</script>
