import React from "react";
import { Field, reduxForm } from "redux-form";
import red from "./red.png";
import green from "./green.png";
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
    width: "61px",
    height: "64px",
    cursor: "pointer",
    backgroundImage: `url(${icon})`
  };
  var wobble = !!(
    props.state.form.simple && props.state.form.simple.values.firstName
  )
    ? "wobble-hor-bottom"
    : "wobble-hor-bottomV2";
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {console.log("popo", wobble)}
        <label className="switch">
          <Field
            name="firstName"
            component="input"
            type="checkbox"
            onChange={event => {}}
          />
          <div
            className={["tran", "logo", wobble].join(" ")}
            style={sectionStyle}
          />
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
