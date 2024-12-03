"use server"

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function AddLike(prevState, formData) {

  const supabase = await createClient();
  const { data: {user} } = await supabase.auth.getUser();

  const productId = formData.get("productId");
  
  const {data: postLike, error } = await supabase
    .from('likes')
    .select('*')
    .eq('product_id', productId)
    .eq('user_id', user.id)
    .single();

    if (postLike) {
      const {data: likedPost, error } = await supabase
        .from('likes')
        .delete()
        .eq('product_id', productId)
        .eq('user_id', user.id); 
    } else {
      const {data: doa, error } = await supabase
        .from('likes')
        .insert( {user_id: user.id, product_id: productId} );
    }

    console.log("prody", productId);
    revalidatePath('/');
}