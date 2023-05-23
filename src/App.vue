<template>
  <div class="w-full h-full min-h-screen">
    <router-view v-slot="{ Component }">
      <suspense>
        <div>
          <component :is="Component"></component>
        </div>
        <template #fallback>
          <Loading />
        </template>
      </suspense>
    </router-view>
  </div>
</template>
<script setup>
import Loading from "./components/ui/Loading.vue";
</script>
