<script setup>
const description =
  "Hotuns, Software Engineer at AppsCode working on ByteBuilders, with over 2+ years experience in Frontend development.";
const ogTitle =
  "Hotuns codes and helps others learn Javascript, Typescript, Vue, Nuxt, & Problem Solving";
const twitterDescription =
  "My blog website, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc";
const image =
  "https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp";
const mySite = "https://blog-nurHotuns.vercel.app/";
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "description",
      content: description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: "og:site_name", content: mySite },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: mySite,
    },
    {
      property: "og:title",
      content: ogTitle,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: "twitter:site", content: "@debs_obrien" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: mySite,
    },
    {
      name: "twitter:title",
      content: ogTitle,
    },
    {
      name: "twitter:description",
      content: twitterDescription,
    },
    {
      name: "twitter:image",
      content: image,
    },
  ],
});
</script>

<template>
  <div class="app bg-[#edecde] dark:text-zinc-300 dark:bg-[#151818]">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html.dark {
  color-scheme: dark;
}

::selection {
  background: #153e5d;
  color: #f9f5de;
}

.app {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFJREFUeNpiZGBg4GegAsBlCD8TqSYNQg2Mo6FEBAAIMACdPABtrSW/IQAAAABJRU5ErkJggg==);
  background-repeat: repeat;
  background-attachment: fixed;
}
</style>
