import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const DELETE_POST = 'DELETE_POST';


let initialState = {
    posts: [
        {id: 2, message: 'Hi, how are you?', likesCount: 214},
        {id: 1, message: 'It\'s my first post.', likesCount: 251}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.text,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        default:
            return state;
    }
};

export const addPostActionCreator = (text) => ({
    type: ADD_POST,
    text
});
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};


export default profileReducer;
