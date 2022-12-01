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
    width: 240px;
    height: auto;
  }

}

@media (min-width: 600px) {
  #first-section {

    img:nth-child(1) {
      width: 270px;
    }
  }
}

@media (min-width: 1150px) {
  #first-section {
    height: 55vh;

    img:nth-child(1) {
      width: 420px;
    }
  }
}


@media (min-width: 800px) and (min-height: 720px) {
  #first-section {
    img:nth-child(1) {
      width: 380px;
    }
  }
}

@media (min-width: 1150px) and (min-height: 720px) {
  #first-section {
    img:nth-child(1) {
      width: 420px;
    }
  }
}

@media (min-width: 1150px) and (min-height: 1000px) {
  #first-section {
    img:nth-child(1) {
      width: 600px;
    }
  }
}

</style>