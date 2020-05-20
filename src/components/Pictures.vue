
<template>
  <div >
    <h2>Picture Commponent</h2>

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
  
}
</script>

<style lang="scss">





</style>
