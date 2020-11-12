import React from "react";
export const RegisterForm = ({ onSubmit }) => {
  return (
    <form onChange={onChange}>
      <input className="mb-2" placeholder="User Name" id="username" />
      <br />
      <input className="mb-2" placeholder="Password" id="password" />

      <button className="form-control btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
export default RegisterForm;
