<template>
  <div class="w-full h-full min-h-screen">
    <LanguageSwitcher />
    <router-view v-slot="{ Component, route }">
      <suspense>
        <transition>
          <component :key="route.path" :is="Component"></component>
        </transition>
        <template #fallback>
          <Loading />
        </template>
      </suspense>
    </router-view>
  </div>
</template>
<script setup>
import Loading from "./components/ui/Loading.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
</script>
