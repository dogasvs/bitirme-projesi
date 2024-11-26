import Image from "next/image";
import "./header.css"
import DropdownUser from "../dropdown";
import AlisverisSepetiSvg from "@/svgs/basket";
import SearchSvg from "@/svgs/search";
import Link from "next/link";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerBrand">
        <Image src="/images/logo.png" alt="Gleamify Logo" width={50} height={50} />
        <Link href={"/"}>  <h1>Gleamify</h1> </Link>
      </div>
      <div className="profile">
        <SearchSvg />
        <DropdownUser />
        <Link href={'/cart-detail'}>
          <AlisverisSepetiSvg />
        </Link>
      </div>
    </div>
  )
}