// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 47tFXWjN2C4NyHFGGpaYQ3
// Component: Q23H1_1M_P
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: TQcvW_pSKi3/component
import "@plasmicapp/react-web/lib/plasmic.css";
import sty from "./PlasmicRandomDynamicPageButton.module.css"; // plasmic-import: Q23H1_1M_P/css

export const PlasmicRandomDynamicPageButton__VariantProps = new Array();

export const PlasmicRandomDynamicPageButton__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicRandomDynamicPageButton__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <Button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
      onClick={async event => {
        const $steps = {};
        $steps["goToDynamicPage"] = true
          ? (() => {
              const actionArgs = {
                destination: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "navigation",
                    interactionUuid: "9Y3jL0zxjA",
                    componentUuid: "Q23H1_1M_P",
                    argName: "destination"
                  },
                  () =>
                    `/dynamic/${(() => {
                      try {
                        return Math.random().toString(36).slice(2);
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return "value";
                        }
                        throw e;
                      }
                    })()}`
                )
              };
              return __wrapUserFunction(
                {
                  type: "InteractionLoc",
                  actionName: "navigation",
                  interactionUuid: "9Y3jL0zxjA",
                  componentUuid: "Q23H1_1M_P"
                },
                () =>
                  (({ destination }) => {
                    location.assign(destination);
                  })?.apply(null, [actionArgs]),
                actionArgs
              );
            })()
          : undefined;
        if (
          typeof $steps["goToDynamicPage"] === "object" &&
          typeof $steps["goToDynamicPage"].then === "function"
        ) {
          $steps["goToDynamicPage"] = await __wrapUserPromise(
            {
              type: "InteractionLoc",
              actionName: "navigation",
              interactionUuid: "9Y3jL0zxjA",
              componentUuid: "Q23H1_1M_P"
            },
            $steps["goToDynamicPage"]
          );
        }
      }}
    >
      {"Random Dynamic Page"}
    </Button>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRandomDynamicPageButton__ArgProps,
          internalVariantPropNames: PlasmicRandomDynamicPageButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRandomDynamicPageButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRandomDynamicPageButton";
  } else {
    func.displayName = `PlasmicRandomDynamicPageButton.${nodeName}`;
  }
  return func;
}

export const PlasmicRandomDynamicPageButton = Object.assign(
  // Top-level PlasmicRandomDynamicPageButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRandomDynamicPageButton
    internalVariantProps: PlasmicRandomDynamicPageButton__VariantProps,
    internalArgProps: PlasmicRandomDynamicPageButton__ArgProps
  }
);

export default PlasmicRandomDynamicPageButton;
/* prettier-ignore-end */
