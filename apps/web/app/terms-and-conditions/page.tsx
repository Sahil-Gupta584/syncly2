export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8">
            <h1 className="text-3xl font-bold text-white">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-blue-100">
              Please read these terms carefully before using our platform
            </p>
          </div>

          <div className="px-6 py-8">
            <div className="prose max-w-none">
              <section className="mb-10">
                <p className="text-gray-600 mb-6">
                  These Terms and Conditions ("Terms") govern your use of
                  Syncly's video management platform ("Platform") and all
                  related services. By accessing or using our Platform, you
                  agree to be bound by these Terms. If you disagree with any
                  part of these Terms, you may not access the Platform.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-sm text-blue-700">
                    Last updated: May 3, 2025
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  1. Definitions
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    <strong>"Service"</strong> refers to the video management
                    platform and all features provided by Syncly.
                  </li>
                  <li>
                    <strong>"User"</strong> refers to any individual who
                    accesses or uses the Platform, whether as a content creator,
                    editor, or in any other capacity.
                  </li>
                  <li>
                    <strong>"Content"</strong> refers to any videos, images,
                    text, or other materials uploaded, shared, or created on the
                    Platform.
                  </li>
                  <li>
                    <strong>"Subscription"</strong> refers to the paid or free
                    plan that provides access to the Platform and its features.
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  2. Account Registration and Access
                </h2>
                <p className="text-gray-600 mb-4">
                  To use certain features of the Platform, you must register for
                  an account. When you register, you agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>
                    Accept responsibility for all activities that occur under
                    your account
                  </li>
                  <li>
                    Notify us immediately of any unauthorized access or use of
                    your account
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We reserve the right to disable any account if we believe you
                  have violated these Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  3. Subscription and Payment
                </h2>
                <p className="text-gray-600 mb-4">
                  Syncly offers various subscription tiers with different
                  features and pricing. By subscribing:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    You agree to pay all fees associated with your selected
                    subscription tier
                  </li>
                  <li>
                    Payments are processed securely through Razorpay, subject to
                    their terms and conditions
                  </li>
                  <li>
                    Subscription fees are billed in advance on a recurring basis
                    (monthly or annually)
                  </li>
                  <li>
                    You authorize us to charge your payment method for all
                    subscription fees
                  </li>
                  <li>
                    All fees are non-refundable except as expressly provided in
                    these Terms
                  </li>
                </ul>
                <div className="bg-gray-100 p-6 rounded-lg my-6">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Subscription Cancellation:
                  </h3>
                  <p className="text-gray-600">
                    You may cancel your subscription at any time through your
                    account settings. Cancellation will take effect at the end
                    of your current billing cycle. You will not receive a refund
                    for the current billing period, but you will not be charged
                    for subsequent periods.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  4. User Content and Licensing
                </h2>
                <p className="text-gray-600 mb-4">
                  Users retain ownership of all Content they upload to the
                  Platform. However, by uploading Content, you grant Syncly:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    A worldwide, non-exclusive, royalty-free license to use,
                    store, display, reproduce, and distribute your Content
                    solely for the purpose of providing and improving the
                    Platform
                  </li>
                  <li>
                    The right to remove or refuse to display any Content that
                    violates these Terms or applicable laws
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">
                  You represent and warrant that:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    You own or have the necessary rights to use and authorize
                    Syncly to use your Content
                  </li>
                  <li>
                    Your Content does not violate any third-party intellectual
                    property rights
                  </li>
                  <li>
                    Your Content does not violate any applicable laws or
                    regulations
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  5. Acceptable Use Policy
                </h2>
                <p className="text-gray-600 mb-4">
                  When using our Platform, you agree not to:
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <div className="ml-3">
                    <p className="text-sm text-red-700 font-medium">
                      Prohibited Activities:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-red-700 mt-2">
                      <li>
                        Upload or share any Content that is illegal, harmful,
                        threatening, abusive, defamatory, or otherwise
                        objectionable
                      </li>
                      <li>
                        Infringe upon any patent, trademark, trade secret,
                        copyright, or other intellectual property rights
                      </li>
                      <li>
                        Impersonate any person or entity, or falsely state or
                        misrepresent your affiliation with a person or entity
                      </li>
                      <li>
                        Use the Platform to transmit any unsolicited advertising
                        or promotional materials
                      </li>
                      <li>
                        Interfere with or disrupt the Platform or
                        servers/networks connected to the Platform
                      </li>
                      <li>
                        Attempt to gain unauthorized access to any portion of
                        the Platform
                      </li>
                      <li>
                        Use the Platform for any purpose that is unlawful or
                        prohibited by these Terms
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-600">
                  Violation of this Acceptable Use Policy may result in the
                  termination of your account.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-gray-600 mb-4">
                  The Platform, including all of its content, features, and
                  functionality (including but not limited to all information,
                  software, text, displays, images, video, audio, and the
                  design, selection, and arrangement thereof), are owned by
                  Syncly, its licensors, or other providers of such material and
                  are protected by copyright, trademark, patent, trade secret,
                  and other intellectual property or proprietary rights laws.
                </p>
                <p className="text-gray-600 mb-4">
                  You are granted a limited, non-exclusive, non-transferable,
                  and revocable license to access and use the Platform solely
                  for your personal or business use in accordance with these
                  Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  7. Data Privacy and Security
                </h2>
                <p className="text-gray-600 mb-4">
                  We respect your privacy and are committed to protecting your
                  personal information. Our Privacy Policy, which is
                  incorporated into these Terms by reference, explains how we
                  collect, use, and disclose information about you.
                </p>
                <div className="bg-gray-100 p-6 rounded-lg my-6">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Data Security:
                  </h3>
                  <p className="text-gray-600 mb-3">
                    We implement appropriate technical and organizational
                    measures to safeguard your data. However, no internet
                    transmission is completely secure. We cannot guarantee the
                    security of data transmitted to our Platform.
                  </p>
                  <p className="text-gray-600">
                    You are responsible for maintaining the confidentiality of
                    your account credentials and for any activities that occur
                    under your account.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-gray-600 mb-4">
                  To the maximum extent permitted by law, Syncly shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages, including but not limited to, damages for
                  loss of profits, goodwill, use, data, or other intangible
                  losses, resulting from:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Your use or inability to use the Platform</li>
                  <li>
                    Any unauthorized access to or use of our servers and/or any
                    personal information stored therein
                  </li>
                  <li>
                    Any interruption or cessation of transmission to or from the
                    Platform
                  </li>
                  <li>
                    Any bugs, viruses, trojan horses, or the like that may be
                    transmitted to or through the Platform
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">
                  In any event, our total liability to you for all claims
                  arising from or related to the Platform shall not exceed the
                  amount paid by you, if any, for accessing the Platform during
                  the twelve (12) months preceding the claim.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  9. Indemnification
                </h2>
                <p className="text-gray-600 mb-4">
                  You agree to defend, indemnify, and hold harmless Syncly, its
                  affiliates, licensors, and service providers, and its and
                  their respective officers, directors, employees, contractors,
                  agents, licensors, suppliers, successors, and assigns from and
                  against any claims, liabilities, damages, judgments, awards,
                  losses, costs, expenses, or fees (including reasonable
                  attorneys' fees) arising out of or relating to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Your violation of these Terms</li>
                  <li>Your Content</li>
                  <li>Your use of the Platform</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  10. Termination
                </h2>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your account and access to the
                  Platform immediately, without prior notice or liability, for
                  any reason, including but not limited to a breach of these
                  Terms.
                </p>
                <p className="text-gray-600 mb-4">
                  Upon termination, your right to use the Platform will cease
                  immediately. All provisions of these Terms which by their
                  nature should survive termination shall survive, including but
                  not limited to ownership provisions, warranty disclaimers,
                  indemnity, and limitations of liability.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  11. Modifications to the Platform and Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify or discontinue, temporarily or
                  permanently, the Platform (or any part thereof) with or
                  without notice. We shall not be liable to you or any third
                  party for any modification, suspension, or discontinuance of
                  the Platform.
                </p>
                <p className="text-gray-600 mb-4">
                  We may revise these Terms from time to time. The most current
                  version will always be posted on our website. By continuing to
                  access or use the Platform after revisions become effective,
                  you agree to be bound by the revised Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  12. Governing Law and Dispute Resolution
                </h2>
                <p className="text-gray-600 mb-4">
                  These Terms shall be governed by and construed in accordance
                  with the laws of [Your Jurisdiction], without regard to its
                  conflict of law provisions.
                </p>
                <p className="text-gray-600 mb-4">
                  Any dispute arising out of or relating to these Terms or the
                  Platform shall first be resolved through good-faith
                  negotiations. If such negotiations fail, the dispute shall be
                  submitted to binding arbitration in accordance with the rules
                  of [Relevant Arbitration Body]. The arbitration shall take
                  place in [Your City, State/Country].
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  13. Contact Information
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms, please contact
                  us:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">Email:</h3>
                      <p className="text-blue-600">guptas3067@gmail.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address:</h3>
                      <p className="text-gray-600">
                        Syncly Inc.
                        <br />
                        Mumbai,
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  By using our Platform, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
