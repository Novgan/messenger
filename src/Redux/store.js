import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import settingReducer from "./setting-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 2, message: 'Hi, how are you?', likesCount: 214},
                {id: 1, message: 'It\'s my first post.', likesCount: 251}
            ],
            newPostText: ''
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
            newMessageText: ''
        },
        sidebar: {},
        settingPage: {
            bodyColor: 'white',
        }
    },
    rerenderEntireTree() {
        console.log('state change')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.settingPage = settingReducer(this._state.settingPage, action);

        this.rerenderEntireTree(this._state);
    }
};




export default store;
