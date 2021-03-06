import React from "react";
import { Field, reduxForm } from "redux-form";
import red from "./red.png";
import green from "./green.png";
import { connect } from "react-redux";
import "./style.css";

const Logo = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  var icon = !!(
    props.state.form.simple && props.state.form.simple.values.checkbox
  )
    ? red
    : green;
  var sectionStyle = {
    width: "61px",
    height: "64px",
    cursor: "pointer",
    backgroundImage: `url(${icon})`
  };
  var toto = props.state.form.simple && props.state.form.simple.values.checkbox;
  var toto2 =
    props.state.form.simple && props.state.form.simple.values.checkbox2;
  console.log("toto", toto);
  console.log("toto2", toto2);
  var wobble = !!(
    props.state.form.simple && props.state.form.simple.values.checkbox
  )
    ? ["wobble-hor-bottom"].join(" ")
    : ["wobble-hor-bottomV2"].join(" ");
  var pulse = !!(
    props.state.form.simple && props.state.form.simple.values.checkbox
  )
    ? ["redPulse"].join(" ")
    : ["greenPulse"].join(" ");
  var props = { hidden: true };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {console.log("popo", wobble)}
        <label className="switch">
          <Field
            name="checkbox"
            component="input"
            type="checkbox"
            onChange={event => {}}
          />

          <div className={pulse}>
            <div
              className={["tran", "logo", wobble].join(" ")}
              style={sectionStyle}
            />
          </div>
          <span class="slider" />
        </label>
        <span className="pulse" />
      </div>
    </form>
  );
};

const LogoForm = connect(state => ({ state: state }))(Logo);
export default reduxForm({
  form: "simple" // a unique identifier for this form
})(LogoForm);
