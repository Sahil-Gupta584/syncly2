export type TPrivacyStatus = "Private" | "Public" | "Unlisted";
export type TPlan = "FREE" | "PRO" | "BUSINESS";

export const channelAccessScopes = [
  "openid",
  "profile",
  "email",
  "https://www.googleapis.com/auth/youtube.upload",
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/youtube",
  "https://www.googleapis.com/auth/youtubepartner-channel-audit",
];

export const thumbnailFileTypes = [
  "image/jpeg",
  "image/png",
  " application/octet-stream",
];
export const privacyStatus = [
  {
    title: "Private",
    desc: "Only you and people who you choose can watch your video",
  },
  {
    title: "Unlisted",
    desc: "Anyone with the video link can watch your video",
  },
  {
    title: "Public",
    desc: "Everyone can watch your video",
  },
];

export const licence = [
  "Standard YouTube Licence",
  "Creative Commons – Attribution",
];
export const categories = [
  { id: 2, label: "Cars & Vehicles" },
  { id: 23, label: "Comedy" },
  { id: 27, label: "Education" },
  { id: 24, label: "Entertainment" },
  { id: 1, label: "Film & Animation" },
  { id: 20, label: "Gaming" },
  { id: 26, label: "How-to & Style" },
  { id: 10, label: "Music" },
  { id: 25, label: "News & Politics" },
  { id: 29, label: "Non-profits & Activism" },
  { id: 22, label: "People & Blogs" },
  { id: 15, label: "Pets & Animals" },
  { id: 28, label: "Science & Technology" },
  { id: 17, label: "Sport" },
  { id: 19, label: "Travel & Events" },
];

export const commentsState = ["On", "Pause", "Off"];
export const commentModeration = [
  { title: "None", desc: "Don't hold any comments" },
  { title: "Basic", desc: "Hold potentially inappropriate comments" },
  {
    title: "Strict",
    desc: "Hold a broader range of potentially inappropriate comments",
  },
  { title: "Hold all", desc: "Hold all comments" },
];

export const captionCertifications = [
  "None",
  "This content has never aired on television in the US",
  "This content has only aired on television in the US without captions",
  "This content has not aired on US television with captions since 30 September 2012",
  "This content does not fall within a category of online programming that requires captions under FCC regulations (47 CFR § 79)",
  "The FCC and/or US Congress has granted an exemption from captioning requirements for this content",
];

