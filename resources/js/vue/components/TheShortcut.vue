<template>
  <div class="fixed bottom-4 left-4 space-y-1 z-50">
    <div class="shortcut-btn" @click="goTo('/home')">
      <font-awesome-icon
        class="hover:text-purple-700 mr-2"
        :icon="['fas', 'home']"
      />
    </div>
    <div class="shortcut-btn" @click="$router.go(-1)">
      <font-awesome-icon
        class="hover:text-purple-700 mr-2"
        :icon="['fas', 'chevron-circle-left']"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
</style>
