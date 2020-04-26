import React from "react";
import classes from './Dialogs.module.css';
import Dialog_items from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validator/validators";

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <Dialog_items name={d.name} key={d.id} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message content={m.message} key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};


const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   validate={[requiredField, maxLength50]}
                   name={"newMessageBody"}
                   placeholder={"Enter your message"}
                   cols="30" rows="3"/>
        </div>
        <div>
            <button> Send</button>
        </div>
    </form>)
}

const AddMessageFormRedux = reduxForm ({
    form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;
