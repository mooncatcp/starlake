<template>
  <div class="flex items-center">
    <button @click="welcome.stage = props.to">
      <ArrowLeftIcon class="h-6 w-6 text-white" />
    </button>
    <h1 class="text-3xl font-bold ml-3"><slot></slot></h1>
  </div>
</template>

<script lang="ts" setup>
import { useWelcomeStore } from "../../stores/welcome";
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'

const props = defineProps<{
  to: number
}>()
const welcome = useWelcomeStore()
</script>
