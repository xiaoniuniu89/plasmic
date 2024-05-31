// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { AppCtx } from "@/wab/client/app-ctx";
import { getTiersAndPromptBilling } from "@/wab/client/components/modals/PricingModal";
import { useAppCtx } from "@/wab/client/contexts/AppContexts";
import {
  DefaultFreeTrialProps,
  PlasmicFreeTrial,
} from "@/wab/client/plasmic/plasmic_kit_design_system/PlasmicFreeTrial";
import { ensure, spawn } from "@/wab/common";
import { ApiTeam } from "@/wab/shared/ApiSchema";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { round } from "lodash";
import * as React from "react";

const MILLIS_PER_DAY = 1000 * 60 * 60 * 24;

function getTrialTimeRemaining(
  appCtx: AppCtx,
  trialStartDate: Date,
  trialDays: number
) {
  if (Date.now() - trialStartDate.getTime() > trialDays * MILLIS_PER_DAY) {
    spawn(appCtx.reloadAppCtx());
    return null;
  }
  const daysRemaining =
    trialDays - round((Date.now() - trialStartDate.getTime()) / MILLIS_PER_DAY);
  return `${daysRemaining} ${daysRemaining === 1 ? "day" : "days"}`;
}

export function recentlyEndedTrial(appCtx: AppCtx, team: ApiTeam) {
  const daysToShowAfterEnded = 7;
  return !!(
    !team.featureTierId &&
    team.trialStartDate &&
    ((team.trialDays ?? appCtx.appConfig.freeTrialDays) +
      daysToShowAfterEnded) *
      MILLIS_PER_DAY >
      Date.now() - new Date(team.trialStartDate).getTime()
  );
}

export interface FreeTrialProps extends DefaultFreeTrialProps {
  team?: ApiTeam;
}

function FreeTrial_(props: FreeTrialProps, ref: HTMLElementRefOf<"a">) {
  const { team, ...rest } = props;
  const appCtx = useAppCtx();
  // Show the banner if
  const recentlyEnded = team && recentlyEndedTrial(appCtx, team);

  return (
    <>
      {team && (team.onTrial || recentlyEnded) && (
        <PlasmicFreeTrial
          {...rest}
          root={{ ref }}
          freeTrialTimeRemaining={
            team.onTrial &&
            getTrialTimeRemaining(
              appCtx,
              new Date(
                ensure(
                  team.trialStartDate,
                  "A team on free trial must have a start date"
                )
              ),
              team.trialDays ?? appCtx.appConfig.freeTrialDays
            )
          }
          trialEnded={!!recentlyEnded}
          onClick={async () => {
            if (appCtx.topFrameApi) {
              await appCtx.topFrameApi.promptBilling();
            } else {
              await getTiersAndPromptBilling(appCtx, team);
            }
          }}
        />
      )}
    </>
  );
}

const FreeTrial = React.forwardRef(FreeTrial_);
export default FreeTrial;
