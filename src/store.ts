import { configureStore } from '@reduxjs/toolkit';
import * as pageReducer from './reducers/index';

const rootReducer = configureStore({
    reducer: pageReducer,
});

export default rootReducer;