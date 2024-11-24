import Image from "next/image";
import "./category.css"
import Link from "next/link";

export default function Category() {

  return (
    <div className="categoryContainer">
      <h1>Kategoriye göre alışveriş yapın</h1>
      <p>Takılarla Göz Kamaştır</p>
      <div className="categories">
       <Link href={'/kupe'}> 
        <div className="categoryItem">
          <Image src={"/images/earring.png"} width={249} height={276} priority alt="küpe resmi" />
          <p>Küpe</p>
        </div>
       </Link> 
       <Link href={'/kolye'}> 
      <div className="categoryItem">
        <Image src={"/images/necklace.png"} width={249} height={276} priority alt="kolye resmi" />
        <p>Kolye</p>
      </div>
      </Link> 
      <Link href={'/yuzuk'}> 
      <div className="categoryItem">
        <Image src={"/images/ring.png"} width={249} height={276} priority alt="yüzük resmi" />
        <p>Yüzük</p>
      </div>
      </Link> 
      <Link href={'/bileklik'}> 
      <div className="categoryItem">
        <Image src={"/images/bracelet.png"}width={249} height={276} priority alt="bilezik resmi" />
        <p>Bileklik</p>
      </div>
      </Link> 
      </div>
    </div>
  )
}