<template>
  <div>&lt;!-- Multi-Roots --&gt;</div>
  <div>Composition</div>
  <div>API</div>

  <hr>

  <div>Capacity: {{ capacity }}</div>
</template>

<script>
// https://github.com/vuejs/composition-api
// import { watch, ref } from '@vue/composition-api';
import { watch, ref } from 'vue';
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    // Like `this` in vue 2
    console.log(context.attrs);
    console.log(context.slots);
    console.log(context.emit);

    watch(() => {
      console.log(props.name);
    })
    
    const capacity = ref(3)

    setTimeout(() => {
      capacity.value = 5
    }, 1000);

    return {
      capacity
    }

  }
}
</script>

<style>

</style>