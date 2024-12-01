import Image from "next/image";
import "./header.css"
import DropdownUser from "../dropdown";
import AlisverisSepetiSvg from "@/svgs/basket";
import SearchSvg from "@/svgs/search";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function Header() {
  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  const { data: cartItems, error: cartError } = await supabase
    .from("cart")
    .select("quantity")
    .eq("user_id", user.id);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="headerContainer">
      <div className="headerBrand">
        <Image src="/images/logo.png" alt="Gleamify Logo" width={50} height={50} priority />
        <Link href={"/"}>  <h1>Gleamify</h1> </Link>
      </div>
      <div className="profile">
        <SearchSvg />
        <DropdownUser />
        <Link href={'/cart-detail'} className="cartLink">
          <AlisverisSepetiSvg />
          <span className="cartBadge">{cartCount}</span>
        </Link>
      </div>
    </div>
  )
}