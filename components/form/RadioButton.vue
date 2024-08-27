<script setup lang="ts">
const props = defineProps<{
  modelValue: number | null;
  size: string;
  color: string;
  value: number;
  name: number | string;
}>();

const emit = defineEmits(['update:modelValue']);

// Az érték változásának kezelése
// const updateValue = (newValue: number) => {
//   try {
//     if (newValue !== null) {
//       emit('update:modelValue', newValue);
//     }
//   } catch (e) {
//     console.error('Error updating value:', e);
//   }
// };

const computedValue = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    emit('update:modelValue', newValue);
  }
});


</script>

<template>
  <label class="custom-radio" :style="{ '--size': size, '--color': color }">
    <input type="radio"
           :name="name"
           :value="value"
           :checked="computedValue === value"
           @input="computedValue = value">
    <span class="checkmark relative">
      <i class="pi pi-check pi-check-icon"></i>
    </span>
  </label>
</template>

<style scoped>
.custom-radio input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  transition: all 300ms;
}

.pi-check-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
  pointer-events: none;
  display: none; /* Alapértelmezés szerint rejtett */
}

.custom-radio .checkmark {
  position: relative;
  width: calc(var(--size) * 0.7);
  height: calc(var(--size) * 0.7);
  background-color: #eee;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid var(--color);
  margin-right: 10px;
}

.custom-radio .checkmark:hover {
  background-color: var(--color);
  cursor: pointer;
}

.custom-radio input[type="radio"]:checked + .checkmark {
  background-color: var(--color);
  border-color: var(--color);
}

.custom-radio input[type="radio"]:checked + .checkmark .pi-check-icon {
  display: block; /* Pipa megjelenítése bejelöléskor */
}

@media (min-width: 600px) {
  .custom-radio .checkmark {
    width: var(--size);
    height: var(--size);
  }

  .custom-radio .checkmark::after {
    width: calc(var(--size) * 0.9);
    height: calc(var(--size) * 0.9);
  }
}
</style>
