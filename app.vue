<template>
  <NuxtLayout>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
      <NuxtLoadingIndicator color="#777" />
      <NuxtPage />
    </n-config-provider>
  </NuxtLayout>
</template>

<script >
import { defineComponent } from 'vue'
import { NConfigProvider } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'

export default defineComponent({
  components: {
    NConfigProvider
  },
  setup() {
    return {
      zhCN,
      dateZhCN
    }
  }
})
</script>
