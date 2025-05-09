"use client";
import { getCreatorDetails } from "@/lib/dbActions";
import { addToast, Skeleton } from "@heroui/react";
import { TRole } from "@repo/lib/constants";
import { VideoCard, VideoDropdown } from "@repo/ui";
import moment from "moment";
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

      if (res && !res.ok) {
        addToast({
          color: "danger",
          description: "Failed to fetch videos.",
        });
        return;
      }
      // console.log("res.result", res.result);
      if (res.ok) {
        setUserDetails(res.result);
      }
    })();
  }, [data?.user.id, status]); // Added dependency
  console.log(
    moment().subtract(20, "days").unix(),
    moment().subtract(20, "days")
  );
  // console.log(moment(1744187881 / 1000).format("YYYY-MM-DD HH:mm:ss"));
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
