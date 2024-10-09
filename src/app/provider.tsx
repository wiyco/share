"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

/** @see {@link https://nextui.org/docs/guide/installation#manual-installation} */
/** @see {@link https://github.com/pacocoursey/next-themes} */

export function Provider(props: {
  children: React.ReactNode;
  nextThemeProviderProps?: Omit<
    React.ComponentProps<typeof NextThemeProvider>,
    "children"
  >;
}) {
  return (
    <NextThemeProvider {...props.nextThemeProviderProps}>
      {props.children}
    </NextThemeProvider>
  );
}