export const dummyVideos = [
  {
    id: "ea515f2b-1a2a-44b2-86a5-a7f074bd2dd0",
    gDriveId: "1la1ETW2x8naxiruiEsnerQp9fEJKwEIg",
    title:
      "Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled   Video VideoVideo Video Video ",
    description: "No description added.",
    thumbnailUrl: "",
    scheduledAt: null,
    videoStatus: "DRAFT",
    privacyStatus: "Private",
    playlistIds: [],
    tags: "output",
    categoryId: "22",
    ownerId: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
    importedById: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
    channelId: null,
    createdAt: 1743779529,
    owner: {
      id: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
      email: "guptas3067@gmail.com",
      name: "Sahil Gupta",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJOxCAFsa60LevnhcsY5rzDNX6G1UZpMsXN5OfJS60cu_JKJQ=s96-c",
      emailVerified: null,
      role: null,
      plan: null,
      creatorId: null,
      createdAt: new Date(),
    },
    importedBy: {
      id: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
      email: "guptas3067@gmail.com",
      name: "Sahil Gupta",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJOxCAFsa60LevnhcsY5rzDNX6G1UZpMsXN5OfJS60cu_JKJQ=s96-c",
      emailVerified: null,
      role: null,
      plan: null,
      creatorId: null,
      createdAt: new Date(),
    },
    channel: null,
  },
  {
    id: "5b06b448-66e7-48ad-9cd7-d856a8b21f4a",
    gDriveId: "12bAkiA7t2O_CvdldwDlDFdzu1Og0dcEI",
    title:
      "Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled   ",
    description: "No description added.a",
    thumbnailUrl: "https://i.ibb.co/HDgQ8gQr/dolo.jpg",
    scheduledAt: 1743854640,
    videoStatus: "DRAFT",
    privacyStatus: "Private",
    playlistIds: [
      "PLeToJxsFRWLDbF2FrZ0OZwjuyDHmdzrqf",
      "PLeToJxsFRWLCq0Zw0jYVbAvKH21gsklyb",
    ],
    tags: "output",
    categoryId: "20",
    ownerId: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
    importedById: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
    channelId: null,
    createdAt: 1742443318,
    owner: {
      id: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
      email: "guptas3067@gmail.com",
      name: "Sahil Gupta",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJOxCAFsa60LevnhcsY5rzDNX6G1UZpMsXN5OfJS60cu_JKJQ=s96-c",
      emailVerified: null,
      role: null,
      plan: null,
      creatorId: null,
      createdAt: new Date(),
    },
    importedBy: {
      id: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
      email: "guptas3067@gmail.com",
      name: "Sahil Gupta",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJOxCAFsa60LevnhcsY5rzDNX6G1UZpMsXN5OfJS60cu_JKJQ=s96-c",
      emailVerified: null,
      role: null,
      plan: null,
      creatorId: null,
      createdAt: new Date(),
    },
    channel: null,
  },
  {
    id: "6d17d3db-8b32-4803-be68-e0960c869dec",
    gDriveId: "1xId-yPO_05WMsMLXgOJnmbu1tqFY8gRS",
    title:
      "Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled   Video VideoVideo Video Video ",
    description: "No description added.",
    thumbnailUrl: "https://i.ibb.co/8DvhXvRy/prescription.jpg",
    scheduledAt: null,
    videoStatus: "DRAFT",
    privacyStatus: "Private",
    playlistIds: [""],
    tags: "output",
    categoryId: "22",
    ownerId: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
    importedById: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
    channelId: null,
    createdAt: 1743779112,
    owner: {
      id: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
      email: "guptas3067@gmail.com",
      name: "Sahil Gupta",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJOxCAFsa60LevnhcsY5rzDNX6G1UZpMsXN5OfJS60cu_JKJQ=s96-c",
      emailVerified: null,
      role: null,
      plan: null,
      creatorId: null,
      createdAt: new Date(),
    },
    importedBy: {
      id: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
      email: "guptas3067@gmail.com",
      name: "Sahil Gupta",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJOxCAFsa60LevnhcsY5rzDNX6G1UZpMsXN5OfJS60cu_JKJQ=s96-c",
      emailVerified: null,
      role: null,
      plan: null,
      creatorId: null,
      createdAt: new Date(),
    },
    channel: null,
  },
  {
    id: "92089402-0ca2-44f8-a063-19cc8e87f802",
    gDriveId: "1A_NXepXPV-ks66RHbiOgyURn92csLhh6",
    title:
      "Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled   Video VideoVideo Video Video ",
    description: "No description added.",
    thumbnailUrl: "",
    scheduledAt: null,
    videoStatus: "DRAFT",
    privacyStatus: "Private",
    playlistIds: [],
    tags: "output",
    categoryId: "22",
    ownerId: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
    importedById: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
    channelId: null,
    createdAt: 1743780220,
    owner: {
      id: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
      email: "guptas3067@gmail.com",
      name: "Sahil Gupta",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJOxCAFsa60LevnhcsY5rzDNX6G1UZpMsXN5OfJS60cu_JKJQ=s96-c",
      emailVerified: null,
      role: null,
      plan: null,
      creatorId: null,
      createdAt: new Date(),
    },
    importedBy: {
      id: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
      email: "guptas3067@gmail.com",
      name: "Sahil Gupta",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJOxCAFsa60LevnhcsY5rzDNX6G1UZpMsXN5OfJS60cu_JKJQ=s96-c",
      emailVerified: null,
      role: null,
      plan: null,
      creatorId: null,
      createdAt: new Date(),
    },
    channel: null,
  },
  {
    id: "0b534970-5b7e-4a13-8816-fa8a421ed14c",
    gDriveId: "1DYW4GTOf1dyAEFWCxhiUdjbFPPypGOlW",
    title:
      "Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled Untitled   Video VideoVideo Video Video ",
    description: "No description added.",
    thumbnailUrl: "",
    scheduledAt: null,
    videoStatus: "DRAFT",
    privacyStatus: "Private",
    playlistIds: [],
    tags: "output",
    categoryId: "22",
    ownerId: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
    importedById: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
    channelId: null,
    createdAt: 1743780238,
    owner: {
      id: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
      email: "guptas3067@gmail.com",
      name: "Sahil Gupta",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJOxCAFsa60LevnhcsY5rzDNX6G1UZpMsXN5OfJS60cu_JKJQ=s96-c",
      emailVerified: null,
      role: null,
      plan: null,
      creatorId: null,
      createdAt: new Date(),
    },
    importedBy: {
      id: "c4d0fbd8-f59f-410a-af50-617d54a8dcba",
      email: "guptas3067@gmail.com",
      name: "Sahil Gupta",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJOxCAFsa60LevnhcsY5rzDNX6G1UZpMsXN5OfJS60cu_JKJQ=s96-c",
      emailVerified: null,
      role: null,
      plan: null,
      creatorId: null,
      createdAt: new Date(),
    },
    channel: null,
  },
];
