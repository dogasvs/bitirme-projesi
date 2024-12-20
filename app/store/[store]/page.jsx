import { AddToCartButton } from "@/components/add-to-cart";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import "./store.css"
import LikeBtn from "@/app/like-btn/page";
import Image from "next/image";
import ErrorStore from "@/components/store-error";

export default async function GetProductofStore({ params }) {
  const { store } = params;
  const supabase = await createClient();

  const { data: { user }, error: userError } = await supabase.auth.getUser();

  const { data: stores, error } = await supabase
    .from("stores")
    .select("*")
    .eq("slug", store)
    .single();

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("store_id", stores.id);

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

  return (
    <div className="storeContainer">
      <h1>{store} Mağazası</h1>
      
      {/* Ürün yoksa hata mesajı */}
      {productsWithLikes.length === 0 ? (
        <div className="errorContainer">
          <ErrorStore store={store} />
        </div>
      ) : (
        <div className="storeGrid">
          {productsWithLikes.map((product) => (
            <div key={product.id} className="productCard">
              <div className="image-container">
                <Link href={`/products/${product.id}`}>
                  <Image src={product.image_url} alt={product.name} width={300} height={400} priority />
                </Link>
                <div className="likeBtnContainer">
                  <LikeBtn like={product.postLike} product_id={product.id} />
                </div>
              </div>
              <div className="productInfo">
                <h3>{product.name}</h3>
                <p>Fiyat: {product.price} TL</p>
              </div>
              <AddToCartButton productId={product.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}