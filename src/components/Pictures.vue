<template>
  <div >

    <button v-on:click="captureImage" class="button-picture" >Take Picture</button>
    <PictureFilters />
    <div class="picture-download">
      <canvas ref="myCanvas" id="myCanvas" class="taken-picture" ></canvas> 
      <a href="#" ref="download"  class="download-link" @click="downloadCanvas" download="CutiePie">Download Image</a>
    </div>
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
    width: 50% !important;
    height: 50% !important;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  .picture-download {
    margin: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

.download-link {
      margin: 10px;
      width: 24vw;
      height: 13vw;
      font-size: 5vw;
      font-weight: 600;
      text-decoration: none;
      background-color: #ee6f7a;
      color: rgb(63, 30, 30);
      border: .125rem solid rgb(51, 31, 31);
      border-radius: .5rem;
            &:hover {  
            background: rgb(180, 103, 103);
            color: #ddd;

          }
            &:active {
            background: rgb(25, 25, 25);
            color: #ddd;
            }
}
  

</style>


