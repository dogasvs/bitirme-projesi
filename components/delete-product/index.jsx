"use client";

import { createClient } from "@/utils/supabase/client";
import { revalidatePath } from "next/cache";

export function DeleteToCartButton({ productId }) {
  const DeleteToProduct = async () => {
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    const userId = user.id;

    const { error } = await supabase
      .from("cart")
      .delete()
      .eq("product_id", productId)
      .eq("user_id", userId);

      if (error) {
        alert("Ürün silinirken hata oluştu: " + error.message);
      } else {
        alert("Ürün başarıyla sepetteki kayıtlardan silindi!");
        revalidatePath('/cart-detail');
      }
  };

  return <button onClick={DeleteToProduct}>Sepetten sil</button>;
}
