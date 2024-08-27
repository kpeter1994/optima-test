import { defineStore } from 'pinia'
import { ref } from 'vue'

interface authResult {
    jwt: string;
    user: {
        username: string;
        email: string;
        id: number;
    }
}

export const useAuthStore = defineStore('auth', () => {
    // State
    const user = ref<string | null>(null)
    const token = ref<string | null>(null)
    const isAuthenticated = ref<boolean>(false)
    const errorMessage = ref<string | null>(null)

    onMounted(() => {
        const savedToken = localStorage.getItem('token')
        const savedUser = localStorage.getItem('user')

        if (savedToken && savedUser){
            token.value = savedToken
            user.value = savedUser
            isAuthenticated.value = true
        }
    })


    // Actions
    const login = async (email: string, password: string) => {
        errorMessage.value = null

        try {
            const {data, error} = await useFetch<authResult>('http://localhost:1337/api/auth/local',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: email,
                    password,
                }),
            })

            if (error.value){
                const responseError = error.value?.data?.error?.message || 'Bejelentkezési hiba történt.'
                errorMessage.value = responseError
                return
            }


            token.value = data?.value?.jwt ?? null
            user.value = data?.value?.user.username ?? null
            isAuthenticated.value = true

            localStorage.setItem('token', token.value)
            localStorage.setItem('user', user.value)

        } catch  (err){
            console.error('Hiba történt a bejelentkezés során:', err)
            errorMessage.value = 'Ismeretlen hiba történt a bejelentkezés során.'
        }
    }

    const logout = () => {
        token.value = null
        user.value = null
        isAuthenticated.value = false

        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }



    // Return state and actions
    return {
        user,
        token,
        isAuthenticated,
        errorMessage,
        login,
        logout
    }


})
