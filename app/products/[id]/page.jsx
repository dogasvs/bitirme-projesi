import { createClient } from "@/utils/supabase/server";
import "./productDetail.css"
import { AddToCartButton } from "@/components/add-to-cart";
import Image from "next/image";

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
        <Image src={product.image_url} alt ={product.name} width={300} height={600} priority />
        <div className="productInfo">
          <div className="productDetailDescrip">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Fiyat: <span> {product.price} TL </span> </p>
          </div>
          <div className="productAdd">
            <AddToCartButton productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
