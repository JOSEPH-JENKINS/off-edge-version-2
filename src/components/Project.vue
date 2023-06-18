<template>
  <div class="project">
    <a :href="link">
      <div class="main___project">
        <div class="project___img">
          <img :src="image" alt="project image" />
        </div>
        <div class="project___details">
          <h2 class="header___text small upper___cased">{{ title }}</h2>
          <h2 class="header___text small upper___cased">{{ category }}</h2>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    category: String,
    image: String,
    link: String
  }
}
</script>
