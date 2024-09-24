export const useSendForm = (path:string, data: any) => {

  const config = useRuntimeConfig()
  const authStore = useAuthStore()

  try {
    useFetch(config.public.backendUrl + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authStore.token}`
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Hiba történt az adatok elküldése során:", error);
  }
  return ref()
}
