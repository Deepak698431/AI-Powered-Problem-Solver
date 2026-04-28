"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a fragment or a simple div until the client is ready
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <CacheProvider>
      <ChakraProvider resetCSS={false}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}