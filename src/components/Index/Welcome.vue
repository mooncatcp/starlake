<template>
  <div class="card">
    <h1 class="font-bold text-2xl md:text-3xl text-center">
      {{ $t('login.welcome.title') }}
    </h1>
    <p class="opacity-40 mx-auto sm:max-w-[75%] text-center mb-8 mt-3">
      {{ $t('login.welcome.text') }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
      <Btn
        @click="welcome.stage = 1"
        class="bg-primary border-primaryLighter"
      >
        {{ $t('login.welcome.login') }}
      </Btn>
      <Btn
        @click="welcome.stage = 2"
        class="bg-tertiary border-tertiaryLighter">
        {{ $t('login.welcome.register') }}
      </Btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Btn from "../ui/Btn.vue";
import {useWelcomeStore} from "../../stores/welcome";

const welcome = useWelcomeStore()
</script>
