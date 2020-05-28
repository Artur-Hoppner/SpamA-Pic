<template>
  <div >
    <button v-on:click="captureImage()" class="button-picture" >Take Picture</button>
    <canvas ref="myCanvas" id="myCanvas" class="taken-picture" ></canvas> 
    <a href="#" ref="download"  class="btn" @click="downloadCanvas" download="CutiePie">Download Image</a>
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
      console.log("activate")
        const mediaTrack = this.$store.state.videoStreem.getVideoTracks()[0];
        const captureImg = new ImageCapture(mediaTrack);
        const photo = await captureImg.takePhoto()
        const data = URL.createObjectURL(photo);
        this.$refs.myCanvas
        this.Caman('#myCanvas', data, function() {
          this.render();
        });

        },
        

    downloadCanvas() {
      const canvas = this.$refs.myCanvas
      const imgUrl = canvas.toDataURL('image/png');
      this.$refs.download.href = imgUrl
}
  },
}

</script>

<style lang="scss">

  .taken-picture {
    // width: 50% !important;
    // height: 50% !important;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  button {
    border: none;
    border-radius: 0.3rem;
    background-color: rgb(241, 126, 126) ;
    background-size: 42px;
    box-shadow: 1px 1px 1px 1px rgba(255, 140, 140, 0.534);

    -webkit-appearance: none;
    -moz-appearance: none;
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


