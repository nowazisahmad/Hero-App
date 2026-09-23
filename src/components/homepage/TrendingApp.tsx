
import { TApp } from "@/Type/apps.type";
import AppCard from "../shared/AppCard";
import { getAllApps } from "@/lib/apps";

const TrendingApp = async () => {
  const data = await getAllApps();
  console.log(data, "data");

  return (
    <div className="my-20 container mx-auto">
      <div className="space-y-4 max-w-100 mx-auto text-center">
        <h2 className="font-bold text-4xl">Trending Apps</h2>
        <p>
          Explore all trending apps on the market developed by top developers.
        </p>
      </div>

      {/* Data display via card */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.slice(0, 8).map((app: TApp, ind: number) => {
          return <AppCard key={ind} app={app} />;
        })}
      </div>
    </div>
  );
};

export default TrendingApp;