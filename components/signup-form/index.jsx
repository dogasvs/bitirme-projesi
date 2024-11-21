import { signup } from "@/app/sign-up/action";

export default function SignupForm() {
  return (
    <form className="signupForm">
    <input id="name" name="name" type="text" placeholder="İsim" required />
    <input id="lastname" name="lastname" type="text" placeholder="Soyisim" required />
    <input id="email" name="email" type="email" placeholder="usermail@gmail.com" required />
    <input id="password" name="password" type="password" placeholder="*******" required />
    <button className="signUpBtn" formAction={signup}>Kayıt ol</button>
  </form>
  )
}