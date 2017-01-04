<template>
  <div class="container">
    <rd-text :textfield="test"></rd-text>
  </div>
</template>

<script>
  import { rdText } from 'radon-ui'

  export default {
    data () {
      return {
        test: {
          value: '',
          placeHolder: '请输入',
          state: 'success',
          tip: '',
          inline: true
        }
      }
    },
    components: {
      rdText
    }
  }
</script>
