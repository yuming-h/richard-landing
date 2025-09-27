import Image from "next/image";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/richard-character/richard-no-background.png"
              alt="Richard mascot"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-gray-800">Richard</span>
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/#features"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#screenshots"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Screenshots
            </Link>
            <Link
              href="/support"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Support
            </Link>
          </div>
        </nav>
      </header>

      {/* Privacy Policy Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>

          <div className="text-gray-600 mb-8">
            <p className="text-lg">Last updated: September 25, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Privacy Commitment</h2>
              <p className="mb-4">
                At Richard, we are committed to protecting your privacy and ensuring the security of your personal information.
                <strong> We do not share, sell, or rent your personal data to third parties for commercial purposes.</strong>
                Your trust is fundamental to our mission of helping students learn more effectively.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Information You Provide</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Account information (email address, username)</li>
                <li>Study materials you upload (audio recordings, PDFs, documents)</li>
                <li>Notes, summaries, and flashcards you create</li>
                <li>Preferences and settings you configure</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Information We Collect Automatically</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>App usage analytics (features used, time spent, crash reports)</li>
                <li>Device information (device type, operating system version)</li>
                <li>Network information (IP address, connection type)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your information solely to:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Provide our services:</strong> Process your study materials, generate summaries and notes, create flashcards</li>
                <li><strong>Improve your experience:</strong> Personalize content recommendations and optimize app performance</li>
                <li><strong>Maintain security:</strong> Protect against fraud, abuse, and unauthorized access</li>
                <li><strong>Provide support:</strong> Respond to your questions and technical issues</li>
                <li><strong>Send important updates:</strong> Communicate about service changes, security updates, and new features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Processing and Your Content</h2>
              <p className="mb-4">
                Richard uses artificial intelligence to analyze your study materials and generate summaries, notes, and flashcards.
                Your content is processed securely using industry-standard encryption. We use reputable AI service providers who
                are bound by strict data processing agreements that prohibit them from using your data for their own purposes.
              </p>
              <p className="mb-4">
                <strong>Your study materials remain private and are not used to train AI models or shared with other users.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Storage and Security</h2>
              <p className="mb-4">We implement robust security measures to protect your data:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols</li>
                <li><strong>Access controls:</strong> Strict employee access controls with regular security training</li>
                <li><strong>Regular audits:</strong> Periodic security assessments and vulnerability testing</li>
                <li><strong>Secure infrastructure:</strong> Data stored on secure, compliant cloud servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Sharing and Disclosure</h2>
              <p className="mb-4">
                <strong>We do not sell, rent, or share your personal information with third parties for commercial purposes.</strong>
                We may only disclose your information in these limited circumstances:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>With your consent:</strong> When you explicitly authorize us to share specific information</li>
                <li><strong>Service providers:</strong> With trusted vendors who help us provide our services (all bound by strict confidentiality agreements)</li>
                <li><strong>Legal requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
                <li><strong>Business transfers:</strong> In the unlikely event of a merger or acquisition (with continued privacy protections)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights and Choices</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Restriction:</strong> Request that we limit how we use your information</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@richard-app.com" className="text-blue-600 hover:underline">privacy@richard-app.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Retention</h2>
              <p className="mb-4">
                We retain your information only as long as necessary to provide our services and fulfill the purposes outlined in this policy.
                When you delete your account, we will delete your personal information within 30 days, except where we are required to retain
                certain information for legal or regulatory purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers
                are made in accordance with applicable data protection laws and with appropriate safeguards in place to protect your privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Children&apos;s Privacy</h2>
              <p className="mb-4">
                While Richard is designed for high school and college students, we do not knowingly collect personal information from
                children under 13 years of age. If we become aware that we have collected information from a child under 13, we will
                take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.
                We will notify you of any material changes by posting the updated policy in the app and sending you a notification.
                Your continued use of Richard after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@richard-app.com" className="text-blue-600 hover:underline">privacy@richard-app.com</a></p>
                <p className="mb-2"><strong>Subject:</strong> Privacy Policy Question</p>
                <p>We will respond to your inquiry within 7 business days.</p>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <p className="text-sm text-gray-500 italic">
                This privacy policy is effective as of the date listed above and applies to all users of the Richard app and website.
                By using Richard, you acknowledge that you have read, understood, and agree to be bound by this privacy policy.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/richard-character/richard-no-background.png"
                alt="Richard mascot"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold">Richard</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/support" className="hover:text-white transition-colors">
                Support
              </Link>
              <span>© 2025 Richard. Your AI-powered study companion.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}