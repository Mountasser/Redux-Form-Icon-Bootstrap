import React from "react";
import { Field, reduxForm } from "redux-form";
import red from "./logo.png";
import green from "./logo2.png";
import { connect } from "react-redux";
import "./style.css";

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  var icon = !!(
    props.state.form.simple && props.state.form.simple.values.firstName
  )
    ? red
    : green;
  var sectionStyle = {
    width: "51px",
    height: "54px",
    cursor: "pointer",
    backgroundImage: `url(${icon})`,
    borderRadius: "10px"
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {console.log(
          "popo",
          !!(
            props.state.form.simple && props.state.form.simple.values.firstName
          )
        )}
        <label className="switch">
          <Field name="firstName" component="input" type="checkbox" />

          <div className="tran logo" style={sectionStyle} />

          <span class="slider" />
        </label>
      </div>
    </form>
  );
};

const SimpleFormCo = connect(state => ({ state: state }))(SimpleForm);
export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleFormCo);
