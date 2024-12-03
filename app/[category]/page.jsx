"use server"
import { AddToCartButton } from "@/components/add-to-cart";
import { createClient } from "@/utils/supabase/server";
import "./category.css"
import Link from "next/link";
import LikeBtn from "../like-btn/page";

export default async function GetProductsCategories({ params }) {
  const { category } = params;
  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  const { data } = await supabase
    .from("categories")
    .select("*")
    .eq('slug', category)
    .single();

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq('category_id', data?.id);

  const productsWithLikes = await Promise.all(
    products.map(async (product) => {
      let postLike;

      if (user) {
        const { data: productLike } = await supabase
          .from("likes")
          .select("*")
          .eq("product_id", product.id)
          .eq("user_id", user.id)
          .single();

        postLike = productLike;
      }

      return {
        ...product,
        postLike,
      };
    })
  );

  console.log(category);

  return (
    <div className="categoryListContainer">
      <h1>{data.name.toUpperCase()}</h1>
      <div className="productsGrid">
        {productsWithLikes?.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <Link href={`/products/${product.id}`}>
                <img src={product.image_url} alt={product.name} />
              </Link>
              <div className="like-btn-container">
                <LikeBtn like={product.postLike} product_id={product.id} />
              </div>
            </div>
            <h3>{product.name}</h3>
            <p>Fiyat: {product.price} TL</p>
            <AddToCartButton productId={product.id} />
          </div>
        ))}
      </div>
    </div>
  )
}