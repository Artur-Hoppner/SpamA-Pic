<template>
  <div>
    <section class="top-container">
      <img src="../assets/unicorn-hearts.png" alt="unicorn-hearts" class="img-unicorn">
      <div class="title-container">
      <h1>Spam </h1>
      <h1>A</h1>
      <h1>Pic</h1>
      <button v-on:click="subscribeing">subscribe</button>
    </div>
    </section>
<Camera />
<Pictures />


  </div>
</template>

<script>
import Camera from '../components/Camera'
import Pictures from '@/components/Pictures.vue'

export default {
  data: () => ({
    
    }),
  name: 'Spam',
  components: {
    Camera,
    Pictures,

  },
  methods: {
      subscribeing() {
        this.$store.dispatch("requestNotificationPermission")
      }


  }
}
</script>

<style lang="scss">

body {
  background-color: rgb(255, 185, 185);
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  }

.top-container {
  display: flex;
  justify-content: center;
}


  h1{
    margin: 0 0 0 0;
  }

.img-unicorn {
  width: 7%;
  height: 7%;
}



</style>
