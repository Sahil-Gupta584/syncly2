export default function CancellationAndRefund() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8">
            <h1 className="text-3xl font-bold text-white">
              Cancellation and Refund Policy
            </h1>
            <p className="mt-2 text-blue-100">Effective as of May 3, 2025</p>
          </div>

          <div className="px-6 py-8">
            <div className="prose max-w-none">
              <section className="mb-8">
                <p className="text-gray-600">
                  This policy outlines the cancellation and refund procedures
                  for Syncly's video management platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Subscription Cancellation
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    You may cancel your subscription at any time through your
                    account settings.
                  </li>
                  <li>
                    Upon cancellation, you will maintain access to your
                    subscription features until the end of your current billing
                    cycle.
                  </li>
                  <li>
                    Your account will automatically downgrade to the free tier
                    after the current billing period ends.
                  </li>
                  <li>
                    We do not send reminders before subscription renewal.
                    Managing subscription status is your responsibility.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Refund Policy
                </h2>
                <div className="bg-gray-100 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Standard Subscriptions:
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>
                      Monthly plans: No prorated refunds for partial months.
                    </li>
                    <li>
                      Annual plans: No prorated refunds except where required by
                      law.
                    </li>
                    <li>
                      Trial periods: No refund is applicable as no charge is
                      made during the trial.
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Exceptions:
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>
                      Full refunds are provided if requested within 48 hours of
                      initial purchase, provided the service has not been
                      substantially used.
                    </li>
                    <li>
                      Service outages exceeding 24 consecutive hours may qualify
                      for partial refunds, determined on a case-by-case basis.
                    </li>
                    <li>
                      Refunds may be issued for billing errors or duplicate
                      charges.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  How to Request a Refund
                </h2>
                <p className="text-gray-600 mb-4">To request a refund:</p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Contact our support team at billing@creatorcollab.com</li>
                  <li>
                    Include your account email and the reason for your refund
                    request
                  </li>
                  <li>
                    For billing errors, provide relevant transaction details
                  </li>
                </ol>
                <p className="text-gray-600 mt-4">
                  We aim to respond to all refund requests within 2 business
                  days.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Payment Processing
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Approved refunds are processed through your original payment
                    method.
                  </li>
                  <li>
                    Refunds typically appear in your account within 5-10
                    business days, depending on your payment provider.
                  </li>
                  <li>
                    All refunds are issued in the original currency of payment.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-4">
                  For questions regarding this policy, please contact us:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-800">Email: guptas3067@gmail.com</p>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  This policy may be updated from time to time. The latest
                  version will always be available on our website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
