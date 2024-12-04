"use client";

import CloseSvg from "@/svgs/close";
import TrashSvg from "@/svgs/trash";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export function DeleteToCartButton({ productId }) {
  const [showModal, setShowModal] = useState(false);

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
        window.location.reload();
      }
  };

  return (
    <>
    <button onClick={() => setShowModal(true)}> <TrashSvg /> </button>

    {showModal && (
      <div className="modalBackdrop">
        <div className="modalContent">
          <div className="title">
            <h3>Ürün sepetinizden silinecek! Onaylıyor musunuz?</h3>
            <button onClick={() => setShowModal(false)}> <CloseSvg /> </button>  
          </div>
          <div className="modalActions">
            <button onClick={() => setShowModal(false)}>Hayır</button>
            <button onClick={DeleteToProduct}>Evet</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
