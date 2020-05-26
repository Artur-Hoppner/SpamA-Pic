
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
  width: 50% !important;
  height: 50% !important;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}


// LÖSNING PÅ  ta ny bild

// if (document.querySelector('canvas') !== null) {
//     document.querySelector('#photo').removeAttribute('data-caman-id');
//     const switch_img = imgUrl
//     renderCanvas('#photo', switch_img);
//   }

// function renderCanvas(DOMid, src) {
//   Caman(DOMid, src, function () {
//     this.render();
//     //Change the download-target to canvas src
//     saveCanvas();
//   })
// }


// Ladda ner bild
// function saveCanvas() {
//   document.querySelector('#download').href = document.querySelector('#photo').toDataURL(); //convert canvas image with multiple layers to base64
//   document.querySelector('#download').download = 'my-instablam-picture.jpeg'; // Mention the file name and format to be downloaded
// }

// För att ladda ner:
// url kan man göra om till a tagg och ladda ner. Render caman this.save. Kan ladda hem genom caman
</style>


