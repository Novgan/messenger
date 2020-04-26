const SEND_MESSAGE = 'SEND_MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {
                    id: 4,
                    message: text
                }],
            };
        default:
            return state;
    }
};

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
