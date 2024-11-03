import React from 'react'
import { useFormik } from 'formik';
import "./MadlibsForm.css"

const validate = values => {
    const errors = {};
    if (!values.noun) {
      errors.noun = 'Required';
    }
  
    if (!values.noun2) {
      errors.noun2 = 'Required';
    }
  
    if (!values.adjective) {
      errors.adjective = 'Required';
    }

    if (!values.color) {
        errors.color = 'Required';
      }
  
    return errors;
};

const  MadlibsForm = ({initial, handleSubmit}) => {

    const formik = useFormik(
        {initialValues: initial,
        validate,
        onSubmit: values => {handleSubmit(values)}}
    );

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
            id="noun"
            type="text"
            name="noun"
            placeholder="noun"
            value={formik.values.noun}
            onChange={formik.handleChange}
            />
             {formik.errors.noun ? <div>{formik.errors.noun}</div> : null}

            <input
            id="noun2"
            type="text"
            name="noun2"
            placeholder="noun2"
            value={formik.values.noun2}
            onChange={formik.handleChange}
            />
             {formik.errors.noun2 ? <div>{formik.errors.noun2}</div> : null}

            <input
            id="adjective"
            type="text"
            name="adjective"
            placeholder="adjective"
            value={formik.values.adjective}
            onChange={formik.handleChange}
            />
             {formik.errors.adjective ? <div>{formik.errors.adjective}</div> : null}
            
            <input
            id="color"
            type="text"
            name="color"
            placeholder="color"
            value={formik.values.color}
            onChange={formik.handleChange}
            />
             {formik.errors.color ? <div>{formik.errors.color}</div> : null}
        

            <button>Get Story</button>
        </form>
    )
}

export default MadlibsForm;