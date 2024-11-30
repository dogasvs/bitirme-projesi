import LocationSvg from "@/svgs/konum";
import MailSvg from "@/svgs/mail";
import PhoneSvg from "@/svgs/phone";
import Image from "next/image";
import "./footer.css"
import Link from "next/link";
import InstagramSvg from "@/svgs/instagram";
import WhatsappSvg from "@/svgs/whatsapp";
import FacebookSvg from "@/svgs/facebook";
import MailSvgColorful from "@/svgs/mailcolorful";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerBrand">
        <div className="footerLogo">
          <Image src="/images/logo.png" alt="Gleamify Logo" width={50} height={50} priority />
          <h1>Gleamify</h1>
        </div>
        <p>Gleamify, takının zarafetini hayatınıza taşır. <br /> Her zevke uygun benzersiz takılarımızla,kendinizi ve sevdiklerinizi şımartın.</p>
        <div className="socialMedia">
          <Link href={"/"}> <InstagramSvg /> </Link>
          <Link href={"/"}> <WhatsappSvg /> </Link>
          <Link href={"/"}> <FacebookSvg /> </Link>
          <Link href={"/"}> <MailSvgColorful /> </Link>
        </div>
      </div>

      <div className="ıtem">
        <ul>
          <li><strong>Hakkımızda</strong></li>
          <li><Link href="/about">Hakkımızda</Link></li>
          <li><Link href="/">Hizmetlerimiz</Link></li>
          <li><Link href="/">Mağazalarımız</Link></li>
          <li><Link href="/">Basında Biz</Link></li>
        </ul>
      </div>
      <div className="ıtem">
        <ul>
          <li><strong>Müşteri Hizmetleri</strong></li>
          <li><Link href="/faq">Sıkça Sorulan Sorular</Link></li>
          <li><Link href="/">İade ve Değişim Politikası</Link></li>
          <li><Link href="/">Kargo ve Teslimat</Link></li>
          <li><Link href="/">Gizlilik Politikası</Link></li>
        </ul>
      </div>
      <div className="ıtemm">
        <ul>
          <li> <strong> İletişim</strong> </li>
          <li> <LocationSvg /> Wisconsin Ave, Suite 700
            Chevy Chase, Maryland 20815</li>
          <li> <MailSvg /> destek@gmail.com</li>
          <li> <PhoneSvg /> +90 500 000 0000</li>
        </ul>
      </div>
    </div>
  )
}