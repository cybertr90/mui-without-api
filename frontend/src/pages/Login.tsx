import {  Grid } from "@mui/material"
import LoginForm from "../forms/LoginForm"

function Login() {
  return (
    <Grid container direction={"column"} alignItems={"center"} justifyContent={"center"} sx={[{minHeight: "100vh"}]}>

        <Grid>
            <LoginForm />
        </Grid>

    </Grid>
  )
}

export default Login