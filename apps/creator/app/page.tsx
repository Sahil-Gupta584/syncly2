"use client";
import { getCreatorDetails } from "@/lib/dbActions";
import { addToast, Skeleton } from "@heroui/react";
import { TRole } from "@repo/lib/constants";
import { VideoCard, VideoDropdown } from "@repo/ui";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImportVideo from "./modals/importVideo";

export type TUserDetails = NonNullable<
  Awaited<ReturnType<typeof getCreatorDetails>>
>["result"];

export default function Home() {
  const [userDetails, setUserDetails] = useState<TUserDetails>(null);
  const { data, status } = useSession();

  useEffect(() => {
    (async () => {
      if (status === "loading") return;
      if (!data?.user.id) {
        addToast({ color: "danger", description: "Unauthenticated" });
        return;
      }
      const res = await getCreatorDetails({ userId: data.user.id });

      if (res.ok) {
        setUserDetails(res.result);
        return;
      }
      addToast({
        color: "danger",
        description: "Failed to fetch videos.",
      });
    })();
  }, [data?.user.id, status]);

  return (
    <>
      <div className="main">
        <div className="video-cards-container grid p-4 gap-[24px_11px]">
          {userDetails &&
            userDetails.ownedVideos.map((video) => (
              <div className="relative" key={video.id}>
                <Link
                  key={video.id}
                  href={`/videos/${video.id}`}
                  className="block"
                >
                  <VideoCard video={video} />
                </Link>
                <VideoDropdown
                  title={video.title as string}
                  videoId={video.id}
                  userRole={data?.user.role as TRole}
                  className="[top:calc(72%_+_5px)] right-[5px] absolute"
                  ownerId={video.ownerId}
                />
              </div>
            ))}
          {userDetails && userDetails.ownedVideos.length === 0 && (
            <div className="flex items-center justify-center w-full h-[300px] col-span-full">
              <p className="text-gray-500 text-2xl">
                No videos found. Start by{" "}
                <span className="text-primary">Importing</span> one!
              </p>
            </div>
          )}
          {!userDetails && (
            <>
              <Skeleton className="w-[387px] h-[310px] rounded-lg" />
              <Skeleton className="w-[387px] h-[310px] rounded-lg" />
              <Skeleton className="w-[387px] h-[310px] rounded-lg" />
              <Skeleton className="w-[387px] h-[310px] rounded-lg" />
              <Skeleton className="w-[387px] h-[310px] rounded-lg" />
              <Skeleton className="w-[387px] h-[310px] rounded-lg" />
              <Skeleton className="w-[387px] h-[310px] rounded-lg" />
              <Skeleton className="w-[387px] h-[310px] rounded-lg" />
              <Skeleton className="w-[387px] h-[310px] rounded-lg" />
            </>
          )}
        </div>
        {data?.user.id && <ImportVideo userDetails={userDetails} />}
      </div>
    </>
  );
}
