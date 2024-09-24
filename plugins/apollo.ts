export default defineNuxtPlugin((nuxtApp) => {
    const userStore = useAuthStore();

    // Token betöltése, ha van localStorage-ben mentve
    userStore.loadToken();

    nuxtApp.hook("apollo:auth", ({ client, token }) => {
        // Ellenőrizzük, hogy van-e token a store-ban
        if (userStore.token) {
            token.value = userStore.token;
        }
    });
});
