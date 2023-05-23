<template>
  <div class="flex w-full h-screen justify-center items-center p-6 md:p-8">
    <transition name="slide" mode="out-in">
      <component :is="currentComponent as any" />
    </transition>
  </div>
</template>

<style scoped>
.slide-leave-active, .slide-enter-active {
  transition-duration: .25s;
  transition-timing-function: ease-in-out;
}
.slide-enter-from {
  transform: translateX(30px);
  opacity: 0;
}
.slide-enter-to {
  transform: none;
  opacity: 1;
}
.slide-leave-from {
  transform: none;
  opacity: 1;
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>

<script setup lang="ts">
import Btn from '../components/ui/Btn.vue'
import { useKeys } from "../composition/keys";
import { useRouter } from "vue-router";
import Register from '../components/Index/Register.vue'
import Login from '../components/Index/Login.vue'
import Welcome from "../components/Index/Welcome.vue";
import {computed, ref} from "vue";
import {useWelcomeStore} from "../stores/welcome";
const keys = useKeys()
if (keys.loggedIn.value) {
  useRouter().push('/app')
}
const welcome = useWelcomeStore()

const currentComponent = computed(() => {
  if (welcome.stage === 0) {
    return Welcome
  } else if (welcome.stage === 1) {
    return Login
  } else if (welcome.stage === 2) {
    return Register
  }
})
</script>
