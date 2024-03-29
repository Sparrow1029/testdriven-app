import React from 'react';
import { Redirect } from 'react-router-dom';

const Form = (props) => {
  if (props.isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <div>
      {/* inline if statement: only passes to second arg after && if first is true */}
      {props.formType === 'Login' &&
        <h1 className="title is-1">Log In</h1>
      }
      {props.formType === 'Register' &&
        <h1 className="title is-1">Register</h1>
      }
      <hr/><br/>
      <form onSubmit={(event) => props.handleUserFormSubmit(event)}>
        {props.formType === 'Register' &&
          <div className="field">
            <input
              name="username"
              className="input is-medium"
              type="text"
              required
              placeholder="Enter a username"
              value={props.formData.username}
              onChange={props.handleFormChange}
            />
          </div>
        }
        <div className="field">
          <input
            name="email"
            className="input is-medium"
            type="email"
            required
            placeholder="Enter an email address"
            value={props.formData.email}
            onChange={props.handleFormChange}
          />
        </div>
        <div className="field">
          <input
            name="password"
            className="input is-medium"
            type="password"
            required
            placeholder="Enter a password"
            value={props.formData.password}
            onChange={props.handleFormChange}
          />
        </div>
        <input
          type="submit"
          className="button is-primary is-medium is-fullwidth"
          value="Submit"
        />
      </form>
    </div>
  )
};

export default Form;
