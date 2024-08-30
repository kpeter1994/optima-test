<script setup lang="ts">
import {useAuthStore} from "~/stores/useAuthStore";

const authStore = useAuthStore()
const router = useRouter()

const user = ref({
  email: null,
  password: null,
});

const login = () => {
  authStore.login(user.value.email, user.value.password)
  router.push('/')

}

const errorMessage = ref(null)
</script>

<template>


  <div class="bg-radial">
    <div  class="w-full bg-opacity-40 ">
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

          <NuxtLink to="/regisztracio" class="text-black">
            <Button  severity="secondary" class="w-full">
              <i class="pi pi-user"></i>
              Regisztráció
            </Button>
          </NuxtLink>


          <p class="mt-1 text-red-500 text-sm">{{errorMessage}}</p>

          <Button type="submit" class="mt-3 w-full bg-black">Bejelentkezés</Button>
        </form>

      </div>

    </div>
  </div>

</template>

<style scoped>

</style>