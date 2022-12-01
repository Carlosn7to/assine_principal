<template>
  <router-view/>
</template>

<style lang="scss">

*, ::after, ::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'TT Hoves', sans-serif;

  @font-face {
    font-family: "TT Hoves";
    src: local("TT Hoves"), url(./fonts/TThover/TTHoves-ExtraBold.ttf);
  }

}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

@media (min-width: 600px ) {
  html {
    font-size: 75%;
  }
}

@media (min-width: 800px ) {
  html {
    font-size: 90%;
  }
}

@media (min-width: 900px ) {
  html {
    font-size: 100%;
  }
}


#app {
}

/*   SCROLL BAR   */
::-webkit-scrollbar-track {
  background-color: #F4F4F4;
}
::-webkit-scrollbar {
  width: 6px;
  background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
  background: #dad7d7;
}


</style>
