import { createClient } from "@/utils/supabase/server"
import "./thanks.css"

export default async function ThanksforOrder() {
  const supabase = await createClient();

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false }) //ascending: false en yeni siparişler ilk sırada yer almasını sağlar ascending: true olsaydı, kayıtlar en eski tarihe göre sıralanırdı
    .limit(1)
    .single();

  const { data: orderItems, error: orderItemsError } = await supabase
    .from("order_items")
    .select("*")
    .eq("order_id", order.id);

  const productIds = orderItems.map(item => item.product_id);

  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("*")
    .in("id", productIds);

  return (
    <div className="thanks">
      <h1>Siparişiniz Tamamlandı!</h1>
      <h2>Sipariş Detayları</h2>
      <p>
        Sipariş Numarası: <strong>{order.id}</strong>
      </p>
      <p>
        Toplam Tutar: <strong>{order.total_price.toFixed(2)} TL</strong>
      </p>
      <ul>
        {orderItems.map((item) => {
          const product = products.find(x => x.id === item.product_id);
          return (
            <li key={item.id}>
              {product.name} - {item.quantity} x {item.price} TL
            </li>
          );
        })}
      </ul>
    </div>
  )
}