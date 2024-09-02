import { defineStore } from 'pinia'
import { ref } from 'vue'

interface TestResult {
    title: string;
    totalScore: number;
    percentage: number;
    textResult: string;
}

export const useFormStore = defineStore('form', () => {
    // State
    const currentBlock = ref(0)
    const form = ref<any[]>([])  // Initialize as an empty array
    const title = ref<string>('')
    const currentQuestion = ref(1)
    const isSendForm = ref(false)
    const loading = ref(true)
    const testResult = ref<TestResult[]>([])  // Define the type for testResult
    const authStore = useAuthStore()


    // Actions
    const nextBlock = () => {
        currentBlock.value++

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // sima görgetés
        });
    }

    const setTitle = (titleValue: string) => {
        title.value = titleValue
    }

    const previousBlock = () => {
        if (currentBlock.value > 0) {
            currentBlock.value--

            window.scrollTo({
                top: 0,
                behavior: 'smooth' // sima görgetés
            });
        }


    }

    const setBlock = (blockNumber: number) => {
        currentBlock.value = blockNumber
    }

    const setQuestion = (questionNumber: number) => {
        currentQuestion.value = questionNumber
    }

    const setForm = (formValue: any) => {
        form.value = JSON.parse(JSON.stringify(formValue));
    }

    const sendForm = () => {

        form.value.forEach((block: any) => {


            const totalScore = block.question.reduce((sum: number, item: any) => {
                return sum + (item.value !== null ? Number(item.value) : 0);
            }, 0);

            const ArrayLength = block.question.length;

            const getTextResult = (percentage: number) => {
                let result = '';

                for (const item of block.rating2) {
                    if (item.border >= percentage) {
                        result = item.text;
                        break;
                    }
                }

                return result;
            }


            const result = {
                title: block.title,
                totalScore: totalScore,
                percentage: (totalScore) / (ArrayLength * 7) * 100,
                textResult: getTextResult(totalScore / (ArrayLength * 7) * 100)
            }

            testResult.value.push(result);

        });

        try {
             useFetch('http://localhost:1337/api/test-results', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authStore.token}`
                },
                body: JSON.stringify({
                    data: {
                        owner: 20,
                        title: title.value ?? null,
                        user_email:  authStore.user ?? null,
                        results: JSON.stringify(testResult.value), // Az összes eredményt egyszerre küldjük el
                        textResults: "123" // Cseréld le a valódi textResults értékre
                    }
                }),
            });
        } catch (error) {
            console.error("Hiba történt az adatok elküldése során:", error);
        }

        isSendForm.value = true;
        setTimeout(() => {
            loading.value = false;
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // sima görgetés az oldal tetejére
            });
        }, 3000)

    }

    // Return state and actions
    return {
        currentBlock,
        currentQuestion,
        form,
        isSendForm,
        loading,
        testResult,
        title,
        nextBlock,
        previousBlock,
        setBlock,
        setForm,
        setQuestion,
        sendForm,
        setTitle
    }
})
