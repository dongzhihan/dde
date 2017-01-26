<template>
  <transition name="component-fade" mode="out-in">
    <component v-bind:is="view"></component>
  </transition>
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
