import { AddToCartButton } from "@/components/add-to-cart";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import "./store.css"

export default async function GetProductofStore({ params }) {
  const { store } = params;
  const supabase = await createClient();

  const { data: stores, error } = await supabase
    .from("stores")
    .select("*")
    .eq("slug", store).single();

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("store_id", stores.id);


  return (
    <div className="storeContainer">
      <h1>{store} Mağazası</h1>
      <div className="storeGrid">
        {products?.map((product) => (
          <div key={product.id} className="productCard">
            <Link href={`/products/${product.id}`}>
              <img src={product.image_url} alt={product.name} />
            </Link>
            <div className="productInfo">
              <h3>{product.name}</h3>
              <p>Fiyat: {product.price} TL</p>
            </div>
            <AddToCartButton productId={product.id} />
          </div>
        ))}
      </div>
    </div>
  )
}