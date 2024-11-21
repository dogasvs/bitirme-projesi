import "./login.css";

export default function LoginLayout({ children }) {
  return (
    <div className="loginbody">
      <div>
        {children}
      </div>
    </div>
  );
}
