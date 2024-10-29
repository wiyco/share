/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Acknowledgments:
 * This code is derived from and inspired by Chakra UI.
 * Special thanks to the Chakra UI team for their outstanding work and open-source contributions.
 * Their implementation patterns and design principles have significantly influenced this code.
 *
 * Original source:
 * @see {@link https://github.com/chakra-ui/chakra-ui/blob/next/packages/system/src/system.types.tsx | @chakra-ui/system/src/system.types.tsx}
 *
 * Chakra UI - Copyright (c) 2019 Segun Adebayo
 * @license MIT
 */

import type { ValidationMap, WeakValidationMap } from "prop-types";

import type { EmptyObject } from "@/core";

type As<Props = any> = React.ElementType<Props>;

/**
 * Extract the props of a React element or component
 */
type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
> = Omit<Target, "transition" | "as" | "color" | OmitAdditionalProps>;

type RightJoinProps<
  SourceProps extends object = EmptyObject,
  OverrideProps extends object = EmptyObject,
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = EmptyObject,
  AsComponent extends As = As,
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

type ComponentWithAs<
  Component extends As,
  Props extends object = EmptyObject,
> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element;

  displayName?: string;
  propTypes?: WeakValidationMap<any>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};

export type {
  As,
  ComponentWithAs,
  MergeWithAs,
  OmitCommonProps,
  PropsOf,
  RightJoinProps,
};
