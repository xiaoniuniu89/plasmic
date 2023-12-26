// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXkSR39sgCDWSitZxC5xFV
// Component: po7gr0PX4_gWo

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
import Textbox from "../../components/widgets/Textbox"; // plasmic-import: pA22NEzDCsn_/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicSearchbox.module.css"; // plasmic-import: po7gr0PX4_gWo/css

import SearchsvgIcon from "../q_4_icons/icons/PlasmicIcon__Searchsvg"; // plasmic-import: R5DLz11OA/icon
import ClosesvgIcon from "../q_4_icons/icons/PlasmicIcon__Closesvg"; // plasmic-import: DhvEHyCHT/icon

createPlasmicElementProxy;

export type PlasmicSearchbox__VariantMembers = {
  hasValue: "hasValue";
  bordered: "bordered";
  noOutline: "noOutline";
  whiteBackground: "whiteBackground";
  extraPadding: "extraPadding";
  medium: "medium";
};
export type PlasmicSearchbox__VariantsArgs = {
  hasValue?: SingleBooleanChoiceArg<"hasValue">;
  bordered?: SingleBooleanChoiceArg<"bordered">;
  noOutline?: SingleBooleanChoiceArg<"noOutline">;
  whiteBackground?: SingleBooleanChoiceArg<"whiteBackground">;
  extraPadding?: SingleBooleanChoiceArg<"extraPadding">;
  medium?: SingleBooleanChoiceArg<"medium">;
};
type VariantPropType = keyof PlasmicSearchbox__VariantsArgs;
export const PlasmicSearchbox__VariantProps = new Array<VariantPropType>(
  "hasValue",
  "bordered",
  "noOutline",
  "whiteBackground",
  "extraPadding",
  "medium"
);

export type PlasmicSearchbox__ArgsType = {
  placeholder?: string;
};
type ArgPropType = keyof PlasmicSearchbox__ArgsType;
export const PlasmicSearchbox__ArgProps = new Array<ArgPropType>("placeholder");

export type PlasmicSearchbox__OverridesType = {
  root?: p.Flex<typeof Textbox>;
};

export interface DefaultSearchboxProps {
  placeholder?: string;
  bordered?: SingleBooleanChoiceArg<"bordered">;
  noOutline?: SingleBooleanChoiceArg<"noOutline">;
  whiteBackground?: SingleBooleanChoiceArg<"whiteBackground">;
  extraPadding?: SingleBooleanChoiceArg<"extraPadding">;
  medium?: SingleBooleanChoiceArg<"medium">;
  className?: string;
}

const $$ = {};

function PlasmicSearchbox__RenderFunc(props: {
  variants: PlasmicSearchbox__VariantsArgs;
  args: PlasmicSearchbox__ArgsType;
  overrides: PlasmicSearchbox__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          placeholder: "Search...",
        },
        props.args
      ),
    [props.args]
  );

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
        path: "hasValue",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hasValue,
      },
      {
        path: "bordered",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.bordered,
      },
      {
        path: "noOutline",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noOutline,
      },
      {
        path: "whiteBackground",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.whiteBackground,
      },
      {
        path: "extraPadding",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.extraPadding,
      },
      {
        path: "medium",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.medium,
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
    <Textbox
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root, {
        [sty.rootbordered]: hasVariant($state, "bordered", "bordered"),
        [sty.rootextraPadding]: hasVariant(
          $state,
          "extraPadding",
          "extraPadding"
        ),
        [sty.roothasValue]: hasVariant($state, "hasValue", "hasValue"),
        [sty.rootmedium]: hasVariant($state, "medium", "medium"),
        [sty.rootnoOutline]: hasVariant($state, "noOutline", "noOutline"),
        [sty.rootwhiteBackground]: hasVariant(
          $state,
          "whiteBackground",
          "whiteBackground"
        ),
      })}
      extraPadding={
        hasVariant($state, "extraPadding", "extraPadding") ? true : undefined
      }
      noOutline={
        hasVariant($state, "noOutline", "noOutline") ? true : undefined
      }
      placeholder={args.placeholder}
      prefixIcon={
        <SearchsvgIcon
          className={classNames(projectcss.all, sty.svg__unKzu, {
            [sty.svghasValue__unKzuuzQ8L]: hasVariant(
              $state,
              "hasValue",
              "hasValue"
            ),
            [sty.svgmedium__unKzuKYp1]: hasVariant($state, "medium", "medium"),
          })}
          role={"img"}
        />
      }
      styleType={
        hasVariant($state, "whiteBackground", "whiteBackground")
          ? ["bordered"]
          : hasVariant($state, "bordered", "bordered")
          ? ["bordered"]
          : undefined
      }
      suffixIcon={
        (hasVariant($state, "hasValue", "hasValue") ? true : false) ? (
          <ClosesvgIcon
            className={classNames(projectcss.all, sty.svg___2K8R, {
              [sty.svghasValue___2K8RuzQ8L]: hasVariant(
                $state,
                "hasValue",
                "hasValue"
              ),
            })}
            role={"img"}
          />
        ) : null
      }
      whiteBackground={
        hasVariant($state, "whiteBackground", "whiteBackground")
          ? true
          : undefined
      }
      withIcons={
        hasVariant($state, "hasValue", "hasValue")
          ? ["withPrefix", "withSuffix"]
          : ["withPrefix"]
      }
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof Textbox;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSearchbox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSearchbox__VariantsArgs;
    args?: PlasmicSearchbox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSearchbox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSearchbox__ArgsType,
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
          internalArgPropNames: PlasmicSearchbox__ArgProps,
          internalVariantPropNames: PlasmicSearchbox__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicSearchbox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearchbox";
  } else {
    func.displayName = `PlasmicSearchbox.${nodeName}`;
  }
  return func;
}

export const PlasmicSearchbox = Object.assign(
  // Top-level PlasmicSearchbox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSearchbox
    internalVariantProps: PlasmicSearchbox__VariantProps,
    internalArgProps: PlasmicSearchbox__ArgProps,
  }
);

export default PlasmicSearchbox;
/* prettier-ignore-end */
