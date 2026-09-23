"use client";

import { AppContext } from "@/context/AppProvider";
import { TApp } from "@/Type/apps.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallAppButton = ({ app }: { app: TApp }) => {
  const { installedApps, setInstalledApps } = useContext(AppContext);

  console.log(installedApps, setInstalledApps, "data");
  const handleInstall = () => {
    console.log("Install button triggered", app);
    setInstalledApps([...installedApps, app]);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <button
      className="btn btn-primary mt-6 px-10"
      onClick={() => handleInstall()}
    >
      Install
    </button>
  );
};

export default InstallAppButton;