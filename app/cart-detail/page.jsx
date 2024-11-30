import { DeleteToCartButton } from "@/components/delete-product";
import { createClient } from "@/utils/supabase/server"
import Link from "next/link";

export default async function CartDetail() {
  const supabase = await createClient();

  const { data: cart, error } = await supabase
  .from("cart")
  .select("*")

  const { data: products, error: productError } = await supabase
  .from("products")
  .select("*")
  .in("id", cart.map(item => item.product_id));

  return (
    <div className="cartDetail">
      {products?.map((product, index) => (
        <div key={index} className="cart">
          <img src={product.image_url} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Fiyat: {product.price} TL</p>
          <DeleteToCartButton productId={product.id} />
        </div>
      ))}
      <Link href="/checkout">
        <button>Sepeti Onayla</button>
      </Link>
    </div>
  )
}