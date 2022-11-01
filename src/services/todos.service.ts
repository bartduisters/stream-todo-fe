import { api } from 'src/boot/axios';
import { Todo } from 'src/components/models';
import { Ref, ref } from 'vue';

const todos: Ref<Array<Todo>> = ref([]);

const setTodos = (newTodos: Array<Todo>) => (todos.value = newTodos);

const updateTodo = async (todo: Todo) => {
  console.log(todo)
  const response = await api.put(`/todos/${todo.id}`, todo);
  if (response.status === 200) {
    const index = todos.value.findIndex((t) => t.id === todo.id);
    todos.value[index] = todo;
  }
};

const createTodo = (title: string, description: string) => {
  api.post('/todos', { title, description });
};

const getTodo = async (id: string): Promise<Todo> => {
  const response = await api.get(`/todos/${id}`);
  return response.data;
};

const deleteTodo = async (id: string) => {
  const response = await api.delete(`/todos/${id}`);
  return response.data;
};

export { todos, setTodos, updateTodo, createTodo, getTodo, deleteTodo };
