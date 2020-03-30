let CHANGE_THEME = 'CHANGE_THEME';

let initialState = {
    bodyColor: 'white',
};

const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            let changer = () => {
                state.bodyColor === 'white' ? state.bodyColor = 'black' : state.bodyColor = 'white'
            };
        default:
            return state;
    }
};


export const changeThemeActionCreator = (text) => ({
    type: CHANGE_THEME,
    text
});

export default settingReducer;
