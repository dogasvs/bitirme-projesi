"use client";

import { useState, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import "./checkout.css"

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
        redirect("/error")
      } else {
        setCartItems(cart);
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);
      }
    };
    fetchCartItems();
  }, [supabase]);

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
    router.push("/thanks");
  };

  return (
    <div className="checkoutPage">
      <h1>Ödeme ve Adres Bilgileri</h1>

      {step === 1 && (
        <div className="checkoutContainer">
          <form onSubmit={(e) => e.preventDefault()} className="adressForm">
            <div className="nameRow">
              <label>
                Ad:
                <input required />
              </label>
              <label>
                Soyad:
                <input required />
              </label>
            </div>
            <label>
              Telefon Numarası:
              <input required type="tel" />
            </label>
            <label>
              E-posta Adresi:
              <input required type="email" />
            </label>
            <label>
              Adres:
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
          </form>

          <div className="cardTotalPrice">
            <h1>Sipariş Toplamı</h1>
            <hr />
            <div className="totalPrice">
              <p>Toplam Tutar:</p>
              <h3>{totalPrice.toFixed(2)} TL</h3>
            </div>
            <button type="button" onClick={() => setStep(2)}>Ödemeye Devam Et</button>
          </div>
        </div>

      )}

      {step === 2 && (
        <div className="paymentContainer">
          <form onSubmit={handleOrderSubmit} className="cartForm">
            <label>
              Kart Numarası:
              <input
                type="text"
                value={cardInfo}
                onChange={(e) => setCardInfo(e.target.value)}
                placeholder="Kart numaranızı girin"
                required
              />
            </label>
            <div className="cardDetails">
              <label>
                Son Kullanma Tarihi:
                <input
                  type="text"
                  placeholder="MM/YY"
                  required
                />
              </label>
              <label>
                CVV:
                <input
                  type="text"
                  placeholder="CVV"
                  required
                />
              </label>
            </div>
            <label>
              Kart Sahibinin Adı:
              <input
                type="text"
                placeholder="Kart sahibinin adı"
                required
              />
            </label>
          </form>

          <div className="cardTotalPrice">
            <h1>Sipariş Özeti</h1>
            <hr />
            <div className="totalPrice">
              <p>Toplam Tutar:</p>
              <h3>{totalPrice.toFixed(2)} TL</h3>
            </div>
            <button type="submit" onClick={handleOrderSubmit}>Ödemeyi Tamamla</button>
          </div>
        </div>
      )}
    </div>
  );
}
