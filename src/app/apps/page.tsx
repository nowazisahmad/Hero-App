import AppCard from "@/components/shared/AppCard";
import { getAllApps } from "@/lib/apps";
import { TApp } from "@/Type/apps.type";
import React from "react";



const AppsPage = async () => {
  const data = await getAllApps();

  console.log(data, "data");


  return (
    <div className="container mx-auto">
      {" "}
      <div className="space-y-4 max-w-[400px] mx-auto text-center">
        <h2 className="font-bold text-4xl">All Apps</h2>
        <p>Explore all apps on the market developed by top developers.</p>
      </div>
      {/* Data display via card */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((app: TApp, ind: number) => {
          return <AppCard key={ind} app={app} />;
        })}
      </div>
    </div>
  );
};

export default AppsPage;