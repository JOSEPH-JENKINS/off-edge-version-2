<template>
  <section class="hero---section section---padded">
    <div class="main---section">
      <p class="stim">3 slots left open for {{ getCurrentMonth() }}</p>
      <h1 class="header---text">Get more customers with a website that sells.</h1>
      <p class="header---desc">
        We'll elevate your website and its online presence to convert more visitors to customers and
        drive more sales and profits!
      </p>
      <div class="call-action">
        <h2 class="medium---text">
          <a
            href="https://calendar.app.google/qZWgq7yTC3s4hkgh6"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
            >Book A Call With Daniel</a
          >
        </h2>
        <h2 class="medium---text"><a href="#learn-more" class="btn accent">Learn More</a></h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    getCurrentMonth: () => {
      let today = new Date()
      let currentMonth = today.toLocaleString('default', { month: 'long' })

      return currentMonth
    }
  }
}
</script>
