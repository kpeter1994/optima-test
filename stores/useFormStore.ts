import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
    state: () => ({
        currentBlock: 0,
    }),
    actions: {
        nextBlock() {
            this.currentBlock++
        },
        previousBlock() {
            if (this.currentBlock > 0) {
                this.currentBlock--
            }
        },
        setBlock(blockNumber: number) {
            this.currentBlock = blockNumber
        }
    }
})
