import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 214},
            {id: 2, message: 'It\'s my first post.', likesCount: 251}
        ],
        newPostText: 'Enter text'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Pls stop error'}
        ],
        dialogs: [
            {id: 1, name: 'Oleg'},
            {id: 2, name: 'Maria'},
            {id: 3, name: 'Slava'}
        ],
    },
};

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = 'Enter text';
    rerenderEntireTree(state);
};

export let postText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
};

export default state;
