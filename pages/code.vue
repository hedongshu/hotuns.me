<script setup lang="ts">
import { getIncludedYearPosts } from '@/utils'

const { data: posts, pending, error, refresh } = await useAsyncData(
  () => getIncludedYearPosts('code')
)

</script>

<template>
  <sub-nav />

  <post-list :posts="posts" />
</template>
