<script setup lang="ts">

const user = ref({
    email: null,
    password: null,
    rePassword: null
  });

const errorMessage = ref<string | null>(null)

const open = ref(false);

const submit = () => {

  errorMessage.value = null; // Töröljük az előző hibaüzenetet

  if (user.value.password !== user.value.rePassword) {
    errorMessage.value = 'A két jelszó nem egyezik meg!';
    return
  }

  try {

    const email = user.value.email ?? 'default@example.com'; // Ha az email null, akkor használjunk egy alapértelmezett értéket

    const { data, error } =  useFetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      body: JSON.stringify({
        username: user.value.email.split('@')[0] ?? null, // Vagy bármilyen felhasználónév generálás
        email: user.value.email,
        password: user.value.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (error.value) {
      console.error('Regisztrációs hiba:', error);
      const responseError = error.value?.data?.error?.message || 'Regisztrációs hiba történt.';
      errorMessage.value = responseError;
      return;
    }

    // console.log('Regisztráció sikeres:', data.value);

    // alert('Regisztráció sikeres!');
    open.value = false;
    // Itt átirányíthatod a felhasználót, például a bejelentkezési oldalra
    // this.$router.push('/login');
  } catch (err) {
    console.error('Hiba történt a regisztráció során:', err);
    alert('Hiba történt a regisztráció során.');
  }

}


</script>

<template>
  <Button  severity="secondary" class="w-full" @click="open = true">
    <i class="pi pi-user"></i>
    Regisztráció
  </Button>

  <div v-if="open" class="w-full h-screen bg-neutral-800 bg-opacity-40 backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 z-10 ">
    <div class="max-w-xl mx-auto p-8 lg:p-20 bg-white mt-20 rounded-3xl">

      <div class="mb-12">
        <img src="/image/logo-light.svg" class="h-8 mb-2" alt="optima logó">
        <h2 class="mb-2 text-2xl font-bold ">Regisztráció</h2>
        <p class="text-neutral-600">Regisztálj, hogy bármikor visszanézhesd a kitöltött tesztjeid!</p>
      </div>

      <form @submit.prevent="submit">
        <FloatLabel class="mb-8">
          <InputText class="w-full" id="email" v-model="user.email" />
          <label for="email">Email</label>
        </FloatLabel>

        <FloatLabel class="mb-8">
          <InputText type="password" class="w-full" id="password" v-model="user.password" />
          <label for="password">Jelszó</label>
        </FloatLabel>

        <FloatLabel>
          <InputText type="password" class="w-full" id="rePassword" v-model="user.rePassword" />
          <label for="rePassword">Jelszó újra</label>
        </FloatLabel>
        <p class="mt-1 text-red-500 text-sm">{{errorMessage}}</p>

        <Button type="submit" class="mt-8 w-full bg-black">Regisztráció</Button>
      </form>

    </div>

  </div>
</template>

<style scoped>

</style>