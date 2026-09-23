
import { TApp } from "@/Type/apps.type";
import Image from "next/image";
import Link from "next/link";

type TAppProps = {
  app: TApp;
};

const AppCard = ({ app }: TAppProps) => {
  return (
    <div>
      <div className="group w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {" "}
        {/* Top Section */}{" "}
        <div className="flex gap-4">
          {" "}
          {/* App Image */}{" "}
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
            {" "}
            <Image
              src={app.image}
              alt={app.title}
              fill
              className="object-cover"
              sizes="80px"
            />{" "}
          </div>{" "}
          {/* App Info */}{" "}
          <div className="min-w-0 flex-1">
            {" "}
            <h2 className="truncate text-xl font-bold text-gray-900">
              {" "}
              {app.title}{" "}
            </h2>{" "}
            <p className="mt-1 text-sm text-gray-500"> {app.companyName} </p>{" "}
            {/* Rating */}{" "}
            <div className="mt-2 flex items-center gap-2">
              {" "}
              <span className="font-semibold text-gray-800">
                {" "}
                {app.ratingAvg}{" "}
              </span>{" "}
              <span className="text-yellow-500">★</span>{" "}
              <span className="text-sm text-gray-400">
                {" "}
                ({app.reviews}){" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Description */}{" "}
        <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
          {" "}
          {app.description}{" "}
        </p>{" "}
        {/* App Stats */}{" "}
        <div className="mt-5 grid grid-cols-3 divide-x rounded-xl bg-gray-50 py-3 text-center">
          {" "}
          <div>
            {" "}
            <p className="text-sm font-semibold text-gray-900">
              {" "}
              {app.downloads}{" "}
            </p>{" "}
            <p className="text-xs text-gray-500">Downloads</p>{" "}
          </div>{" "}
          <div>
            {" "}
            <p className="text-sm font-semibold text-gray-900">
              {" "}
              {app.size} MB{" "}
            </p>{" "}
            <p className="text-xs text-gray-500">Size</p>{" "}
          </div>{" "}
          <div>
            {" "}
            <p className="text-sm font-semibold text-gray-900">
              {" "}
              {app.ratingAvg} ★{" "}
            </p>{" "}
            <p className="text-xs text-gray-500">Rating</p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Button */}{" "}
        <Link
          href={`/apps/${app.id}`}
          className="mt-5 block w-full rounded-xl bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
        >
          {" "}
          View Details{" "}
        </Link>{" "}
      </div>
    </div>
  );
};

export default AppCard;