"use client"

import { AnimatedPinDemo } from "./3DPin/AnimatedPinDemo";
import { AnimatedTooltipPreview } from "./AnimatedTooltip/AnimatedTooltipPreview";

export function Heading() {
  return (
  <div className="flex  flex-col items-center  md:flex-row md:pt-0 pt-12 justify-between ">
  <div className="flex flex-col gap-7">
    <h1 className=" text-4xl font-extrabold md:text-6xl">Pioneering Brand Trust <br/> through  Seamless QR <br/> Generation & <br/>Product Verification</h1>
    <p className="  text-lg text-neutral-500  md:text-xl">Scan your purchase Brand qr-code or create your brand qr without <br/>having to worry about Authentications and verifications. </p>
    <AnimatedTooltipPreview/>
  </div>
  <div>
    <AnimatedPinDemo/>
  </div>
  </div>);
}