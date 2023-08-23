const { configureStore } = require("@reduxjs/toolkit");
const { useReducer } = require("react");

const store = configureStore({
  reducer: {
    users: useReducer,
  },
});

export default store;
