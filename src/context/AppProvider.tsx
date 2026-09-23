"use client";
import { TApp } from "@/Type/apps.type";
import React, { createContext, ReactNode, useState } from "react";

type TAppContext = {
  installedApps: TApp[];
  setInstalledApps: React.Dispatch<React.SetStateAction<TApp[]>>;
};

export const AppContext = createContext<TAppContext>({
  installedApps: [],
  setInstalledApps: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [installedApps, setInstalledApps] = useState<TApp[]>([]);

  const sharedData = {
    installedApps,
    setInstalledApps,
  };

  return (
    <AppContext.Provider value={sharedData}>
      {children}
      </AppContext.Provider>
  );
};

export default AppProvider;