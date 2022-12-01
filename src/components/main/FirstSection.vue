<template>
  <section id="first-section">
    <img :src="require('@/assets/main/editado/first_section.png')" alt="">
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
  height: 35vh;
  background-color: #FB7411;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2vh 15% 0 15%;

  img:nth-child(1) {
    width: 300px;
    height: auto;
  }

}

</style>