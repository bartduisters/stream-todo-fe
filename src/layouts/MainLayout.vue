<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="title" @click="onHomeClick()">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Todo App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ROUTE_NAMES } from 'src/router/routes';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();

    const onHomeClick = () => {
      router.push({ name: ROUTE_NAMES.TODOS.LIST });
    };
    return { onHomeClick };
  },
});
</script>

<style lang="scss" scoped>
.title {
  cursor: pointer;
}
</style>
