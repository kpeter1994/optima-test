<script setup lang="ts">
const props = defineProps<{
  size: string;
  color: string;
}>();
</script>

<template>

    <label class="custom-radio" :style="{ '--size': size, '--color': color }">
      <input type="radio" name="option" value="1">
      <span class="checkmark"></span>
    </label>

</template>

<style scoped>
/* Rejtjük az alapértelmezett rádiógombot */
.custom-radio input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Stílus a rádiógomb helyettesítésére */
/* Rejtjük az alapértelmezett rádiógombot */
.custom-radio input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  transition: all;
  animation-duration: 300ms;
}

/* Stílus a rádiógomb helyettesítésére */
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
}

/* Hatás a kijelölt rádiógombok esetén */
.custom-radio input[type="radio"]:checked + .checkmark {
  background-color: var(--color);
  border-color: var(--color);
}

/* Belső kör a kijelölt állapothoz */
.custom-radio .checkmark::after {
  content: "";
  position: absolute;
  display: none;
}

.custom-radio input[type="radio"]:checked + .checkmark::after {
  display: block;
}

.custom-radio .checkmark::after {
  top: 50%;
  left: 50%;
  width: calc(var(--size) * 0.65);
  height: calc(var(--size) * 0.65);
  border-radius: 50%;
  background: var(--color);
  transform: translate(-50%, -50%);
}

@media (min-width: 600px) {
  /* Rejtjük az alapértelmezett rádiógombot */
  .custom-radio input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Stílus a rádiógomb helyettesítésére */
  /* Rejtjük az alapértelmezett rádiógombot */
  .custom-radio input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    transition: all;
    animation-duration: 300ms;
  }

  /* Stílus a rádiógomb helyettesítésére */
  .custom-radio .checkmark {
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: #eee;
    border-radius: 50%;
    display: inline-block;
    border: 2px solid var(--color);
    margin-right: 10px;
  }

  .custom-radio .checkmark:hover {
    background-color: var(--color);
  }

  /* Hatás a kijelölt rádiógombok esetén */
  .custom-radio input[type="radio"]:checked + .checkmark {
    background-color: var(--color);
    border-color: var(--color);
  }

  /* Belső kör a kijelölt állapothoz */
  .custom-radio .checkmark::after {
    content: "";
    position: absolute;
    display: none;
  }

  .custom-radio input[type="radio"]:checked + .checkmark::after {
    display: block;
  }

  .custom-radio .checkmark::after {
    top: 50%;
    left: 50%;
    width: calc(var(--size) * 0.9);
    height: calc(var(--size) * 0.9);
    border-radius: 50%;
    background: var(--color);
    transform: translate(-50%, -50%);
  }
}
</style>
