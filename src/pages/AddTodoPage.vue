<template>
  <q-page class="page">
    <div class="content-wrapper">
      <h1>Todo Toevoegen</h1>
      <q-input outlined label="Titel" v-model="title" />
      <q-input outlined label="Omschrijving" v-model="description" />
      <div>
        <q-btn @click="onAdd()" color="primary" label="Opslaan" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { createTodo } from 'src/services/todos.service';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const title = ref('');
    const description = ref('');

    const onAdd = async () => {
      if (title.value) {
        createTodo(title.value, description.value);
      }
    };
    return { title, onAdd, description };
  },
});
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
