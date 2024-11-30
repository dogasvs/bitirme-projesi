import CTA from "@/components/call-to-action";
import Category from "@/components/category";
import HistoryPart from "@/components/history-part";
import StartShopping from "@/components/start-shopping";
import Stores from "@/components/stores";

export default function Home() {

  return (
    <div className="homepage">
      <StartShopping />
      <Category />
      <HistoryPart />
      <Stores />
      <CTA />
    </div>
  );
}
