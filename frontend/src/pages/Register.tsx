import {  Grid } from "@mui/material"
import RegisterForm from "../forms/RegisterForm"

function Register() {
  return (
    <Grid container direction={"column"} alignItems={"center"} justifyContent={"center"} sx={[{minHeight: "100vh"}]}>

        <Grid>
            <RegisterForm />
        </Grid>

    </Grid>
  )
}

export default Register