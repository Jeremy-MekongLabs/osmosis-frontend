import React, { FunctionComponent } from "react";

import { EventName } from "~/config";
import { useAmplitudeAnalytics } from "~/hooks";

import { Icon } from "../assets";
import { IconLink } from "./icon-link";

export const AppDisplayCard: FunctionComponent<{
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  twitterUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
  mediumUrl?: string;
  index: number;
}> = ({
  title,
  subtitle,
  imageUrl,
  twitterUrl,
  githubUrl,
  externalUrl,
  mediumUrl,
  index,
}) => {
  const { logEvent } = useAmplitudeAnalytics();
  const handleAppClicked = () => {
    logEvent([
      EventName.AppStore.appClicked,
      { appName: title, isFeatured: false, isBanner: false, position: index },
    ]);
    window.open(externalUrl, "_blank", "noopener noreferrer");
  };
  return (
    <>
      <style jsx>{`
        .app-display-card:hover .card-image {
          transform: scale(1.15);
        }
        .card-image {
          background-image: url(${imageUrl});
        }
      `}</style>
      <div className="cursor-pointer" onClick={handleAppClicked}>
        <div className="app-display-card bg-white h-[280px] overflow-hidden rounded-2xl bg-osmoverse-800 shadow-md lg:h-[300px]">
          <div className="overflow-hidden">
            <div className="card-image inset-0 h-40 overflow-hidden rounded-2xl bg-cover bg-center transition-transform duration-300 ease-in"></div>
          </div>
          <div className="flex min-h-[120px] flex-col px-6 pt-4 pb-8">
            <div className="flex items-center space-x-3">
              <h6 className="font-semibold">{title}</h6>
              {!!twitterUrl && (
                <IconLink url={twitterUrl} ariaLabel="Twitter">
                  <Icon
                    id="twitter"
                    height="14px"
                    width="14px"
                    fill="#958FC0"
                  />
                </IconLink>
              )}
              {!!mediumUrl && (
                <IconLink url={mediumUrl} ariaLabel="Medium">
                  <Icon id="medium" height="14px" width="14px" fill="#958FC0" />
                </IconLink>
              )}
              {!!githubUrl && (
                <IconLink url={githubUrl} ariaLabel="GitHub">
                  <Icon id="github" height="14px" width="14px" fill="#958FC0" />
                </IconLink>
              )}
            </div>
            <p className="pt-3 text-xs text-osmoverse-200">{subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};
