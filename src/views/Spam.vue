<template>
  <div>
    <h1>Spam</h1>
            <video class="camera"></video>

    <video src=""></video>
  </div>
</template>

<script>
// import Camera from '@/components/Camera.vue'
// import Filter from '@/components/Filter.vue'
// import Pictures from '@/components/Pictures.vue'
// import SavedFiles from '@/components/HelloWorld.vue'

export default {
  name: 'Spam',
  components: {
    // Camera,
    // Filter,
    // Pictures,
    // SavedFiles
  },
   video() {
    this.$store.dispatch("getMedia");
  },
  
}
</script>
