const AppsLoading = () => {
  return (
    <div className="container mx-auto">
      {/* Header Skeleton */}
      <div className="mx-auto max-w-100 space-y-4 text-center">
        <div className="skeleton mx-auto h-10 w-48"></div>

        <div className="skeleton mx-auto h-4 w-80"></div>
        <div className="skeleton mx-auto h-4 w-64"></div>
      </div>

      {/* Cards Skeleton */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm"
          >
            {/* Image + Title */}
            <div className="flex gap-4">
              <div className="skeleton h-20 w-20 shrink-0 rounded-2xl"></div>

              <div className="flex-1 space-y-3">
                <div className="skeleton h-5 w-32"></div>
                <div className="skeleton h-4 w-24"></div>

                <div className="flex gap-2">
                  <div className="skeleton h-4 w-10"></div>
                  <div className="skeleton h-4 w-16"></div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-5 space-y-2">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-5/6"></div>
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-base-200 p-3">
              <div className="space-y-2 text-center">
                <div className="skeleton mx-auto h-4 w-12"></div>
                <div className="skeleton mx-auto h-3 w-14"></div>
              </div>

              <div className="space-y-2 text-center">
                <div className="skeleton mx-auto h-4 w-12"></div>
                <div className="skeleton mx-auto h-3 w-10"></div>
              </div>

              <div className="space-y-2 text-center">
                <div className="skeleton mx-auto h-4 w-10"></div>
                <div className="skeleton mx-auto h-3 w-12"></div>
              </div>
            </div>

            {/* Button */}
            <div className="skeleton mt-5 h-11 w-full rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppsLoading;