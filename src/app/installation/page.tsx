"use client";
import AppCard from "@/components/shared/AppCard";
import { AppContext } from "@/context/AppProvider";
import { TApp } from "@/Type/apps.type";
import React, { useContext } from "react";

const InstallationPage = () => {
  const { installedApps } = useContext(AppContext);
  return (
    <div className="container mx-auto">
      {" "}
      <div className="space-y-4 max-w-[400px] mx-auto text-center">
        <h2 className="font-bold text-4xl">Installed Apps</h2>
        <p>
          Explore all existing installed apps on the market developed by top
          developers.
        </p>
      </div>
      {/* Data display via card */}
      {installedApps.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {installedApps.map((app: TApp, ind: number) => {
            return <AppCard key={ind} app={app} />;
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 font-bold text-5xl py-20">
          No installed apps found.
        </p>
      )}
    </div>
  );
};

export default InstallationPage;