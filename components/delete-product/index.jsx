"use client";

import TrashSvg from "@/svgs/trash";
import { createClient } from "@/utils/supabase/client";

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
        window.location.reload();
      }
  };

  return <button onClick={DeleteToProduct}> <TrashSvg /> </button>;
}
