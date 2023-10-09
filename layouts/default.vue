<template>
  <div class="gd-container font-spacegrotesk">
    <header class="app-header fixed w-full bg-[#edecde] dark:bg-[#151818] z-10">
      <MainHeader />
    </header>
    <main>
      <div class="p-9" />
      <slot />
    </main>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>

<style scoped>
.gd-container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
.app-header {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFJREFUeNpiZGBg4GegAsBlCD8TqSYNQg2Mo6FEBAAIMACdPABtrSW/IQAAAABJRU5ErkJggg==);
  background-repeat: repeat;
  background-attachment: fixed;
}
</style>
