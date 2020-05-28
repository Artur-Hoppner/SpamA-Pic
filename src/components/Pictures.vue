<template>
  <div >

    <button v-on:click="captureImage" class="button-picture" >Take Picture</button>
    <PictureFilters />
    <canvas ref="myCanvas" id="myCanvas" class="taken-picture" ></canvas> 
    <a href="#" ref="download"  class="btn" @click="downloadCanvas" download="CutiePie">Download Image</a>

    <!-- Work in progress! -->
    <!-- <div id="div1"> </div> -->
    <!-- <button @click="testCreate" >testCreate</button> -->
    <!-- <button @click="removeIt" >removeIt</button> --> 
  
  </div>
</template>

<script>

import PictureFilters from '@/components/PictureFilters.vue'

export default {

  components: {
    PictureFilters,
  },

  methods: {
   
    async captureImage() {
      console.log("mfkldmsklfj")
        const mediaTrack = this.$store.state.videoStreem.getVideoTracks()[0];
        const captureImg = new ImageCapture(mediaTrack);
        const photo = await captureImg.takePhoto()
        const data = URL.createObjectURL(photo);
        this.Caman('#myCanvas', data, function() {
          this.render();
        });
    },

    downloadCanvas() {
      // If you dont want to download offline then add if(window.navigator.onLine){...code...}
      // or if(!window.navigator.onLine) {add style: displaye: none;}
      const canvas = this.$refs.myCanvas
      const imgUrl = canvas.toDataURL('image/png');
      this.$refs.download.href = imgUrl
    },
    

    // Work in progress: This makes it possible to create element and delete it. Its now possible to remove picture before taking another.
      // removeIt() {
      //   console.log(this.$refs.myCanvas, "test")
      //   // this.$refs.myCanvas.remove()
      //   document.getElementById("myCanvas").remove()
      // },

      //   testCreate() {
      //     let para = document.createElement("canvas");
      //     para.id = "myCanvas"
      //     // para.ref = "myCanvas"
      //     // let node = document.createTextNode("This is new.");
          

      //     // para.appendChild(node);
      //     var element = document.getElementById("div1");
      //     element.appendChild(para)
      //   }
      
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


  

</style>


