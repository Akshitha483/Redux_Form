import React from 'react';
import { Field, formValues, reduxForm } from 'redux-form';


function Form(props) {

    let renderError = ({error, touched})=>{
        if(touched && error){
            return(
                <div>
                    <div className='error'>{error}</div>
                </div>
            );
        }
    };


    let renderInput = ({input, placeholder, meta})=>{
    
    return (
        <div className='field'>
            <input {...input} placeholder={placeholder} autoComplete="off"/>
            {renderError(meta)}
            
        </div>
    );
};

let onSubmit = (formValues)=>{
    console.log(formValues);
};

return(
    <form onSubmit={props.handleSubmit(onSubmit)}>
        <Field name="title" component={renderInput} placeholder="enter title"/>
        <Field
        name="description"
        component={renderInput}
        placeholder="enter description"/>

        <button style={{backgroundColor:"blue"}}>Submit</button>
    </form>
    
)
}

//validations
let validate = (formValues)=>{
    const errors={};

    if(!formValues.title){
        errors.title="Title is required";
    }

    if(!formValues.description){
        errors.description="Description is required";
    }
    return errors;
};

export default reduxForm({
    form:"loginForm",
    validate,
})(Form);
