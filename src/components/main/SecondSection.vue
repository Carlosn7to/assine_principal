<template>
  <section id="second-section" :style="{ backgroundImage: 'url(' + require('@/assets/main/img/bg amarelo.png') + ')' }">
    <div id="container" :style="{ backgroundImage: 'url(' + require('@/assets/main/img/fibras.png') + ')' }">
      <div id="card-mobile">
        <i class="fi fi-rs-angle-left" @click="tradePlan(0)"></i>
        <a href="https://api.whatsapp.com/send/?phone=556140404040&text=Quero+contratar+740Mb+com+DirectGO!" target="_blank" v-show="plan === 0">
          <img :src="require('@/assets/main/img/740.png')" alt="">
        </a>
        <a href="https://api.whatsapp.com/send/?phone=556140404040&text=Quero+contratar+480Mb+com+DirectGO!" target="_blank" v-show="plan === 1">
          <img :src="require('@/assets/main/img/480.png')" alt="">
        </a>
        <a href="https://api.whatsapp.com/send/?phone=556140404040&text=Quero+contratar+1Gb+com+DirectGO!" target="_blank" v-show="plan === 2">
          <img :src="require('@/assets/main/img/1GB.png')" alt="">
        </a>
        <i class="fi fi-rs-angle-right" @click="tradePlan(1)"></i>
      </div>
      <div id="card-web">
        <a href="https://api.whatsapp.com/send/?phone=556140404040&text=Quero+contratar+740Mb+com+DirectGO!" target="_blank">
          <img :src="require('@/assets/main/img/740Mb_desc.png')">
        </a>
        <a href="https://api.whatsapp.com/send/?phone=556140404040&text=Quero+contratar+480Mb+com+DirectGO!" target="_blank" style=" position: relative; top: -10%">
          <img :src="require('@/assets/main/img/480Mb_desc.png')" alt="">
        </a>
        <a href="https://api.whatsapp.com/send/?phone=556140404040&text=Quero+contratar+1Gb+com+DirectGO!" target="_blank">
          <img :src="require('@/assets/main/img/1GB_desc.png')" alt="">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecondSection",
  data () {
    return {
      plan: 1
    }
  },
  methods: {
    tradePlan: function (action) {

      if(action === 0) {

        if(this.plan === 0) {
          return this.plan = 2
        }

        if(this.plan === 1) {
          return this.plan = 0
        }

        if(this.plan === 2) {
          return this.plan = 1
        }

      }


      if(action === 1) {

        if(this.plan === 0) {
          return this.plan = 1
        }

        if(this.plan === 1) {
          return this.plan = 2
        }

        if(this.plan === 2) {
          return this.plan = 0
        }

      }


    }
  }
}
</script>

<style scoped lang="scss">

#second-section {
  width: 100vw;
  height: 50vh;
  background-size: cover;

  #container {
    width: 100%;
    height: 100%;

    background-size: 150%;
    background-position-y: 50%;

    #card-mobile  {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        position: relative;
        top: -10%;
        z-index: 3;

        img {
          width: 200px;
          height: auto;
        }
      }

      i {
        position: relative;
        top: -10%;
        font-size: 5rem;
        color: #18183B;
      }
    }

    #card-web {
      display: none;
    }
  }
}

@media (min-width: 800px) {
  #second-section {
    height: 50vh;
    #container {

      #card-mobile {
        display: none;
      }

      #card-web {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 230px;
        }

        a:nth-child(2) {
          img {
            width: 300px;
          }
        }
      }
    }
  }
}

@media (min-width: 1150px) {
  #second-section {
    height: 85vh;
    #container {
      #card-web {

        img {
          width: 280px;
        }

        a:nth-child(2) {
          img {
            width: 340px;
          }
        }
      }
    }
  }
}

@media (min-height: 800px) {
  #second-section {
    #container {
      #card-mobile {
        a {
          img {
            width: 260px;
          }
        }
      }
    }
  }
}

@media (min-height: 1000px) {
  #second-section {
    #container {
      #card-mobile {
        a {
          img {
            width: 300px;
          }
        }
      }
    }
  }
}

</style>