"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const screenshots = [
  { src: "/app-scan.jpg", alt: "Scan QR Code", label: "Scan QR Codes" },
  { src: "/app-ask.jpg", alt: "FAQ Selection", label: "Browse FAQs" },
  { src: "/app-chat.jpg", alt: "Live Chat", label: "Live Chat Support" },
  // add more images here
];

export default function AppShowcaseCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const speed = 0.8; // px per frame (adjust to control speed)
  const frame = useRef<any>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstSetWidth = track.scrollWidth / 2;

    const step = () => {
      offset.current -= speed;
      if (Math.abs(offset.current) >= firstSetWidth) {
        offset.current = 0; // reset after one full cycle
      }
      track.style.transform = `translateX(${offset.current}px)`;
      frame.current = requestAnimationFrame(step);
    };

    frame.current = requestAnimationFrame(step);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-24 h-24 bg-primary/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 glass-effect">
            <Smartphone className="w-4 h-4 mr-2" />
            App Preview
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Experience Hauskeeper in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how our app makes property communication seamless for guests
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl pb-[40px]">
          <div ref={trackRef} className="flex">
            {[...screenshots, ...screenshots].map((shot, i) => (
              <div key={i} className="flex-shrink-0 px-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={280}
                    height={600}
                    className="relative rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <p className="text-[12px] font-medium text-gray-800">
                      {shot.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}