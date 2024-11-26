import { AddToCartButton } from "@/components/add-to-cart";
import { createClient } from "@/utils/supabase/server";

export default async function GetProductofStore({params}) {
  const {store} = params;
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
    <div>
      <h1>{store} Mağazası</h1>
      <div className="products-grid">
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Fiyat: {product.price} TL</p>
            <AddToCartButton productId={product.id} />
          </div>
        ))}
      </div>
    </div>
  )
}