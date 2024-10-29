/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Acknowledgments:
 * This code is derived from and inspired by Chakra UI.
 * Special thanks to the Chakra UI team for their outstanding work and open-source contributions.
 * Their implementation patterns and design principles have significantly influenced this code.
 *
 * Original source:
 * @see {@link https://github.com/chakra-ui/chakra-ui/blob/next/packages/system/src/forward-ref.tsx | @chakra-ui/system/src/forward-ref.tsx}
 *
 * Chakra UI - Copyright (c) 2019 Segun Adebayo
 * @license MIT
 */

import { forwardRef as reactForwardRef } from "react";

import type {
  As,
  ComponentWithAs,
  PropsOf,
  RightJoinProps,
} from "./react.types";

export function forwardRef<Component extends As, Props extends object>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >
) {
  return reactForwardRef(
    component as React.ForwardRefRenderFunction<any>
  ) as unknown as ComponentWithAs<Component, Props>;
}
