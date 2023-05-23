<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import Btn from "./ui/Btn.vue";

  const i18n = useI18n()
  const toggleLocale = () => {
    const locale = i18n.locale.value
    if (locale === 'ru') {
      i18n.locale.value = 'en'
    } else {
      i18n.locale.value = 'ru'
    }
  }
</script>

<template>
  <Btn
    class="bg-surface border-tertiaryLighter absolute left-2 bottom-2 shadow-2xl"
    @click="toggleLocale()"
  >
    🌍
  </Btn>
</template>
