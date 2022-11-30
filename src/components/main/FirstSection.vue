<template>
  <section id="first-section" :style="{ backgroundImage: 'url(' + require('@/assets/main/img/TOPO.png') + ')' }">
    <img :src="require('@/assets/main/img/MODELO.png')" alt="">

  </section>
</template>

<script>
export default {
  name: "FirstSection"
}
</script>

<style scoped lang="scss">

#first-section {
  width: 100vw;
  height: 40vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  img {
    width: 45%;
    height: auto;
    display: block;
    position: relative;
    left: -5%;
  }
}

</style>