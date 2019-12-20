import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";

const UserForm = ({ values, errors, touched, status }) => {
  console.log("values");
  console.log("errors");
  console.log("touched");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("status has changed", status);

    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div>
      <Form>
        <label htmlFor="name">
          Name
          <Field id="name" type="text" name="name" placeholder="Name" />
        </label>
      </Form>
    </div>
  );
};

export default Form;
