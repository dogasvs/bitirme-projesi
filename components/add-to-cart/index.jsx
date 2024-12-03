"use client";

import { createClient } from "@/utils/supabase/client";

export function AddToCartButton({ productId }) {
  const addToCart = async () => {
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    const userId = user.id;

    const { data: product, error: productError } = await supabase
    .from("products")
    .select("price")
    .eq("id", productId)
    .single(); 

    const { error } = await supabase
      .from("cart") 
      .insert([
      { user_id: userId, product_id: productId, quantity: 1, price: product.price  }]);
      window.location.reload();
  };

  return <button onClick={addToCart}>Sepete Ekle</button>;
}
