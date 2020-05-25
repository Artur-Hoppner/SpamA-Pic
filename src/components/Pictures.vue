
<template>
  <div >
        <button v-on:click="captureImage()" >pic</button>
       <img :src="this.pictures" id="photo"  class="taken-picture" />
      <!-- <canvas :src="this.pictures" id="photo"  class="taken-picture"></canvas> -->
<PictureFilters />
<DownloadImg />


  </div>
</template>

<script>

import PictureFilters from '@/components/PictureFilters.vue'
import DownloadImg from '@/components/DownloadImg.vue'

export default {



    data() {
    return {
          vueCanvas: null,

        pictures: ''
    }
},

  components: {
    PictureFilters,
    DownloadImg
  },

  methods: {
      async captureImage() {
        const mediaTrack = this.$store.state.videoStreem.getVideoTracks()[0];
        const captureImg = new ImageCapture(mediaTrack);
        const photo = await captureImg.takePhoto()
        this.pictures = URL.createObjectURL(photo);
        },


        
  },
}

</script>

<style lang="scss">

.taken-picture {

  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}



// url kan man göra om till a tagg och ladda ner. Render caman this.save. Kan ladda hem genom caman
</style>


