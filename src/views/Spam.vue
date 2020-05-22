<template>
  <div class="camera">
    <div class="head-container" >
      <img src="../assets/unicorn-hearts.png" alt="unicorn-hearts" class="img-unicorn">
      <h1>Spam A Pic</h1>
    </div>
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
  
}
</script>

<style lang="scss">

body {
  background-color: rgb(255, 185, 185);
  }

  .head-container {
    display: flex;
  }

.img-unicorn {
  width: 10vw;
  height: 10vw;
}



</style>
