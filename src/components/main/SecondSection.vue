<template>
  <section id="second-section" :style="{ backgroundImage: 'url(' + require('@/assets/main/img/bg amarelo.png') + ')' }">
    <div id="container" :style="{ backgroundImage: 'url(' + require('@/assets/main/img/fibras.png') + ')' }">
      <div id="card-mobile">
        <i class="fi fi-rs-angle-left" @click="tradePlan(0)"></i>
        <a href="#" v-if="plan === 0">
          <img :src="require('@/assets/main/img/740.png')" alt="">
        </a>
        <a href="#" v-if="plan === 1">
          <img :src="require('@/assets/main/img/480.png')" alt="">
        </a>
        <a href="#" v-if="plan === 2">
          <img :src="require('@/assets/main/img/1GB.png')" alt="">
        </a>
        <i class="fi fi-rs-angle-right" @click="tradePlan(1)"></i>
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
          this.plan = 2
        }

        if(this.plan === 1) {
          this.plan = 0
        }

        if(this.plan === 2) {
          this.plan = 1
        }

      }


      if(action === 1) {

        if(this.plan === 0) {
          this.plan = 1
        }

        if(this.plan === 1) {
          this.plan = 2
        }

        if(this.plan === 2) {
          this.plan = 0
        }

      }


    }
  }
}
</script>

<style scoped lang="scss">

#second-section {
  width: 100vw;
  height: 65vh;
  background-size: cover;

  #container {
    width: 100%;
    height: 100%;

    background-size: 150%;
    background-position-y: 50%;

    #card-mobile {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        position: relative;
        top: -10%;

        img {
          width: 70vw;
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
  }
}

</style>