"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function Checkout() {
  const [step, setStep] = useState(1); 
  const [address, setAddress] = useState(""); 
  const [cardInfo, setCardInfo] = useState(""); 
  const [cartItems, setCartItems] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0); 
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchCartItems = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      const { data: cart, error } = await supabase
        .from("cart")
        .select("*")
        .eq("user_id", user.id);
      if (error) {
        console.log("Sepet verileri alınırken hata oluştu:", error.message);
      } else {
        setCartItems(cart);
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);
      }
    };
    fetchCartItems();
  }, []);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    // Sipariş ekle
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert([
        {
          user_id: user.id,
          address: address,
          total_price: totalPrice,
          status: "Onaylandı",
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    // order_items ekle
    const orderItems = cartItems.map((item) => ({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.price,
      total_price: item.price * item.quantity,
    }));

    const { error: orderItemsError } = await supabase
      .from("order_items")
      .insert(orderItems);

    // Sepeti temizle
    const { error: clearCartError } = await supabase
      .from("cart")
      .delete()
      .eq("user_id", user.id);

    alert("Siparişiniz başarıyla onaylandı!");
    router.push("/thank-you");
  };

  return (
    <div className="checkoutPage">
      <h1>Ödeme ve Adres Bilgileri</h1>

      {step === 1 && (
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Adres:
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <button type="button" onClick={() => setStep(2)}>İlerle</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOrderSubmit}>
          <label>
            Kart Bilgileri:
            <input
              type="text"
              value={cardInfo}
              onChange={(e) => setCardInfo(e.target.value)}
              required
            />
          </label>
          <p>Toplam Fiyat: {totalPrice} TL</p>
          <button type="button" onClick={() => setStep(1)}>Geri</button>
          <button type="submit">Ödemeyi Tamamla</button>
        </form>
      )}
    </div>
  );
}
