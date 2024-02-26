import { configureStore } from '@reduxjs/toolkit';
import configReducer from './config-reducer.js';

const store = configureStore({
    reducer: {
        config: configReducer
    }
});

export default store;
