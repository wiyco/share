/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Acknowledgments:
 * This code is derived from and inspired by Chakra UI and NextUI.
 * Special thanks to the Chakra UI and NextUI team for their outstanding work and open-source contributions.
 * Their implementation patterns and design principles have significantly influenced this code.
 *
 * Original sources:
 * @see {@link https://github.com/chakra-ui/chakra-ui/blob/next/packages/system/src/forward-ref.tsx | Chakra UI}
 * @see {@link https://github.com/nextui-org/nextui/blob/canary/packages/core/system-rsc/src/utils.ts | NextUI}
 *
 * Chakra UI | NextUI
 * @license MIT
 */

import { forwardRef as reactForwardRef } from "react";

import type {
  As,
  ForwardRefComponentWithAs,
  PropsOf,
  RightJoinProps,
} from "./react.types";

export function forwardRef<
  Component extends As,
  Props extends object,
  OmitKeys extends keyof any = never,
>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >
) {
  return reactForwardRef(
    component as React.ForwardRefRenderFunction<any>
  ) as ForwardRefComponentWithAs<Component, Props, OmitKeys>;
}
