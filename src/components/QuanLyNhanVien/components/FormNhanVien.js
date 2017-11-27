import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import DropdownList from "react-widgets/lib/DropdownList";
import SelectList from "react-widgets/lib/SelectList";
import Multiselect from "react-widgets/lib/Multiselect";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import momentLocalizer from "react-widgets-moment";
import moment from "../../../i18n/timeZone";
import "react-widgets/dist/css/react-widgets.css";

moment.locale("vi");
momentLocalizer();

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(3);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const tooOld = value =>
  value && value > 65 ? "You might be too old for this" : undefined;
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className=" form form-group">
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
const renderDateTimePicker = ({
  input: { onChange, value },
  showTime,
  label
}) => (
  <DateTimePicker
    onChange={onChange}
    className="form-control"
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />
);
const ThemNhanVienForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Họ tên"
        validate={[required, maxLength15]}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="email"
        validate={email}
        warn={aol}
      />
      <Field
        name="sodt"
        type="text"
        component={renderField}
        label="Số điện thoại"
        validate={[required, number, minValue18]}
        warn={tooOld}
      />
      <div>
        <label>Ngày sinh</label>
        <Field
          name="ngaysinh"
          type="text"
          component={renderDateTimePicker}
          label="ngaysinh"
          showTime={false}
          validate={[required, number, minValue18]}
          warn={tooOld}
        />
      </div>

      <Field
        name="socmt"
        type="text"
        component={renderField}
        label="Số chứng minh thư"
        validate={[required, number, minValue18]}
        warn={tooOld}
      />
      <Field
        name="diachi"
        type="text"
        component={renderField}
        label="địa chỉ"
        validate={[required, number, minValue18]}
        warn={tooOld}
      />
      <div>
        <button type="submit" disabled={submitting}>
          Tạo
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Xóa hết
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "themnhanvienform" // a unique identifier for this form
})(ThemNhanVienForm);
