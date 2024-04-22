import {  Button, InputAdornment, Stack, TextField} from "@mui/material"
import { Person, Key } from "@mui/icons-material"
import { useState } from "react"


function LoginForm() {
  const [data, setData] = useState<any>(
    {
      username: "",
      password: "" 
    }  
  );
  return (
    <>
      <Stack>
          <TextField variant="outlined" label="Username" color={data.username ? "success" : "error"} InputProps={{
            startAdornment: <InputAdornment component={"div"} position="start"> <Person /> </InputAdornment>
          }}
          onChange={e => setData({...data,username: e.target.value})}/>
          
      </Stack>
      <Stack sx={{my: 3}}>
      <TextField variant="outlined" label="Password" color={data.password ? "success" : "error"} InputProps={{
            startAdornment: <InputAdornment component={"div"} position="start"> <Key /> </InputAdornment>
          }} 
          onChange={e => setData({...data,password: e.target.value})}/>
      </Stack>
      <Stack>
        <Button variant="contained" color="success">Login</Button>
      </Stack>
    </>
  )
}

export default LoginForm