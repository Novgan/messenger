import {usersAPI} from "../api/api";

const POST_TEXT = 'POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
            if (state.newPostText === '') {
                alert('Noting to post');
                return state;
            } else {
                let newPost = {
                    id: 4,
                    message: state.newPostText,
                    likesCount: 0,
                };
                return {
                    ...state,
                    posts: [newPost, ...state.posts],
                    newPostText: ''
                };
            }
        case POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile };
        default:
            return state;
    }
};

export const addPostActionCreator = (text) => ({
    type: ADD_POST,
    text
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
export const postTextActionCreator = (text) => ({
    type: POST_TEXT,
    text
});

export default profileReducer;
