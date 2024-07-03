import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts : [],
    currentPost : null
    
};


const PostReducer = createSlice({
    name: 'PostReducer',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setCurrentPost : (state,action) => {
            state.currentPost = action.payload
        }
    },
    extraReducers: (builder) => {
         
    }
})
export const {setPosts,setCurrentPost} = PostReducer.actions;
export default PostReducer.reducer;
