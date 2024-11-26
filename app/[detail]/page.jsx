import { createClient } from "@/utils/supabase/server";

export default async function ProductDetail(params) {
  const detail = params;
  const supabase = await createClient();

  

  return (
    <div>
      
    </div>
  )
}