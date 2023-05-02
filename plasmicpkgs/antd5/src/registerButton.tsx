import React from "react";
import { Button } from "antd";
import { Registerable, registerComponentHelper } from "./utils";

export function AntdButton(
  props: Omit<React.ComponentProps<typeof Button>, "target"> & {
    submitsForm?: boolean;
    target?: React.ComponentProps<typeof Button>["target"] | boolean;
  }
) {
  const { submitsForm = true, ...rest } = props;
  const target =
    props.target === true
      ? "_blank"
      : props.target === false
      ? undefined
      : props.target;
  return (
    <Button
      {...rest}
      htmlType={submitsForm ? "submit" : "button"}
      {...rest}
      target={target}
    />
  );
}

export function registerButton(loader?: Registerable) {
  registerComponentHelper(loader, AntdButton, {
    name: "plasmic-antd5-button",
    displayName: "Button",
    props: {
      type: {
        type: "choice",
        options: ["default", "primary", "ghost", "dashed", "link", "text"],
        description:
          "Can be set to primary, ghost, dashed, link, text, default",
        defaultValueHint: "default",
      },
      size: {
        type: "choice",
        options: ["small", "medium", "large"],
        description: "Set the size of button",
        defaultValueHint: "medium",
      },
      shape: {
        type: "choice",
        options: ["default", "circle", "round"],
        description: "Set the button shape",
        defaultValueHint: "default",
      },
      disabled: {
        type: "boolean",
        description: "Whether the button is disabled",
        defaultValueHint: false,
      },
      submitsForm: {
        type: "boolean",
        displayName: "Submits form?",
        defaultValueHint: true,
        description:
          "whether clicking this button should submit the enclosing form.",
        advanced: true,
      },
      ghost: {
        type: "boolean",
        description:
          "Make background transparent and invert text and border colors",
        defaultValueHint: false,
        advanced: true,
      },
      danger: {
        type: "boolean",
        description: "Set the danger status of button",
        defaultValueHint: false,
        advanced: true,
      },
      loading: {
        type: "boolean",
        description: "Set the loading status of button",
        defaultValueHint: false,
        advanced: true,
      },
      href: {
        type: "string",
        description: "Redirect url of link button",
      },
      target: {
        type: "boolean",
        description: "Whether to open the link in a new window",
        hidden: (props) => !props.href,
        defaultValueHint: false,
      },
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "Button",
          },
        ],
      },
      icon: {
        type: "slot",
        hidePlaceholder: true,
        hidden: () => true,
      },
      onClick: {
        type: "eventHandler",
        argTypes: [],
      },
    },
    importPath: "@plasmicpkgs/antd5/skinny/registerButton",
    importName: "AntdButton",
  });
}
