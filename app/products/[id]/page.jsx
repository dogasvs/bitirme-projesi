import { createClient } from "@/utils/supabase/server";
import "./productDetail.css"

export default async function ProductDetail({ params }) {
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error) {
    return <div>Hata: {error.message}</div>;
  }

  return (
    <div className="productDetail">
      <div className="productCart">
        <img src={product.image_url} alt={product.name} />
      <div className="productInfo">
      <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Fiyat: {product.price} TL</p>
      </div>
      </div>
    </div>
  );
}
