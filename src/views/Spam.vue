<template>
  <div class="camera">
    <h1>SpamA=>PIC</h1>
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





</style>
