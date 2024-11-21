import CTA from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
const supabase = await createClient();
  const { data, error } = await supabase
  .from('stores')
  .select()

  console.log("data",data);

  return (
   <div className="homepage">
      {data?.map((x, i) => (
        <div className="stores" key={i}>
          <p>{x.name}</p>
        </div>
      ))}
      <CTA />
   </div>
  );
}
