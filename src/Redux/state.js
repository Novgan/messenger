import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 214},
            {id: 2, message: 'It\'s my first post.', likesCount: 251}
        ],

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

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.unshift(newPost);
    rerenderEntireTree(state);
};

export default state;
