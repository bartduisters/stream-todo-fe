import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.code-coaching.dev/api/todos/api',
});

/*
 * Als de backend lokaal draait, gebruik dan deze baseURL:
 */
// const api = axios.create({ baseURL: 'http://localhost:3033/api' });

export { api };
