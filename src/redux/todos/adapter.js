import { createEntityAdapter } from '@reduxjs/toolkit';

const adapter = createEntityAdapter({
  selectId: (todos) => todos.id,
});

export default adapter;
