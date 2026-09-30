"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { theme } from "../hooks/themeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // Collects Emotion styles into <head> during SSR so server and client HTML match
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
