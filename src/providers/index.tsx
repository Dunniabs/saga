"use client";

import { ThemeProvider } from "@/providers/Theme";
import type React from "react";

function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
