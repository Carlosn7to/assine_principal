<template>
  <FirstSection/>
  <SecondSection/>
  <ThirdSection/>
</template>

<script>

import FirstSection from "@/components/main/FirstSection";
import SecondSection from "@/components/main/SecondSection";
import ThirdSection from "@/components/main/ThirdSection";

export default {
  name: "HomeMain",
  components: {FirstSection, SecondSection, ThirdSection}
}
</script>

<style scoped lang="scss">

</style>