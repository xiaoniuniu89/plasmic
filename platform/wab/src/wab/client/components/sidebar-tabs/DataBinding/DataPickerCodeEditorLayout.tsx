import {
  CodePreview,
  renderInspector,
} from "@/wab/client/components/coding/CodePreview";
import {
  DataPickerRunCodeActionContext,
  DataPickerTypesSchema,
} from "@/wab/client/components/sidebar-tabs/DataBinding/DataPicker";
import {
  DefaultDataPickerCodeEditorLayoutProps,
  PlasmicDataPickerCodeEditorLayout,
} from "@/wab/client/plasmic/plasmic_kit_data_binding/PlasmicDataPickerCodeEditorLayout";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useStudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { isLiteralObjectByName, withoutNils } from "@/wab/shared/common";

export interface DataPickerCodeEditorLayoutProps
  extends Omit<DefaultDataPickerCodeEditorLayoutProps, "envPanel"> {
  editorRef: React.RefObject<{
    getValue: () => string;
  }>;
  data: object;
  defaultValue: string;
  onSave: (val: string) => boolean;
  schema?: DataPickerTypesSchema;
  context?: string;
  showReactNamespace?: boolean;
  hideEnvPanel?: boolean;
}

const LazyFullCodeEditor = React.lazy(
  () => import("@/wab/client/components/coding/FullCodeEditor")
);

function DataPickerCodeEditorLayout_(
  props: DataPickerCodeEditorLayoutProps,
  ref: HTMLElementRefOf<"div">
) {
  const {
    editorRef,
    data,
    defaultValue,
    onSave,
    schema,
    showReactNamespace,
    hideEnvPanel,
    context,
    ...rest
  } = props;
  const [currentValue, setCurrentValue] = React.useState(defaultValue);
  const [codeEditorKey, setCodeEditorKey] = React.useState(0);
  const [showEnv, setShowEnv] = React.useState(false);
  const studioCtx = useStudioCtx();
  const runCodeContext = React.useContext(DataPickerRunCodeActionContext);
  return (
    <PlasmicDataPickerCodeEditorLayout
      root={{ ref }}
      {...rest}
      codeEditor={
        <React.Suspense fallback={<div />}>
          <LazyFullCodeEditor
            ref={editorRef}
            key={codeEditorKey}
            hideLineNumbers={true}
            language={"javascript"}
            defaultValue={defaultValue}
            data={data}
            onSave={onSave}
            onChange={(val: string) => setCurrentValue(val)}
            enableMinimap={false}
            hideGlobalSuggestions={true}
            lightTheme={true}
            folding={false}
            schema={schema}
            showReactNamespace={showReactNamespace}
            autoFocus
          />
        </React.Suspense>
      }
      copilotCodePrompt={{
        props: {
          data,
          currentValue,
          onUpdate: (v) => {
            setCurrentValue(v);
            onSave(v);
            setCodeEditorKey(codeEditorKey + 1);
          },
          context,
        },
      }}
      codePreview={
        !runCodeContext ? (
          <CodePreview
            viewCtx={studioCtx.focusedViewCtx()}
            value={`(${currentValue})`}
            data={data}
          />
        ) : (
          renderInspector(runCodeContext.stepValue)
        )
      }
      envPanel={
        hideEnvPanel || !studioCtx.appCtx.appConfig.envPanel
          ? "hidden"
          : !showEnv
          ? "collapsed"
          : undefined
      }
      env={<EnvPreview data={data} />}
      envToggleButton={{
        onClick: () => setShowEnv(!showEnv),
      }}
    />
  );
}

function EnvPreview(props: { data: Record<string, any>; className?: string }) {
  const { data, className } = props;
  const cleaned = React.useMemo(() => cleanDataForPreview(data), [data]);
  return (
    <div className={className}>
      <ErrorBoundary fallback={renderInspector(undefined)}>
        {renderInspector(cleaned)}
      </ErrorBoundary>
    </div>
  );
}

function cleanDataForPreview(data: Record<string, any>) {
  const rec = (x: any) => {
    if (!!x && isLiteralObjectByName(x)) {
      return Object.fromEntries(
        withoutNils(
          Object.entries(x).map(([key, val]) => {
            if (
              key.startsWith("__plasmic") ||
              key === "registerInitFunc" ||
              key === "eagerInitializeStates"
            ) {
              return null;
            }
            return [key, rec(val)];
          })
        )
      );
    }
    return x;
  };
  return rec(data);
}

const DataPickerCodeEditorLayout = React.forwardRef(
  DataPickerCodeEditorLayout_
);
export default DataPickerCodeEditorLayout;
