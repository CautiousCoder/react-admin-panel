/*
 * Title: Admin Form
 *Description: Show Form
 *Author : MD. ZAHIDUL ISLAM
 *Description:  19/12/2023
 */

import { Box, Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import Header from "../Components/Header";

const initialValue = {
  firstName: "",
  lasttName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
const userSchema = yup.object().shape({
  firstName: yup.string().required("Field is Require."),
  lasttName: yup.string().required("Field is Require."),
  email: yup.string().email("Not like an Email").required("Field is Require."),
  contact: yup.string().required("Field is Require."),
  address1: yup.string().required("Field is Require."),
  address2: yup.string().required("Field is Require."),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubminClick = (value) => {
    console.log(value);
  };
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Header title="Form" text="This is Form page." />
      <Box m={"30px 30px 0px 30px"}>
        <Formik
          onSubmit={handleFormSubminClick}
          initialValues={initialValue}
          validationSchema={userSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display={"grid"}
                gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
                gap={"30px"}
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  value={values.firstName}
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  value={values.lasttName}
                  name="lasttName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.lasttName && !!errors.lasttName}
                  helperText={touched.lasttName && errors.lasttName}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact"
                  value={values.contact}
                  name="contact"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address 1"
                  value={values.address1}
                  name="address1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address 2"
                  value={values.address2}
                  name="address2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"right"}
                m={"16px 16px 0px 16px"}
              >
                {/* <button
                  type="submit"
                  style={{
                    padding: "10px 16px",
                    backgroundColor: colors.greenAccent[100],
                    boxShadow: `2px 2px 3px 2px ${colors.gary[100]}`,
                    textTransform: "capitalize",
                    fontSize: "16px",
                  }}
                >
                  Add New People
                </button> */}
                <Button type="submit" variant="contained" color="info">
                  Add New People
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
export default Form;
