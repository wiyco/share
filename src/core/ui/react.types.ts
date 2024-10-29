/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Acknowledgments:
 * This code is derived from and inspired by Chakra UI and NextUI.
 * Special thanks to the Chakra UI and NextUI team for their outstanding work and open-source contributions.
 * Their implementation patterns and design principles have significantly influenced this code.
 *
 * Original sources:
 * @see {@link https://github.com/chakra-ui/chakra-ui/blob/next/packages/system/src/system.types.tsx | Chakra UI}
 * @see {@link https://github.com/nextui-org/nextui/blob/canary/packages/core/system-rsc/src/types.ts | NextUI}
 *
 * Chakra UI | NextUI
 * @license MIT
 */

import type { ValidationMap, WeakValidationMap } from "prop-types";

import type { EmptyObject } from "../utility-types";

export type As<Props = any> = React.ElementType<Props>;

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
> = Omit<Target, "transition" | "as" | "color" | OmitAdditionalProps>;

export type RightJoinProps<
  SourceProps extends object = EmptyObject,
  OverrideProps extends object = EmptyObject,
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = EmptyObject,
  AsComponent extends As = As,
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

export type ComponentWithAs<
  Component extends As,
  Props extends object = EmptyObject,
  OmitKeys extends keyof any = never,
> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      Omit<React.ComponentProps<AsComponent>, OmitKeys>,
      Props,
      AsComponent
    >
  ): React.ReactElement;
  readonly $$typeof: symbol;
  displayName?: string;
  propTypes?: WeakValidationMap<any>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};

export type ForwardRefComponentWithAs<
  Component extends As,
  Props extends object = EmptyObject,
  OmitKeys extends keyof any = never,
> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentPropsWithoutRef<Component>,
      Omit<React.ComponentPropsWithoutRef<AsComponent>, OmitKeys>,
      Props,
      AsComponent
    >
  ): React.ReactElement;
  readonly $$typeof: symbol;
  displayName?: string;
  propTypes?: WeakValidationMap<any>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};

export type HTMLComponentProps<
  T extends As = "div",
  OmitKeys extends keyof any = never,
> = Omit<
  PropsOf<T>,
  | "ref"
  | "color"
  | "slot"
  | "size"
  | "defaultChecked"
  | "defaultValue"
  | OmitKeys
> & {
  as?: As;
};
