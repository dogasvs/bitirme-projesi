import { login } from "@/app/login/action";
import Password from "@/svgs/password";
import Username from "@/svgs/username";

export default function LoginForm() {
  return (
    <form className="loginForm">
      <input id="email" className="username" name="email" type="email" required />
      <Username  />
      <input id="password" className="password"  name="password" type="password" required />
      <Password  />
      <button className="loginBtn" formAction={login}>Giriş yap</button>
    </form>
  )
}