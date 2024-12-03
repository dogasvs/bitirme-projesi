"use client";

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import "./addToCart.css"
import { useState } from "react";
import CloseSvg from "@/svgs/close";

export function AddToCartButton({ productId }) {
  const [showModal, setShowModal] = useState(false);

  const addToCart = async () => {
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    const userId = user.id;

    const { data: product, error: productError } = await supabase
    .from("products")
    .select("price")
    .eq("id", productId)
    .single(); 

    const { data: cart, error: cartError } = await supabase
      .from("cart") 
      .insert([
      { user_id: userId, product_id: productId, quantity: 1, price: product.price  }]);

      if (cartError) {
        console.log("Sepete ekleme sırasında bir hata oluştu.");
      } else {
        setShowModal(true); 
      }
  };

  return (
    <>
      <button className="addtoCart" onClick={addToCart}>
        Sepete Ekle
      </button>

      {showModal && (
        <div className="modalBackdrop">
          <div className="modalContent">
            <div className="title">
              <h3>Ürün sepete eklendi!</h3>
              <button onClick={() => setShowModal(false)}> <CloseSvg /> </button>  
            </div>
            <div className="modalActions">
              <button onClick={() => setShowModal(false)}>Alışverişe Devam Et</button>
              <Link href="/cart-detail">
                <button>Sepete Git</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
