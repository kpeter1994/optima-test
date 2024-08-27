<script setup lang="ts">

import {useAuthStore} from "~/stores/useAuthStore";

const authStore = useAuthStore()

const open = ref(false);

const user = ref({
    email: null,
    password: null,
  });

const login = () => {
  authStore.login(user.value.email, user.value.password)
  open.value = false

}

const errorMessage = ref(null)






</script>

<template>
  <Button @click="open = true">Bejelentkezés</Button>

  <div v-if="open" class="w-full h-screen bg-neutral-800 bg-opacity-40 backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 z-10 ">
    <div class="max-w-xl mx-auto p-8 lg:p-20 bg-white mt-20 rounded-3xl">

      <div class="mb-12">
        <img src="/image/logo-light.svg" class="h-8 mb-2" alt="optima logó">
        <h2 class="mb-2 text-2xl font-bold ">Bejelentkezés</h2>
      </div>

      <form @submit.prevent="login">
        <FloatLabel class="mb-8">
          <InputText class="w-full" id="email" v-model="user.email" />
          <label for="email">Email</label>
        </FloatLabel>

        <FloatLabel class="mb-8">
          <InputText type="password" class="w-full" id="password" v-model="user.password" />
          <label for="password">Jelszó</label>
        </FloatLabel>

        <RegisterComponent />


        <p class="mt-1 text-red-500 text-sm">{{errorMessage}}</p>

        <Button type="submit" class="mt-3 w-full bg-black">Bejelentkezés</Button>
      </form>

    </div>

  </div>
</template>

<style scoped>

</style>