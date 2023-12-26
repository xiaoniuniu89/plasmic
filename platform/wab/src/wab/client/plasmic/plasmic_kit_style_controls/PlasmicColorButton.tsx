// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gYEVvAzCcLMHDVPvuYxkFh
// Component: nTolMugov4

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
import ColorSwatch from "../../components/style-controls/ColorSwatch"; // plasmic-import: 4AYfEug-RA/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicColorButton.module.css"; // plasmic-import: nTolMugov4/css

createPlasmicElementProxy;

export type PlasmicColorButton__VariantMembers = {
  isDisabled: "isDisabled";
  valueSetState: "isSet" | "isUnset" | "isInherited";
};
export type PlasmicColorButton__VariantsArgs = {
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  valueSetState?: SingleChoiceArg<"isSet" | "isUnset" | "isInherited">;
};
type VariantPropType = keyof PlasmicColorButton__VariantsArgs;
export const PlasmicColorButton__VariantProps = new Array<VariantPropType>(
  "isDisabled",
  "valueSetState"
);

export type PlasmicColorButton__ArgsType = {
  label?: React.ReactNode;
};
type ArgPropType = keyof PlasmicColorButton__ArgsType;
export const PlasmicColorButton__ArgProps = new Array<ArgPropType>("label");

export type PlasmicColorButton__OverridesType = {
  root?: p.Flex<"button">;
  swatchContainer?: p.Flex<"div">;
  swatch?: p.Flex<typeof ColorSwatch>;
  labelContainer?: p.Flex<"div">;
};

export interface DefaultColorButtonProps {
  label?: React.ReactNode;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  valueSetState?: SingleChoiceArg<"isSet" | "isUnset" | "isInherited">;
  className?: string;
}

const $$ = {};

function PlasmicColorButton__RenderFunc(props: {
  variants: PlasmicColorButton__VariantsArgs;
  args: PlasmicColorButton__ArgsType;
  overrides: PlasmicColorButton__OverridesType;
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
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled,
      },
      {
        path: "valueSetState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.valueSetState,
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
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootvalueSetState_isSet]: hasVariant(
            $state,
            "valueSetState",
            "isSet"
          ),
        }
      )}
    >
      <div
        data-plasmic-name={"swatchContainer"}
        data-plasmic-override={overrides.swatchContainer}
        className={classNames(
          projectcss.all,
          sty.swatchContainer,
          "baseline-friendly-centered-block-container"
        )}
      >
        <ColorSwatch
          data-plasmic-name={"swatch"}
          data-plasmic-override={overrides.swatch}
          className={classNames("__wab_instance", sty.swatch)}
        />
      </div>
      <div
        data-plasmic-name={"labelContainer"}
        data-plasmic-override={overrides.labelContainer}
        className={classNames(projectcss.all, sty.labelContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "#F838AE",
          value: args.label,
          className: classNames(sty.slotTargetLabel, {
            [sty.slotTargetLabelisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.slotTargetLabelvalueSetState_isInherited]: hasVariant(
              $state,
              "valueSetState",
              "isInherited"
            ),
            [sty.slotTargetLabelvalueSetState_isSet]: hasVariant(
              $state,
              "valueSetState",
              "isSet"
            ),
            [sty.slotTargetLabelvalueSetState_isUnset]: hasVariant(
              $state,
              "valueSetState",
              "isUnset"
            ),
          }),
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "swatchContainer", "swatch", "labelContainer"],
  swatchContainer: ["swatchContainer", "swatch"],
  swatch: ["swatch"],
  labelContainer: ["labelContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
  swatchContainer: "div";
  swatch: typeof ColorSwatch;
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicColorButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicColorButton__VariantsArgs;
    args?: PlasmicColorButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicColorButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicColorButton__ArgsType,
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
          internalArgPropNames: PlasmicColorButton__ArgProps,
          internalVariantPropNames: PlasmicColorButton__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicColorButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicColorButton";
  } else {
    func.displayName = `PlasmicColorButton.${nodeName}`;
  }
  return func;
}

export const PlasmicColorButton = Object.assign(
  // Top-level PlasmicColorButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    swatchContainer: makeNodeComponent("swatchContainer"),
    swatch: makeNodeComponent("swatch"),
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicColorButton
    internalVariantProps: PlasmicColorButton__VariantProps,
    internalArgProps: PlasmicColorButton__ArgProps,
  }
);

export default PlasmicColorButton;
/* prettier-ignore-end */
