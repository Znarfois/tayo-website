<template>
  <div class="client-list">
      <p class="client-list__header">{{ title }}</p>
      <div class="client-logos">
          <!-- Placeholders -->
          <div style="width: 176px; height: 176px; background:grey;"></div>
          <div style="width: 176px; height: 176px; background:grey;"></div>
          <div style="width: 176px; height: 176px; background:grey;"></div>
          <div style="width: 176px; height: 176px; background:grey;"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ClientList",
    props: {
        title: String,
    }
}
</script>

<style scoped>
    .client-list {
        margin-bottom: 64px;
    }

    .client-list__header {
        margin-bottom: 1rem;
    }

    .client-logos {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
</style>