
<template>
  <div >
    <h2>Picture Commponent</h2>
        <button v-on:click="captureImage()" >pic</button>
       
       <img src="" ref="photo"  style="width: 100%;" />
<PictureFilters />
<DownloadImg />


  </div>
</template>

<script>

import PictureFilters from '@/components/PictureFilters.vue'
import DownloadImg from '@/components/DownloadImg.vue'

export default {


  components: {

    PictureFilters,
    DownloadImg

  },
  methods: {
      async captureImage() {
  const mediaTrack = this.$store.state.videoStreem.getVideoTracks()[0];
  console.log(mediaTrack);
  const captureImg = new ImageCapture(mediaTrack);
  const photo = await captureImg.takePhoto()
  console.log(photo)
  this.$refs.photo.src = URL.createObjectURL(photo);
//   console.log(imgUrl);
//   this.$refs.photo.src = imgUrl;
}
  },
  
}
</script>

<style lang="scss">





</style>
