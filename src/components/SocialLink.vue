<template>
  <a :href="link" class="social___link">
    <h2 class="header___text smaller colored">{{ placeholder }}</h2>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    placeholder: String
  }
}
</script>
