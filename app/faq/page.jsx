import Footer from "@/components/footer";
import Header from "@/components/header";
import "./faq.css"
import DiamondSvg from "@/svgs/diamond";

export default function FAQ() {
  return (
    <div className="faqContainer">
      <Header />
      <div className="faq">
        <details>
          <summary>Siparişimi nasıl takip edebilirim?  <DiamondSvg /></summary>
          <p>Siparişinizin durumu hakkında bilgi almak için hesabınıza giriş yaparak "Siparişlerim" sekmesini ziyaret edebilir veya size gönderilen <br /> takip numarasını kullanarak kargo firması üzerinden takip yapabilirsiniz.</p>
        </details>
        <hr />
        <details>
          <summary>İade ve değişim süreci nasıl işler?  <DiamondSvg /></summary>
          <p>Ürünlerimizi teslim aldıktan sonra 14 gün içerisinde iade veya değişim talebinde bulunabilirsiniz. <br /> Ürünlerin kullanılmamış ve orijinal ambalajında olması gerekmektedir. Daha fazla bilgi için "İade ve Değişim Politikası" sayfamızı inceleyebilirsiniz.</p>
        </details>
        <hr />
        <details>
          <summary>Özel tasarım siparişleri nasıl verilir?  <DiamondSvg /></summary>
          <p>Size özel tasarımlar oluşturmak için bizimle iletişime geçebilirsiniz. Taleplerinizi mağazalarımızda ya da online form aracılığıyla <br /> iletebilirsiniz. Tasarım sürecimiz, ihtiyaçlarınıza göre şekillenir ve size özgü bir ürün ortaya çıkar.</p>
        </details>
        <hr />
        <details>
          <summary>Hangi ödeme yöntemlerini kabul ediyorsunuz?  <DiamondSvg /></summary>
          <p>Kredi kartı, banka kartı, kapıda ödeme ve online ödeme sistemlerini kullanabilirsiniz. Ödeme seçeneklerimiz güvenli ve hızlıdır.</p>
        </details>
        <hr />
        <details>
          <summary>Takılarımın bakımını nasıl yapabilirim?  <DiamondSvg /></summary>
          <p>Takılarınızı uzun süre kullanabilmek için düzenli olarak temizleyin ve kimyasallardan uzak tutun. Daha detaylı bilgi ve profesyonel bakım <br /> için mağazalarımızı ziyaret edebilirsiniz.</p>
        </details>
        <hr />
        <details>
          <summary>Siparişlerim ne kadar sürede teslim edilir?  <DiamondSvg /></summary>
          <p>Siparişlerimiz genellikle 2-5 iş günü içerisinde teslim edilir. Özel tasarımlar ve kişiselleştirilmiş ürünler için teslimat süresi farklılık <br /> gösterebilir.</p>
        </details>
        <hr />
        <details>
          <summary>Size nasıl ulaşabilirim? <DiamondSvg /></summary>
          <p>Bizimle iletişim sayfamız üzerinden ya da mağazalarımızı ziyaret ederek kolayca iletişime geçebilirsiniz.</p>
        </details>
      </div>
      <Footer />
    </div>
  )
}