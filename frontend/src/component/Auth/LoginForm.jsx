import React from 'react'
import { Formik, Field, Form } from 'formik'
import { TextField, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    email: "",
    password: ""
}

export default function LoginForm() {
    const navigate = useNavigate()

    const handleSubmit = (values) => {
        console.log("login values", values)
    }

    return (
        <div>

            <Typography variant='h5' className='text-center'>
                Login
            </Typography>

            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>

                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <Button
                        sx={{ mt: 2, padding: "1rem" }}
                        fullWidth
                        type='submit'
                        variant='contained'
                    >
                        Login
                    </Button>

                </Form>
            </Formik>

            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Don't have an account?
                <Button size='small' onClick={() => navigate("/account/register")}>
                    Register
                </Button>
            </Typography>

        </div>
    )
}