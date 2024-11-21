import Footer from "@/components/footer";
import Header from "@/components/header";
import "./about.css"

export default function AboutPage() {
  return (
    <div className="aboutPageContainer">
      <Header />
      <div className="about">
        <h1>HAKKIMIZDA</h1>
        <p>
          Her şey, bir takıya dokunmanın insanları nasıl değiştirebileceğine olan inancımızla başladı. Küçük bir atölyede, ellerimizle şekillendirdiğimiz ilk yüzüğü tasarladığımızda, takının sadece bir aksesuar değil, aynı zamanda bir duygu ve anlam taşıdığını fark ettik. İşte o gün, insanların kendi hikayelerini anlatabilecekleri zarif ve özgün takılar üretme hayaliyle bu yolculuğa çıktık.
        </p>
        <p>
          Zamanla, yerel bir tasarım atölyesi olmaktan çıkıp, herkesin kendine has bir parça bulabileceği bir mağaza haline geldik. Her koleksiyonumuz, modern çizgiler ve geleneksel el işçiliğini bir araya getirerek, geçmişin güzelliklerinden ilham alır ve geleceğe taşır. Bu yaklaşım, bizi her zaman benzersiz ve zamansız takılar yaratmaya teşvik etti.
        </p>
        <p>
          Müşterilerimizin memnuniyeti, bizim için her zaman birinci öncelik oldu. Takılarımız sadece birer ürün değil; onları takan herkesin kimliğini, ruhunu ve hikayesini yansıtan birer sanat eseri. Sizlere sunduğumuz her tasarım, en ince ayrıntısına kadar özenle hazırlanır ve kalite standartlarımızdan ödün verilmez.✨
        </p>
      </div>
      <Footer />
    </div>
  )
}