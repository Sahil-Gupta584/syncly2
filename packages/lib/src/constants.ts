import { PlanType } from "@repo/db";

export const defaultVideoTitle = "Untitled  Video ";
export const defaultVideoDesc = "No description added.";
export type TRole = "CREATOR" | "EDITOR";

export type TPlan = {
  name: PlanType;
  price: "$9" | "$14" | "$49" | "Custom";
  period: "/month" | "";
  description: string;
  features: {
    included: boolean;
    text: string;
  }[];
  cta: string;
  popular: boolean;
  monthlySubscriptionId:string
  yearlySubscriptionId:string
};
export const plans: TPlan[] = [
  {
    name: "BASE",
    price: "$9",
    period: "/month",
    description: "Perfect for individual creators getting started.",
    features: [
      { included: true, text: "1 YouTube channel" },
      { included: true, text: "Up to 3 editors" },
      { included: true, text: "Use your own Google Drive for storage" },
      { included: false, text: "Cloud storage included" },
      { included: false, text: "Priority support" },
    ],
    cta: "Get Started",
    popular: false,
    monthlySubscriptionId:'sub_QS5jj0OdssPydD',
    yearlySubscriptionId:'sub_QS6nzgmL2lcNeB'
  },
  {
    name: "PRO",
    price: "$14",
    period: "/month",
    description: "Ideal for creators managing multiple channels.",
    features: [
      { included: true, text: "Up to 5 YouTube channels" },
      { included: true, text: "Up to 10 editors" },
      { included: true, text: "50GB cloud storage included" },
      { included: true, text: "Basic analytics" },
      { included: false, text: "Priority support" },
    ],
    cta: "Get Started",
    popular: true,monthlySubscriptionId:'sub_QS6q88HHiJo1iu',yearlySubscriptionId:'sub_QS6vlNQegRBuvh'
  },
  {
    name: "GROWTH",
    price: "$49",
    period: "/month",
    description: "For small production teams scaling up.",
    features: [
      { included: true, text: "Up to 10 YouTube channels" },
      { included: true, text: "Up to 20 editors" },
      { included: true, text: "200GB cloud storage included" },
      { included: true, text: "Advanced analytics" },
      { included: true, text: "Priority support" },
    ],
    cta: "Get Started",
    popular: false,monthlySubscriptionId:'sub_QS6sHh3HuUeS0c',yearlySubscriptionId:'sub_QS6x26maXPTRwi'
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    period: "",
    description: "For large teams needing unlimited flexibility.",
    features: [
      { included: true, text: "Unlimited YouTube channels" },
      { included: true, text: "Unlimited editors" },
      { included: true, text: "2TB+ cloud storage (negotiable)" },
      { included: true, text: "Dedicated account manager" },
      { included: true, text: "24/7 priority support" },
    ],
    cta: "Contact Sales",
    popular: false,monthlySubscriptionId:'',yearlySubscriptionId:''
  },
];