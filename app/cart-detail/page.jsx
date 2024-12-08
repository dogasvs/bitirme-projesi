import { DeleteToCartButton } from "@/components/delete-product";
import { createClient } from "@/utils/supabase/server"
import Link from "next/link";
import "./cartDetail.css"
import Image from "next/image";

export default async function CartDetail() {
  const supabase = await createClient();

  const { data: cart, error } = await supabase
    .from("cart")
    .select("*")

  const { data: products, error: productError } = await supabase
    .from("products")
    .select("*")
    .in("id", cart.map(item => item.product_id));

  const totalPrice = products?.reduce((total, product) => {
    const cartItem = cart.find(item => item.product_id === product.id);
    return total + product.price * (cartItem?.quantity || 1);
  }, 0);


  return (
    <div className="cartDetail">
      <div className="cartContent">
        <div className="cartItems">
          <h1>Sipariş Detayı</h1>
          <hr />
          {products?.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="cart">
                <Image src={product.image_url} alt ={product.name} width={100} height={100} priority />
                <div className="cartInfo">
                  <div className="productInfo">
                    <h3>{product.name}</h3>
                    <p>Fiyat: {product.price} TL</p>
                  </div>
                  <div className="deleteBtn">
                    <DeleteToCartButton productId={product.id} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Sepetiniz şu anda boş.</p>
          )}
        </div>

        {products?.length > 0 && (
          <div className="cardTotalPrice">
            <h1>Sipariş Toplamı</h1>
            <hr />
            <p>Toplam Tutar: <span>{totalPrice.toFixed(2)} TL</span></p>
            <Link href="/checkout">
              <button className="checkoutButton">Sepeti Onayla</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
