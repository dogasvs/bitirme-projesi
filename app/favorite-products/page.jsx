import { createClient } from "@/utils/supabase/server"
import "./favorites.css"
import { AddToCartButton } from "@/components/add-to-cart";
import Link from "next/link";
import Image from "next/image";

export default async function FavoritesProducts() {
  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (!user) {
    return <p>Lütfen giriş yapın.</p>;
  }

  const { data: likes, error: likesError } = await supabase
    .from('likes')
    .select("product_id, products(*)")
    .eq("user_id", user.id);

  return (
    <div className="favoritesProductContainer">
      <h1>Favori Ürünlerim</h1>
      <div className="favoriteProducts">
        {likes?.length > 0 ? (
          likes.map((x) => (
            <div key={x.product_id} className="favoriteProductCard">
              <Link href={`/products/${x.product_id}`}>
              <Image src={x.products.image_url} alt ={x.products.name} width={100} height={100} priority />
              </Link>
              <h3>{x.products.name}</h3>
              <p>Fiyat: {x.products.price} TL</p>
              <AddToCartButton productId={x.product_id} />
            </div>
          ))
        ) : (
          <p>Henüz bir ürünü beğenmediniz.</p>
        )}
      </div>
    </div>
  )
}