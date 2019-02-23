<template>
  <p class="footer">Copyright © {{year}} {{company}}</p>
</template>

<script>
export default {
  name: 'MyFooters',
  props: {
    company: String
  },
  computed: {
    year: function() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer {
  border-top: 1px solid #eaecef;
  text-align: center;
  padding: 2.5rem;
  color: #4e6e8e;
}
</style>

