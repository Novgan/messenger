const SEND_MESSAGE = 'SEND_MESSAGE';
const MESSAGE_TEXT = 'MESSAGE_TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case SEND_MESSAGE:
            let text = state.newMessageText;
            if (text === '') {
                alert('Enter message');
                return state;
            } else {
                return  {
                    ...state,
                    newMessageText: '',
                    messages: [...state.messages, {
                        id: 4,
                        message: text
                    }],
                };
            }
        case MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const messageTextActionCreator = (newText) => ({
    type: MESSAGE_TEXT,
    newText
});

export default dialogsReducer;
