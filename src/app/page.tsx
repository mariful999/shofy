import Banner2 from "@/components/banner2/Banner2";
import Banner3 from "@/components/banner3/Banner3";
import FastCardSection from "@/components/card/FastCardSection";
import BottomHeader from "@/components/header/BottomHeader";
import Banner from "@/components/pages/home/Banner";
import Service from "@/components/service/Service";

export default function Home() {
  return (
    <main>
      <BottomHeader />
      <Banner />
      <FastCardSection></FastCardSection>
      <Service></Service>
      <Banner2></Banner2>
      <Banner3></Banner3>
    </main>

  );
}
