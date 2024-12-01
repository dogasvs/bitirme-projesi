import Image from "next/image";
import "./history.css"

export default function HistoryPart() {
  return (
    <div className="historyContainer">
      <Image src={"/images/shine.png"} width={500} height={500} alt="vintage kolye" priority />
      <div className="historyPartInfo">
        <h2>'Sizin Hikayeniz, Sizin Takınız'</h2>
        <p>Takılar, sadece bir süs eşyası değil; aynı zamanda geçmişi hatırlatan, duygularımızı ifade eden ve anılarımıza eşlik eden <br /> önemli birer parçadır. Geçmişin ihtişamından ilham alan, bugünün zarafetiyle şekillenen ve geleceğe ışık tutan takılarla <br /> siz de kendi hikayenizi yazabilirsiniz.</p>
      </div>
    </div>
  )
}