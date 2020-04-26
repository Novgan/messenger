import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validator/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "../Common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMy)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const Login = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field type="text" placeholder={"Email"} name={"email"} component={Input} validate={[requiredField]}/>
        </div>
        <div><Field type="password" placeholder={"Password"} name={"password"} component={Input}
                    validate={[requiredField]}/></div>
        <div><Field type="checkbox" name={"rememberMy"} component={Input}/></div>
        { props.error && <div className={classes.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>
                login
            </button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(Login)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginForm);
