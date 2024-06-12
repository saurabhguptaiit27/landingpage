import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

// Define light and dark themes
const lightTheme = {
  background: "#f5f5f5",
  text: "#333",
  inputBackground: "#fff",
  primary: "#007bff",
  primaryDark: "#0056b3",
  secondary: "#6c757d",
};

const darkTheme = {
  background: "#333",
  text: "#f5f5f5",
  inputBackground: "#444",
  primary: "#007bff",
  primaryDark: "#0056b3",
  secondary: "#6c757d",
};

// Styled components for the form
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    color: ${(props) => props.theme.text};
  }

  input[type="text"],
  input[type="email"],
  input[type="date"],
  textarea {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: ${(props) => props.theme.inputBackground};
    color: ${(props) => props.theme.text};
  }

  .error {
    color: red;
    font-size: 0.875rem;
    margin-top: 5px;
  }
`;

const FileInput = styled.input`
  display: block;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryDark};
  }
`;

const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.secondary};
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 20px;
  margin-right: 10px;
`;



const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  dob: Yup.date().required("Date of Birth is required"),
  bio: Yup.string().required("Bio is required"),
  profileImage: Yup.mixed().required("Profile Image is required"),
  bannerImage: Yup.mixed().required("Banner Image is required"),
});

const initialValues = {
  name: "",
  email: "",
  address: "",
  dob: "",
  bio: "",
  profileImage: null,
  bannerImage: null,
};

const ContactForm = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  const handleSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <ComponentContainer>
        <FormContainer>
          <ToggleButton onClick={toggleTheme}>
            Toggle Theme ({currentTheme === "light" ? "Dark" : "Light"})
          </ToggleButton>
          <ToggleButton>
            <Link to="/" >Go Back to Home</Link>
          </ToggleButton>
          <h1>Contact Us</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ setFieldValue }) => (
              <Form>
                <FormGroup>
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="address">Address</label>
                  <Field as="textarea" id="address" name="address" />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="dob">Date of Birth</label>
                  <Field type="date" id="dob" name="dob" />
                  <ErrorMessage name="dob" component="div" className="error" />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="bio">Bio</label>
                  <Field as="textarea" id="bio" name="bio" />
                  <ErrorMessage name="bio" component="div" className="error" />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="profileImage">Profile Image</label>
                  <FileInput
                    type="file"
                    id="profileImage"
                    name="profileImage"
                    onChange={(event) =>
                      setFieldValue(
                        "profileImage",
                        event.currentTarget.files[0]
                      )
                    }
                  />
                  <ErrorMessage
                    name="profileImage"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="bannerImage">Banner Image</label>
                  <FileInput
                    type="file"
                    id="bannerImage"
                    name="bannerImage"
                    onChange={(event) =>
                      setFieldValue("bannerImage", event.currentTarget.files[0])
                    }
                  />
                  <ErrorMessage
                    name="bannerImage"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                <SubmitButton type="submit">Submit</SubmitButton>
              </Form>
            )}
          </Formik>
        </FormContainer>
      </ComponentContainer>
    </ThemeProvider>
  );
};

export default ContactForm;
