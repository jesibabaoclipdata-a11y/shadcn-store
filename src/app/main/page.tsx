import HeroSectionPage from "@/app/hero-section-41/page";
import ProductListingPage from "@/app/product-listing-01/page";
import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108";
import { FeatureBento } from "@/components/feature-bento";


import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Sidebar } from "lucide-react";


export default function MainPage() {

    return(
        <>

        <HeroSectionPage/>
        <Feature108/>
        <BentoGrid/>
        <ProductListingPage/>
        </>
    )



}