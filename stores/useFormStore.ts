import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {
    // State
    const currentBlock = ref(0)
    const form = ref({})

    // Actions
    const nextBlock = () => {
        currentBlock.value++
    }

    const previousBlock = () => {
        if (currentBlock.value > 0) {
            currentBlock.value--
        }
    }

    const setBlock = (blockNumber: number) => {
        currentBlock.value = blockNumber
    }

    const setForm = (formValue: any) => {
        form.value = formValue
    }

    // Return state and actions
    return {
        currentBlock,
        form,
        nextBlock,
        previousBlock,
        setBlock,
        setForm
    }
})
