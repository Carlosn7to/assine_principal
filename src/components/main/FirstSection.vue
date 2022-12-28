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
  height: 50vh;
  background-color: #FB7411;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2vh 15% 0 15%;

  img:nth-child(1) {
    width: 90vw;
    height: auto;
  }

}

@media (min-width: 400px) and (min-height: 600px) {
  #first-section {

    img:nth-child(1) {
      width: 80vw;
    }
  }
}

@media (min-width: 400px) and (min-height: 800px) {
  #first-section {
    height: 45vh;

    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 400px) and (min-height: 1000px) {
  #first-section {
    height: 35vh;


    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 400px) and (min-height: 1200px) {
  #first-section {
    height: 30vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 400px) and (min-height: 1400px) {
  #first-section {
    height: 25vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 400px) and (min-height: 1600px) {
  #first-section {
    height: 22vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 600px) and (min-height: 600px) {
  #first-section {
  height: 48vh;
    img:nth-child(1) {
      width: 300px;
    }
  }
}

@media (min-width: 600px) and (min-height: 700px) {
  #first-section {

    img:nth-child(1) {
      width: 400px;
    }
  }
}

@media (min-width: 600px) and (min-height: 1000px) {
  #first-section {

    img:nth-child(1) {
      width: 80vw;
    }
  }
}

@media (min-width: 600px) and (min-height: 1200px) {
  #first-section {
    height: 42vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 600px) and (min-height: 1400px) {
  #first-section {
    height: 36vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 600px) and (min-height: 1600px) {
  #first-section {
    height: 32vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 800px) and (min-height: 600px) {
  #first-section {
    height: 70vh;
    img:nth-child(1) {
      width: 55vw;
    }
  }
}

@media (min-width: 800px) and (min-height: 800px) {
  #first-section {
    height: 50vh;
    img:nth-child(1) {
      width: 400px;
    }
  }
}

@media (min-width: 800px) and (min-height: 1000px) {
  #first-section {

    img:nth-child(1) {
      width: 65vw;
    }
  }
}

@media (min-width: 800px) and (min-height: 1200px) {
  #first-section {
    height: 46vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 800px) and (min-height: 1400px) {
  #first-section {
    height: 40vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 800px) and (min-height: 1600px) {
  #first-section {
    height: 35vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1000px) and (min-height: 600px) {
  #first-section {
    height: 80vh;
    img:nth-child(1) {
      width: 51vw;
    }
  }
}

@media (min-width: 1000px) and (min-height: 800px) {
  #first-section {
    height: 80vh;

    img:nth-child(1) {
      width: 80vw;
    }
  }
}

@media (min-width: 1000px) and (min-height: 1000px) {
  #first-section {
    height: 60vh;
    img:nth-child(1) {
      width: 65vw;
    }
  }
}

@media (min-width: 1000px) and (min-height: 1200px) {
  #first-section {
    height: 55vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1000px) and (min-height: 1400px) {
  #first-section {
    height: 47vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1000px) and (min-height: 1600px) {
  #first-section {
    height: 42vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1200px) and (min-height: 600px) {
  #first-section {
    height: 90vh;
    img:nth-child(1) {
      width: 48vw;
    }
  }
}

@media (min-width: 1200px) and (min-height: 800px) {
  #first-section {
    height: 90vh;

    img:nth-child(1) {
      width: 65vw;
    }
  }
}

@media (min-width: 1200px) and (min-height: 1000px) {
  #first-section {
    height: 76vh;
    img:nth-child(1) {
      width: 65vw;
    }
  }
}

@media (min-width: 1200px) and (min-height: 1200px) {
  #first-section {
    height: 65vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1200px) and (min-height: 1400px) {
  #first-section {
    height: 60vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1200px) and (min-height: 1600px) {
  #first-section {
    height: 52vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1400px) and (min-height: 600px) {
  #first-section {
    height: 100vh;
    img:nth-child(1) {
      width: 45vw;
    }
  }
}

@media (min-width: 1400px) and (min-height: 800px) {
  #first-section {
    height: 100vh;

    img:nth-child(1) {
      width: 60vw;
    }
  }
}

@media (min-width: 1400px) and (min-height: 1000px) {
  #first-section {
    height: 100vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1400px) and (min-height: 1200px) {
  #first-section {
    height: 78vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1400px) and (min-height: 1400px) {
  #first-section {
    height: 65vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1400px) and (min-height: 1600px) {
  #first-section {
    height: 58vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1600px) and (min-height: 600px) {
  #first-section {
    height: 100vh;
    img:nth-child(1) {
      width: 40vw;
    }
  }
}

@media (min-width: 1600px) and (min-height: 800px) {
  #first-section {
    height: 100vh;

    img:nth-child(1) {
      width: 55vw;
    }
  }
}

@media (min-width: 1600px) and (min-height: 1000px) {
  #first-section {
    height: 100vh;
    img:nth-child(1) {
      width: 65vw;
    }
  }
}

@media (min-width: 1600px) and (min-height: 1200px) {
  #first-section {
    height: 88vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1600px) and (min-height: 1400px) {
  #first-section {
    height: 75vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1600px) and (min-height: 1600px) {
  #first-section {
    height: 70vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1800px) and (min-height: 600px) {
  #first-section {
    height: 100vh;
    img:nth-child(1) {
      width: 35vw;
    }
  }
}

@media (min-width: 1800px) and (min-height: 800px) {
  #first-section {
    height: 100vh;

    img:nth-child(1) {
      width: 48vw;
    }
  }
}

@media (min-width: 1800px) and (min-height: 1000px) {
  #first-section {
    height: 100vh;
    img:nth-child(1) {
      width: 60vw;
    }
  }
}

@media (min-width: 1800px) and (min-height: 1200px) {
  #first-section {
    height: 100vh;
    img:nth-child(1) {
      width: 80vw;
    }
  }
}

@media (min-width: 1800px) and (min-height: 1400px) {
  #first-section {
    height: 85vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 1800px) and (min-height: 1600px) {
  #first-section {
    height: 70vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}

@media (min-width: 2000px) and (min-height: 600px) {
  #first-section {
    height: 100vh;
    img:nth-child(1) {
      width: 32vw;
    }
  }
}

@media (min-width: 2000px) and (min-height: 800px) {
  #first-section {
    height: 100vh;

    img:nth-child(1) {
      width: 43vw;
    }
  }
}

@media (min-width: 2000px) and (min-height: 1000px) {
  #first-section {
    height: 100vh;
    img:nth-child(1) {
      width: 53vw;
    }
  }
}

@media (min-width: 2000px) and (min-height: 1200px) {
  #first-section {
    height: 100vh;
    img:nth-child(1) {
      width: 65vw;
    }
  }
}

@media (min-width: 2000px) and (min-height: 1400px) {
  #first-section {
    height: 95vh;
    img:nth-child(1) {
      width: 70vw;
    }
  }
}

@media (min-width: 2000px) and (min-height: 1600px) {
  #first-section {
    height: 82vh;
    img:nth-child(1) {
      width: 90vw;
    }
  }
}



</style>