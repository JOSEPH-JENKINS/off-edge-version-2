<template>
  <section class="___section about">
    <div class="about___text___container">
      <h2 class="header___text desc">
        <span class="space"></span>
        <span>
          Stop blending in with the masses and start standing out. Say hello to unique,
          high-converting websites.
        </span>
        <span
          >Discover why we're the premier choice for unleashing your brand's creativity online.
          <span class="differ___text"
            >Hit the contact button to get in touch with us now!</span
          ></span
        >
      </h2>
    </div>
    <div class="about___button">
      <a
        @click="handleClick"
        class="booking___btn"
        href="https://calendar.app.google/CPECws29tbeW6Hye8"
        >Book an appointment now</a
      >
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    handleClick() {
      fbq('track', 'Booked', { value: 'yes' })
    }
  }
}
</script>
