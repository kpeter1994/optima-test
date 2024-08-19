import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {
    // State
    const currentBlock = ref(0)
    const form = ref({})
    const currentQuestion = ref(1)
    const isSendForm = ref(false)
    const testResult = ref([])

    // Actions
    const nextBlock = () => {
        currentBlock.value++

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // sima görgetés
        });
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
        form.value = formValue
    }

    const sendForm = () => {



        form.value.forEach((block: any) => {

            const totalScore = block.question.reduce((sum: number, item: any) => {
                return sum + (item.value !== null ? Number(item.value) : 0);
            }, 0);

            const ArrayLength = block.question.length;

            const getTextResult = (percentage: any) => {

                if (percentage < 20) {
                   return block.rating.low
                }
                 if (percentage < 60) {
                     return block.rating.medium
                 }

                return  block.rating.high

            }

            const result = {
                title: block.title,
                totalScore: totalScore,
                percentage: totalScore / (ArrayLength * 7) * 100,
                textResult: getTextResult(totalScore / (ArrayLength * 7) * 100)
            }

            testResult.value.push(result);
            isSendForm.value = true;
        });


    }

    // Return state and actions
    return {
        currentBlock,
        currentQuestion,
        form,
        isSendForm,
        nextBlock,
        previousBlock,
        setBlock,
        setForm,
        setQuestion,
        sendForm,
        testResult
    }
})
