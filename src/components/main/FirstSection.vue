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
    height: 85vh;

    img:nth-child(1) {
      width: 580px;
    }
  }
}


@media (min-width: 800px){
  #first-section {
    img:nth-child(1) {
      width: 380px;
    }
  }
}


@media (min-height: 500px) {
  #first-section {
    height: 70vh;
    img:nth-child(1) {
      width: 350px;
    }
  }
}

@media (min-height: 600px) {
  #first-section {
    height: 50vh;
    img:nth-child(1) {
      width: 400px;
    }
  }
}

@media (min-height: 900px) {
  #first-section {
    height: 40vh;
    img:nth-child(1) {
      width: 400px;
    }
  }
}

@media (min-width: 1150px) and (min-height: 900px) {
  #first-section {
    height: 50vh;
    img:nth-child(1) {
      width: 550px;
    }
  }
}

</style>