import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './reducers/PostReducer';


const Store = configureStore({
    reducer : {
        PostReducer
    }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;