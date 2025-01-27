import { createContext, useContext, useMemo, useCallback } from "react";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import { IconButton, Skeleton } from "@chakra-ui/react";
import { ClientOnly } from "@chakra-ui/react";

export interface ColorModeProviderProps extends ThemeProviderProps {}

const ColorModeContext = createContext<{
  colorMode: string;
  toggleColorMode: () => void;
} | null>(null);

export function ColorModeProvider({ children, ...props }: ColorModeProviderProps) {
  return (
    <NextThemeProvider attribute="class" disableTransitionOnChange {...props}>
      <ColorModeProviderInternal>{children}</ColorModeProviderInternal>
    </NextThemeProvider>
  );
}

function ColorModeProviderInternal({ children }: { children: React.ReactNode }) {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleColorMode = useCallback(() => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }, [resolvedTheme, setTheme]);

  const value = useMemo(
    () => ({ colorMode: resolvedTheme || "light", toggleColorMode }),
    [resolvedTheme, toggleColorMode]
  );

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return useMemo(() => (colorMode === "light" ? light : dark), [colorMode, light, dark]);
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return useMemo(() => (colorMode === "light" ? <LuSun /> : <LuMoon />), [colorMode]);
}

export const ColorModeButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  );
};
