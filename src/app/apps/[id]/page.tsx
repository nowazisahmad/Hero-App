import { getAllApps } from "@/lib/apps";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InstallAppButton from "@/components/Apps/InstallAppButton";
import { TApp } from "@/Type/apps.type";

type TAppDetailsProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const allApps = await getAllApps();

  // console.log(allApps, "allApps");
  return allApps.map((app: TApp) => {
    console.log(app.id, "id");
    return { id: app.id.toString() };
  });
}

const AppDetails = async ({ params }: TAppDetailsProps) => {
  const { id } = await params;

  const allApps = await getAllApps();

  const app = allApps.find((app: TApp) => app.id === Number(id));

  // If app doesn't exist
  if (!app) {
    notFound();
  }

  // Calculate total ratings
  const totalRatings = app.ratings.reduce(
    (total: number, rating: { name: string; count: number }) =>
      total + rating.count,
    0,
  );

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Back Button */}
      <Link href="/apps" className="btn btn-ghost mb-8">
        ← Back to Apps
      </Link>

      {/* Main App Info */}
      <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* App Image */}
          <div className="shrink-0">
            <Image
              src={app.image}
              alt={app.title}
              width={180}
              height={180}
              className="h-44 w-44 rounded-3xl object-cover shadow-md"
            />
          </div>

          {/* App Information */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold md:text-4xl">{app.title}</h1>

            <p className="mt-2 text-lg text-primary">{app.companyName}</p>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{app.ratingAvg}</span>

                <div className="text-xl text-warning">★</div>
              </div>

              <div className="h-6 w-px bg-base-300"></div>

              <p className="text-sm text-base-content/60">
                {app.reviews} reviews
              </p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-xl bg-base-200 p-4 text-center">
                <p className="font-bold">{app.downloads}</p>
                <p className="text-xs text-base-content/60">Downloads</p>
              </div>

              <div className="rounded-xl bg-base-200 p-4 text-center">
                <p className="font-bold">{app.size} MB</p>
                <p className="text-xs text-base-content/60">Size</p>
              </div>

              <div className="rounded-xl bg-base-200 p-4 text-center">
                <p className="font-bold">{app.ratingAvg}</p>
                <p className="text-xs text-base-content/60">Rating</p>
              </div>
            </div>

            {/* Install Button */}
            <InstallAppButton app={app} />
          </div>
        </div>
      </section>

      {/* About App */}
      <section className="mt-8 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold">About this app</h2>

        <p className="mt-4 leading-7 text-base-content/70">{app.description}</p>
      </section>

      {/* Ratings & Reviews */}
      <section className="mt-8 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold">Ratings & Reviews</h2>

        <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-center">
          {/* Overall Rating */}
          <div className="min-w-45 text-center">
            <p className="text-6xl font-bold">{app.ratingAvg}</p>

            <div className="mt-2 text-2xl text-warning">★★★★★</div>

            <p className="mt-2 text-sm text-base-content/60">
              {app.reviews} reviews
            </p>
          </div>

          {/* Rating Bars */}
          <div className="w-full max-w-2xl space-y-3">
            {[...app.ratings].reverse().map((rating) => {
              const percentage = (rating.count / totalRatings) * 100;

              return (
                <div key={rating.name} className="flex items-center gap-3">
                  <span className="w-12 text-sm">
                    {rating.name.replace(" star", "")} ★
                  </span>

                  <progress
                    className="progress progress-warning h-3 flex-1"
                    value={percentage}
                    max="100"
                  ></progress>

                  <span className="w-20 text-right text-xs text-base-content/60">
                    {rating.count.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppDetails;