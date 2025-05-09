"use client";
import { addToast } from "@heroui/react";
import { PlanType } from "@repo/db";
import { plans, TPlan } from "@repo/lib/constants";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";

export type TPaymentMethod = "razorpay";
type CheckoutPageProps = { searchParams: Promise<{ planType: PlanType }> }

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<TPlan>(plans[1]); // Monthly by default

  useEffect(() => {
    (async () => {
      const { planType } = await searchParams;
      const selectedPlan = plans.find(p => p.name === planType)
      if (selectedPlan) setSelectedPlan(selectedPlan);

    })();
  }, [searchParams]);

  const handlePayment = async (duration: 'monthly' | 'yearly') => {
    try {

      const razorpay = new (window as any).Razorpay({
        key: "rzp_test_q7TZXZSHpK9aEn",
        // subscription_id: duration === "monthly" ? selectedPlan.monthlySubscriptionId : selectedPlan.yearlySubscriptionId,
        // subscription_id: 'sub_QSWzbEqWeWjlU6',
        plan_id: 'plan_QSWz6nuQxdL7Sj',
        name: "Syncly",
        description: duration === "monthly" ? "Monthly Subscription" : "Yearly Subscription (2 months free!)",
        theme: { color: "#6366F1" },
        handler: function (response: any) {
          alert("Subscription successful: " + JSON.stringify(response));
        },
      });

      razorpay.open();
    } catch (error) {
      console.error("Payment failed:", error);
      addToast({ description: 'Oops! Something went wrong, please contact us.', color: 'danger' })
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100 dark:bg-gray-900">
      <Script
        type="text/javascript"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center text-sm hover:text-indigo-600 transition mb-6"
        >
          <FiArrowLeft className="mr-2 mb-1" />
          Back
        </button>

        <div className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <FiCheckCircle className="text-indigo-600 w-6 h-6" />
            </div>
          </div>
          <p className=" mt-1">
            Selected Plan: &nbsp;
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {selectedPlan.name}
            </span>
          </p>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Unlock premium features with a subscription.
          </p>
        </div>

        <div className="space-y-4">
          {/* Yearly Plan */}
          <div
            className="cursor-pointer border-2 rounded-lg p-5 transition duration-200 relative border-orange-600 hover:shadow-lg hover:scale-[1.01] hover:border-orange-500"
            onClick={() => handlePayment('yearly')}
          >
            <div className="absolute top-0 right-0 bg-orange-600 text-xs font-bold text-black px-2 py-1 rounded-bl-md">
              2 Months Free!
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Yearly</h3>
                <p className="text-sm text-gray-500">Pay once, enjoy all year</p>
              </div>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
                ${Number(selectedPlan.price.replace('$', '')) * 10}
              </span>
            </div>
          </div>

          {/* Monthly Plan */}
          <div
            onClick={() => handlePayment('monthly')}
            className="cursor-pointer border-2 rounded-lg p-5 transition duration-200 border-indigo-500 shadow-md hover:shadow-lg hover:scale-[1.01] hover:border-indigo-400"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Monthly</h3>
                <p className="text-sm text-gray-500">Billed monthly, cancel anytime</p>
              </div>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
                {selectedPlan.price}
              </span>
            </div>
          </div>
        </div>



        <p className="text-xs text-center text-gray-400 mt-6">
          🔒 Secure payments powered by <span className="font-medium">Razorpay</span>.
        </p>
      </div>
    </div>
  );
}
