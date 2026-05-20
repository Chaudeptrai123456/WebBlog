"use client";

import Hero from "@/app/components/user/Hero";
import BrandBar from "@/app/components/user/BrandBar";
import SectionIntro from "@/app/components/user/SectionIntro";
import ProductGrid from "@/app/components/user/ProductGrid";
import Testimonial from "@/app/components/user/Testimonial";
import SolarSystem from "@/app/components/user/components/SolarSystem";

import { usePathname } from "next/navigation";
import { useState } from "react";
import LuffyGear5 from "@/app/components/user/components/LuffyGear5";
import FeaturedPosts from "../components/user/FeaturedPosts ";
import LatestPosts from "../components/user/LatestPosts";
export default function UserPage() {
  const pathname = usePathname();
  const [activePlanet, setActivePlanet] = useState<number | null>(null);

  const posts = [1, 2, 3];

  return (
    <>
      {/* <LuffyGear5 /> */}
Admin nè
    </>
  );
}
