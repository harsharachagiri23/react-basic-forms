import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName:"",
    lastName:"",
    email:"",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputchange = (event) => {
    setValues({...values, firstName: event.target.value})
  } 

  const handleLastNameInputchange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputchange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      if(values.firstName && values.lastName && values.email){
        setValid(true);
      }
      setSubmitted(true);
  }
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
       { submitted && valid? <div class="success-message">Success! Thank you for registering</div> : null } 
        <input
          onChange={handleFirstNameInputchange}
          value = {values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span>Please enter your firstName</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          onChange={handleLastNameInputchange}
          value = {values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span>Please enter your lastName</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleEmailInputchange}
          value = {values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please enter your email</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
