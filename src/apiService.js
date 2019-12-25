import moment from 'moment';
import list from './assets/files/list.json';

class ApiService {
  async getData() {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000); // имитируем запрос к Api
    });
    const { todos } = list;

    const sortedTodos = todos.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
    return sortedTodos.map((todo) => ({ ...todo, created: `${moment(todo.created).format('HH:mm:ss DD-MM-YYYY')}` }));
  }
}

export default ApiService;
