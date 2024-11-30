"use server"
import { AddToCartButton } from "@/components/add-to-cart";
import { createClient } from "@/utils/supabase/server";
import "./category.css"

export default async function GetProductsCategories({params}) {
  const { category } = params;
  const supabase = await createClient();

  const { data } = await supabase
  .from("categories")
  .select("*")
  .eq('slug', category).single();
  
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq('category_id', data?.id);

  return (
    <div>
    <h1>{category.toUpperCase()}</h1>
    <div className="products-grid">
      {products?.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image_url} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <AddToCartButton productId={product.id} />
        </div>
      ))}
    </div>
  </div>
  )
}