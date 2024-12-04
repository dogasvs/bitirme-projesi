import "./kargo.css"

export default function KargoVeDegisimSayfasi() {
  return (
    <div className="kargoContainer">
      <h1>Kargo ve Teslimat Politikası</h1>
      <p>Müşterilerimize en iyi hizmeti sunmak adına kargo ve teslimat süreçlerimizle ilgili tüm detayları aşağıda bulabilirsiniz. Siparişlerinizin en hızlı ve güvenilir şekilde size ulaştırılması bizim önceliğimizdir.</p>
      <ol>
        <li>Sipariş İşleme Süresi</li>
        <ul>
          <li>Siparişleriniz, ödeme onayından sonra 1-3 iş günü içerisinde hazırlanır ve kargoya teslim edilir. </li>
          <li>Hafta sonları ve resmi tatillerde verilen siparişler, takip eden ilk iş günü işleme alınır. </li>
        </ul>
        <li>Teslimat Süresi</li>
        <ul>
          <li>Türkiye içindeki teslimatlar, siparişiniz kargoya verildikten sonra 1-5 iş günü içinde tamamlanır. </li>
          <li>Kırsal veya uzak bölgelerde teslimat süreleri değişiklik gösterebilir. </li>
          <li>Yurt dışı gönderimler için teslimat süreleri kargo firmasına ve alıcı ülkenin prosedürlerine bağlı olarak değişiklik gösterebilir.</li>
        </ul>
        <li>Kargo Ücretleri</li>
        <ul>
          <li><span>Standart Kargo: </span> 500 TL ve üzeri alışverişlerde ücretsizdir. 500 TL altındaki siparişler için sabit bir kargo ücreti alınır</li>
          <li><span>Hızlı Teslimat:</span> Ekstra ücret karşılığında hızlı teslimat seçeneğinden faydalanabilirsiniz.</li>
          <li>Yurt dışı gönderim ücretleri, teslimat bölgesine ve paketin ağırlığına göre belirlenir.</li>
        </ul>
        <li>Kargo Takibi</li>
        <p>Siparişiniz kargoya verildiğinde, tarafınıza bir takip numarası gönderilecektir.Kargo takip bilgilerinizi, kargo firmasının web sitesi üzerinden takip edebilirsiniz.</p>
        <li> Teslimat Şartları</li>
        <p>Teslimat sırasında lütfen paketinizi kontrol edin. Hasar görmüş veya açılmış bir paketle karşılaşmanız durumunda, kargo yetkilisine tutanak tutturmanız ve bizimle iletişime geçmeniz gerekmektedir. Siparişinizi teslim alırken kimlik veya imza talep edilebilir.</p>
         <li>Adres Değişikliği</li>
          <p>Sipariş verdikten sonra adres değişikliği yapmak isterseniz, siparişiniz kargoya verilmeden önce müşteri hizmetlerimizle iletişime geçmeniz gerekmektedir.Kargoya teslim edilmiş siparişlerde adres değişikliği yapılamamaktadır.</p>
        <li>Teslim Edilemeyen Siparişler</li>
        <p>Teslim edilemeyen siparişler, kargo firması tarafından tarafımıza geri gönderilir. Bu durumda, size ulaşarak siparişinizi yeniden göndermek için bir adres teyidi alınır. Yeniden gönderim için ek kargo ücreti talep edilebilir.</p>
      </ol>
    </div>
  )
}