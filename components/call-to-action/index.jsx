import Link from "next/link"
import "./cta.css"

export default function CTA() {
  return (
    <div className="actionContainer">
      <h1>Kendi Mağazanızı Oluşturun</h1>
      <Link href={"/"}>Oluştur</Link>
    </div>
  )
}