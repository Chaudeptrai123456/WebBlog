"use client";

import Hero from "@/app/components/user/Hero";
import BrandBar from "@/app/components/user/BrandBar";
import SectionIntro from "@/app/components/user/SectionIntro";
import ProductGrid from "@/app/components/user/ProductGrid";
import Testimonial from "@/app/components/user/Testimonial";
import Footer from "../components/user/Footer";

export default function UserPage() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <BrandBar />
      </div>
      <div>
        <SectionIntro />
      </div>
      <div>
        <ProductGrid />
      </div>
      <div>
        <Testimonial />
      </div>
    </>
  );
}
