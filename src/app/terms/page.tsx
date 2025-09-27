import Image from "next/image";
import Link from "next/link";

export default function Terms() {
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

      {/* Terms of Use Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Use</h1>

          <div className="text-gray-600 mb-8">
            <p className="text-lg">Last updated: September 25, 2025</p>
            <p className="mt-2">Effective date: September 25, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Agreement to Terms</h2>
              <p className="mb-4">
                By downloading, installing, or using the Richard mobile application (&quot;the App&quot;), you agree to be bound by these Terms of Use (&quot;Terms&quot;).
                If you do not agree to these Terms, do not use the App.
              </p>
              <p className="mb-4">
                These Terms constitute a legally binding agreement between you and Richard (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) regarding your use of the App and our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description of Service</h2>
              <p className="mb-4">
                Richard is an AI-powered study companion application that helps students transform their learning materials into organized notes,
                summaries, and study tools. Our services include:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Audio recording and transcription of lectures and study sessions</li>
                <li>PDF and document processing and analysis</li>
                <li>YouTube video summarization and note creation</li>
                <li>AI-powered content summarization and organization</li>
                <li>Flashcard generation and study tool creation</li>
                <li>Cloud storage of your study materials and generated content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Audio Recording Responsibilities</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <div className="flex">
                  <svg className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Legal Notice</h3>
                    <p className="text-yellow-700">
                      <strong>You are solely responsible for ensuring that all audio recordings you make comply with applicable laws and regulations.</strong>
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Your Audio Recording Obligations</h3>
              <p className="mb-4">When using Richard&apos;s audio recording features, you agree to:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Obtain proper consent:</strong> Secure all necessary permissions before recording any person, including professors, instructors, classmates, or any other individuals</li>
                <li><strong>Comply with institutional policies:</strong> Follow your school, university, or institution&apos;s policies regarding recording of classes, lectures, or meetings</li>
                <li><strong>Respect privacy laws:</strong> Comply with federal, state, and local privacy and recording laws, including one-party and two-party consent laws</li>
                <li><strong>Honor copyright:</strong> Respect intellectual property rights of recorded content, including lectures, presentations, and educational materials</li>
                <li><strong>Use for personal study only:</strong> Limit use of recordings to your personal educational purposes and not distribute, share, or publish without proper authorization</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Prohibited Recording Activities</h3>
              <p className="mb-4">You may NOT use Richard to record:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Private conversations without consent of all parties</li>
                <li>Confidential or sensitive information without authorization</li>
                <li>Content that violates others&apos; privacy rights</li>
                <li>Materials for commercial use without proper licensing</li>
                <li>Any content that violates applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">File Storage and Content Guidelines</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Acceptable Content</h3>
              <p className="mb-4">You may only upload, store, or process content through Richard that:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>You own or have proper rights to use</li>
                <li>Is for legitimate educational purposes</li>
                <li>Complies with copyright and intellectual property laws</li>
                <li>Does not violate any person&apos;s privacy or other rights</li>
                <li>Is legal in your jurisdiction and ours</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Prohibited Content</h3>
              <p className="mb-4">You may NOT upload, store, or process content that:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Infringes copyright:</strong> Violates copyright, trademark, or other intellectual property rights</li>
                <li><strong>Is illegal:</strong> Contains illegal, harmful, threatening, abusive, or defamatory material</li>
                <li><strong>Violates privacy:</strong> Contains private information of others without consent</li>
                <li><strong>Is inappropriate:</strong> Contains adult content, violence, hate speech, or discriminatory material</li>
                <li><strong>Is commercial:</strong> Is primarily for commercial purposes without proper licensing</li>
                <li><strong>Contains malware:</strong> Includes viruses, malware, or other harmful code</li>
                <li><strong>Violates terms:</strong> Violates these Terms or our other policies</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Content Monitoring and Removal</h3>
              <p className="mb-4">
                While we do not proactively monitor user content, we reserve the right to review, remove, or refuse to process
                any content that we believe violates these Terms or applicable law. We may suspend or terminate accounts that
                repeatedly violate these guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Educational Use and Fair Use</h2>
              <p className="mb-4">
                Richard is designed for educational purposes. While we support legitimate educational use of copyrighted materials
                under fair use principles, you are responsible for:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Determining whether your use qualifies as fair use under applicable copyright law</li>
                <li>Limiting use to personal study and educational purposes</li>
                <li>Not distributing or sharing processed materials beyond fair use limits</li>
                <li>Respecting the rights of content creators and copyright holders</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Account and Responsibilities</h2>
              <p className="mb-4">To use Richard, you must:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Be at least 13 years old (or the age of digital consent in your jurisdiction)</li>
                <li>Provide accurate and complete information when creating your account</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Processing and Data Use</h2>
              <p className="mb-4">
                By using Richard, you understand and agree that:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Your content will be processed by AI systems to provide our services</li>
                <li>We use reputable AI service providers bound by strict data processing agreements</li>
                <li>Your content is not used to train AI models or shared with other users</li>
                <li>AI processing may not be 100% accurate and you should verify important information</li>
                <li>We are not liable for AI processing errors or inaccuracies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subscription and Payment Terms</h2>
              <p className="mb-4">
                If you purchase a paid subscription:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Fees are charged in advance and are non-refundable except as required by law</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>You may cancel your subscription at any time through your account settings</li>
                <li>Changes to pricing will be communicated with advance notice</li>
                <li>We reserve the right to modify or discontinue features with notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability and Disclaimers</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Service Availability</h3>
              <p className="mb-4">
                Richard is provided &quot;as is&quot; and &quot;as available.&quot; We do not guarantee uninterrupted or error-free service.
                We may modify, suspend, or discontinue the service at any time.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">No Legal Advice</h3>
              <p className="mb-4">
                Richard does not provide legal advice regarding recording laws, copyright compliance, or privacy regulations.
                You are responsible for consulting with legal professionals when necessary.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Educational Tool Disclaimer</h3>
              <p className="mb-4">
                Richard is an educational tool that uses AI to process and summarize content. The accuracy of summaries,
                transcriptions, and generated study materials is not guaranteed. Always verify important information with
                original sources.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Limitation of Damages</h3>
              <p className="mb-4">
                To the maximum extent permitted by law, Richard shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to loss of data, educational opportunities,
                or academic performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold Richard harmless from any claims, damages, or expenses arising from:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Your violation of these Terms of Use</li>
                <li>Your violation of applicable laws or regulations</li>
                <li>Your unauthorized recording of audio or processing of content</li>
                <li>Your infringement of third-party rights, including intellectual property rights</li>
                <li>Your use of the Richard app and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Termination</h2>
              <p className="mb-4">
                We may suspend or terminate your access to Richard at any time for:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Violation of these Terms of Use</li>
                <li>Violation of applicable laws or regulations</li>
                <li>Misuse of the service or prohibited content uploads</li>
                <li>Failure to pay applicable fees</li>
                <li>Any other reason at our sole discretion with notice</li>
              </ul>
              <p className="mb-4">
                Upon termination, your right to use Richard ceases immediately. We may delete your account and data in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
              <p className="mb-4">
                We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms
                in the app and sending you a notification. Your continued use of Richard after such changes constitutes acceptance
                of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law and Disputes</h2>
              <p className="mb-4">
                These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to
                conflict of law principles. Any disputes arising under these Terms will be resolved through binding arbitration
                in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <p className="mb-4">
                If you have questions about these Terms of Use, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:legal@richardapp.xyz" className="text-blue-600 hover:underline">legal@richardapp.xyz</a></p>
                <p className="mb-2"><strong>Support:</strong> <a href="mailto:support@richardapp.xyz" className="text-blue-600 hover:underline">support@richardapp.xyz</a></p>
                <p>We will respond to your inquiry within 7 business days.</p>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Reminder</h3>
                <p className="text-blue-700">
                  <strong>By using Richard, you acknowledge that you have read, understood, and agree to comply with these Terms of Use,
                  including your responsibilities regarding legal audio recording and content storage.</strong> If you do not agree with
                  any part of these Terms, please discontinue use of the Richard app immediately.
                </p>
              </div>
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