"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { navItems } from "@/data/portfolio";

export default function RoutePrefetcher() {
  const router = useRouter();

  useEffect(() => {
    const prefetchRoutes = () => {
      navItems.forEach((item) => {
        try {
          router.prefetch(item.href);
        } catch {
          // ignore prefetch errors
        }
      });
    };

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(prefetchRoutes, { timeout: 1500 });
      } else {
        setTimeout(prefetchRoutes, 150);
      }
    }
  }, [router]);

  return null;
}
