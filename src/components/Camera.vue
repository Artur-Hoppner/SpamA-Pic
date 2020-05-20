<template>
<div id="camera">
    <h1>Video Component</h1>
        <video :srcObject.prop.camel="videoStreem" autoplay class="video"></video>
        <button v-on:click="captureImage()" >pic</button>
       
       <img src="" ref="photo"  style="width: 100%;" />
</div>
</template>

<script>
export default {
    data() {
    return {
        videoStreem: ''
    }
},
    // On start activate video feed. V-bind to html Video
  async mounted() {
      console.log("Videofeed Activated")
      try {
        const videoFeed = await navigator.mediaDevices.getUserMedia({ video: true});
        this.videoStreem = videoFeed;

        const track = this.videoStreem.getVideoTracks()[0];
        console.log(track, "track")
        let imageCapture = new ImageCapture(track);
         console.log(imageCapture, "imageCapture")
      } catch (error) {
          console.log(error);
      }
  },
  methods: {
      async captureImage() {
  const mediaTrack = this.videoStreem.getVideoTracks()[0];
  console.log(mediaTrack);
  const captureImg = new ImageCapture(mediaTrack);
  const photo = await captureImg.takePhoto()
  console.log(photo)
  this.$refs.photo.src = URL.createObjectURL(photo);
//   console.log(imgUrl);
//   this.$refs.photo.src = imgUrl;
}
  }

}

</script>

<style lang='scss'>
.video {
   width: 85vw;

}
</style>