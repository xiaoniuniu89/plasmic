// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXkSR39sgCDWSitZxC5xFV
// Component: KRNHR6lpj1

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicIndicator.module.css"; // plasmic-import: KRNHR6lpj1/css

createPlasmicElementProxy;

export type PlasmicIndicator__VariantMembers = {
  color: "red" | "green" | "gray" | "purple";
};
export type PlasmicIndicator__VariantsArgs = {
  color?: SingleChoiceArg<"red" | "green" | "gray" | "purple">;
};
type VariantPropType = keyof PlasmicIndicator__VariantsArgs;
export const PlasmicIndicator__VariantProps = new Array<VariantPropType>(
  "color"
);

export type PlasmicIndicator__ArgsType = {};
type ArgPropType = keyof PlasmicIndicator__ArgsType;
export const PlasmicIndicator__ArgProps = new Array<ArgPropType>();

export type PlasmicIndicator__OverridesType = {
  root?: p.Flex<"div">;
  dot?: p.Flex<"div">;
};

export interface DefaultIndicatorProps {
  color?: SingleChoiceArg<"red" | "green" | "gray" | "purple">;
  className?: string;
}

const $$ = {};

function PlasmicIndicator__RenderFunc(props: {
  variants: PlasmicIndicator__VariantsArgs;
  args: PlasmicIndicator__ArgsType;
  overrides: PlasmicIndicator__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolor_purple]: hasVariant($state, "color", "purple"),
          [sty.rootcolor_red]: hasVariant($state, "color", "red"),
        }
      )}
    >
      <div
        data-plasmic-name={"dot"}
        data-plasmic-override={overrides.dot}
        className={classNames(projectcss.all, sty.dot, {
          [sty.dotcolor_gray]: hasVariant($state, "color", "gray"),
          [sty.dotcolor_green]: hasVariant($state, "color", "green"),
          [sty.dotcolor_purple]: hasVariant($state, "color", "purple"),
          [sty.dotcolor_red]: hasVariant($state, "color", "red"),
        })}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "dot"],
  dot: ["dot"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  dot: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIndicator__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIndicator__VariantsArgs;
    args?: PlasmicIndicator__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIndicator__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIndicator__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicIndicator__ArgProps,
          internalVariantPropNames: PlasmicIndicator__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicIndicator__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIndicator";
  } else {
    func.displayName = `PlasmicIndicator.${nodeName}`;
  }
  return func;
}

export const PlasmicIndicator = Object.assign(
  // Top-level PlasmicIndicator renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    dot: makeNodeComponent("dot"),

    // Metadata about props expected for PlasmicIndicator
    internalVariantProps: PlasmicIndicator__VariantProps,
    internalArgProps: PlasmicIndicator__ArgProps,
  }
);

export default PlasmicIndicator;
/* prettier-ignore-end */
