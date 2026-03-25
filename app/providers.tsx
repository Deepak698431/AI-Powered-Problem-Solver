"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      {/* resetCSS={false} prevents Chakra from overwriting Tailwind's base styles */}
      <ChakraProvider resetCSS={false}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}