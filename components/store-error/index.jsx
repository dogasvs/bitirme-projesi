import Image from "next/image";
import "./storeError.css"
import { createClient } from "@/utils/supabase/server";

export default async function ErrorStore({ store }) { 
  const supabase = await createClient();

  const { data: stores, error } = await supabase 
    .from('stores')
    .select('*')
    .eq("slug", store)
    .single();

  if (error) {
    return <div>Bir hata oluştu: {error.message}</div>;
  }

  return (
    <div className="storeError">
      <Image src={"/images/ringError.png"} alt="ring" width={250} height={250} priority />
      <h3>{store} mağazasında ürün bulunmamaktadır!</h3>
    </div>
  );
}
