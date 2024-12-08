import Link from "next/link";
import "./error.css"

export default function ErrorPage() {
  return (
    <div className="errorPage">
      <h1>404</h1>
      <p>Beklenmeyen bir hata meydana geldi. Verdiğimiz rahatsızlıktan dolayı özür dileriz. Sayfayı yenilemeyi deneyebilir veya ana sayfaya dönebilirsiniz.</p>
      <Link href={"/"}>Anasayfaya dön!</Link>
    </div>
  )
}