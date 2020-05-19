<template>
  <div class="camera">
    <h1>SpamA=>PIC</h1>
<Camera />
    <!-- <video id="video" ref="video"></video> -->

  </div>
</template>

<script>
import Camera from '../components/Camera'
// import Filter from '@/components/Filter.vue'
// import Pictures from '@/components/Pictures.vue'
// import SavedFiles from '@/components/HelloWorld.vue'

export default {
  data: () => ({
    
    }),
  name: 'Spam',
  components: {
    Camera

  },
  //  video() {
  //   this.$store.dispatch("getMedia");
  // },

// methods: {
//     videoPremission(){ this.$refs.video
//     }
  
}
</script>

<style lang="scss">





</style>
