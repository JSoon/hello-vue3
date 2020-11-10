<template>
  <div>&lt;!-- Multi-Roots --&gt;</div>
  <div>Composition</div>
  <div>API</div>

  <hr>

  <div>Capacity: {{ capacity }}</div>

  <div>
    Restaurant: {{ restaurant.title }}
  </div>

  <teleport to="#startofbody">
    放在body开头
  </teleport>

  <teleport to="#endofbody">
    放在body末尾(Composition API)
  </teleport>

  <teleport to="#endofbody" v-if="teleVisible">
    放在body末尾(Composition API 2)
  </teleport>

  <button @click="this.teleVisible = !this.teleVisible">Teleport</button>
</template>

<script>
// https://github.com/vuejs/composition-api
// import { watch, ref } from '@vue/composition-api';
import { watch, ref, reactive } from 'vue';
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

    const teleVisible = ref(false)
    
    const capacity = ref(3)

    const restaurant = reactive({
      title: "Hello, Vue 3"
    });

    setTimeout(() => {
      capacity.value = 5
      restaurant.title = 'KFC'
    }, 2000);

    return {
      teleVisible,
      capacity,
      restaurant
    }

  }
}
</script>

<style>

</style>