import { createClient } from "@/utils/supabase/server";
import "./stores.css"
import Image from "next/image";

export default async function Stores() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('stores')
    .select()

  console.log("dataa", data);

  return (
    <div className="storesContainer">
      {data?.map((x, i) => (
        <div className="card" key={i}>
          {x.store_img && 
          <Image src={x.store_img} alt={x.name} width={300} height={200} className="storeImage"  /> }
          <div className="cardInfo">
            <h4> {x.name} </h4>
            <p>{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}