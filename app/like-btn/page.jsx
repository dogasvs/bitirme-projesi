"use client"
import { AddLike } from "./action";
import { useFormState } from "react-dom";
import { useState } from "react";
import DoluLike from "@/svgs/doluLike";
import LikeSvg from "@/svgs/like";

export default function LikeBtn({product_id, like}) {
  const [state, action] = useFormState(AddLike, {message: null, error: null});
  const [isLiked, setIsLiked] = useState(!!like);

  const handleLikeClick = () => {
    setIsLiked(!isLiked); 
  };

  console.log("like",isLiked);

  return (
    <>
      <form action={action}>
        <input type="hidden" name="productId" value={product_id} />
        <button onClick={handleLikeClick}>
            {isLiked ? <DoluLike  /> :  <LikeSvg  />}
          </button>
      </form>
    </>
  )
}