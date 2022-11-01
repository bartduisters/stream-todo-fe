<template>
  <q-page class="page">
    <div v-if="todo" class="content-wrapper">
      <h1>Edit Todo</h1>
      <q-input outlined label="Titel" v-model="todo.title" />
      <q-input outlined label="Omschrijving" v-model="todo.description" />
      <q-checkbox v-model="todo.completed" label="Voltooid" />
      <div class="buttons">
        <q-btn @click="onSave()" color="primary" label="Opslaan" />
        <q-btn @click="onDelete()" color="negative" label="Verwijderen" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo } from 'src/components/models';
import { ROUTE_NAMES } from 'src/router/routes';
import { deleteTodo, getTodo, updateTodo } from 'src/services/todos.service';
import { defineComponent, onBeforeMount, Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const todo = ref() as Ref<Todo>;

    onBeforeMount(async () => {
      const { id } = route.params;
      if (id) {
        todo.value = await getTodo(id.toString());
      }
    });

    const onSave = async () => {
      console.log(todo.value);
      await updateTodo(todo.value);
      router.push({ name: ROUTE_NAMES.TODOS.LIST });
    };

    const onDelete = async () => {
      await deleteTodo(todo.value.id.toString());
      router.push({ name: ROUTE_NAMES.TODOS.LIST });
    };

    return { todo, onSave, onDelete };
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

.buttons {
  display: flex;
  gap: 0.5rem;
}
</style>
