import { createClient } from "@/utils/supabase/server"
import "./orders.css"
import Link from "next/link";

export default async function OrdersPage() {
  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  const { data, error } = await supabase
  .from("order_items")
  .select("product_id, total_price, products(*)")
  .eq("user_id", user.id);

  return (
    <div className="ordersContainer">
    <h1>Siparişlerim</h1>
    <div className="orders">
    {data?.length > 0 ? (
      data.map((x) => (
        <div key={x.order_id} className="ordersProductCard">
          <Link href={`/products/${x.product_id}`}>
            <img src={x.products.image_url} alt={x.products.name} />
          </Link>
          <div className="ordersPrice">
            <h3>{x.products.name}</h3>
            <p>Fiyat: {x.products.price} TL</p>
          </div>
          <p>Toplam Tutar: {x.total_price} TL</p>
        </div>
      ))
    ) : (
      <p>Henüz kayıtlı siparişleriniz bulunmamakta</p>
    )}
    </div>
  </div>
  )
}