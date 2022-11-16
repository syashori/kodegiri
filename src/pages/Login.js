import { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const SignIn = () => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.reload()
    }
    const LogOut = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        window.location.reload()
    }
  return (
    <>
        {localStorage.getItem("username") && (
            <div>
                <div>Selamat Datang</div>
                <button onClick={()=>LogOut()}>Logout</button>
            </div>
        )}

        {!localStorage.getItem("username") && (
            <div>
                <div><input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/></div>
                <div><input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/></div>
                <button onClick={()=>SignIn()}>Login</button>
            </div>
        )} 
    </>
  )
}

export default Login