import { createClient } from "@/utils/supabase/server";
import "./stores.css"
import Image from "next/image";
import Link from "next/link";

export default async function Stores() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('stores')
    .select('*')

  return (
    <div className="storesContainer">
      {data?.map((x, i) => (
         <Link href={`/store/${x.slug}`} key={i}>
        <div className="card" key={x.id}>
          {x.store_img && 
          <Image src={x.store_img} alt={x.name} width={300} height={200} className="storeImage"  /> }
          <div className="cardInfo">
            <h1> {x.name} </h1>
            <h3>{x.description}</h3>
          </div>
        </div>
         </Link>
      ))}
    </div>
  )
}