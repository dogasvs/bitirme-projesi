import UserSvg from "@/svgs/user";
import "./dropdown.css"
import SignOut from "@/app/sign-up/action";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function DropdownUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="dropdown">
      <button className="dropbtn"> <UserSvg /> </button>
      <div className="dropdown-content">
        {user ? (
          <form action={SignOut} className="profileContent">
            <Link href={"/orders"}>Siparişlerim</Link>
            <Link href={"/favorite-products"}>Favari Listem</Link>
            <button>Çıkış Yap</button>
          </form>
        ) : (
          <div>
            <Link href={"/login"}>Giriş Yap</Link>
            <Link href={"/sign-up"}>Kayıt Ol</Link>
          </div>
        )} 
      </div>
    </div>
  )
}