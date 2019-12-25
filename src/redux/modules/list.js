// Initial State
const initialState = {
  test: false,
  tasks: []
};

// Action types
const actionTypes = {
  SET_TEST: 'SET_TEST',
  ADD_TASK: 'ADD_TASK',
  INIT_TASKS: 'INIT_TASKS'
};

export const ActionCreator = {
  initTasks: (tasks) => ({
    type: actionTypes.INIT_TASKS,
    payload: tasks
  }),
  addTask: (task) => ({
    type: actionTypes.ADD_TASK,
    payload: task
  }),
};

export const Operation = {
  initTasks: () => async (dispatch, _getState, api) => {
    const todos = await api.getData();
    dispatch(ActionCreator.initTasks(todos));
  },
  updateTask: (id, isDone) => (dispatch, getState, _api) => {
    const state = getState();
    const {tasks} = state.list;
    const index = tasks.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newList = [...tasks];
      newList[index].done = isDone;
      dispatch(ActionCreator.initTasks(newList));
    }
  }
};

// Reducer
export default (state = initialState, action = { type: null, payload: null }) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_TEST:
      return {
        ...state,
        test: payload,
      };
    case actionTypes.INIT_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case actionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    default: {
      return state;
    }
  }
};

// Actions
export const setTest = (newTest) => ({ type: actionTypes.SET_TEST, payload: newTest });
