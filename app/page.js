"use client";
import Banner from "@/components/sections/HomePage/Banner";
import Header from "@/components/Header";

import WhoWeAre from "@/components/sections/HomePage/WhoWeAre";
import OurMission from "@/components/sections/HomePage/OurMission";
import OurPrinciples from "@/components/sections/HomePage/OurPrinciples";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic'


export default function Home() {

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});
  return (
    <main className="">
      <AnimatedCursor
      innerSize={10}
      outerSize={8}
      color='204, 30, 20'
      outerAlpha={1.2}
      innerScale={1.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Header color={'#F6E84E'}/>
      <Banner />
      <WhoWeAre />
      <OurMission />
      <OurPrinciples />
      <Footer/>
      {/* <OurApproach /> */}
    </main>
  );
}
