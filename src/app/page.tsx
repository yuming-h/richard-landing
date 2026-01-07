import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/richard-character/richard-no-background.png"
              alt="Richard mascot"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-gray-800">Richard</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#screenshots"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Screenshots
            </a>
            <Link
              href="/support"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Support
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/richard-character/richard-hi.png"
              alt="Richard AI mascot waving"
              width={200}
              height={200}
              className="drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Meet <span className="text-blue-600">Richard</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            Your AI-Powered Study Companion
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Supercharge the way you learn with Richard. Turn lectures, YouTube videos, and PDFs
            into clear notes, summaries, and study tools—so you can focus on understanding, not just reviewing.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://apps.apple.com/us/app/richard-ai-notes-and-study/id6752790082"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.yuming.richard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Android
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Why Richard?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Everything you need to study smarter, not harder
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2M7 4h10l.83 2.12a1 1 0 010 .76l-.83 2.12H7l-.83-2.12a1 1 0 010-.76L7 4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload Lectures & Audio</h3>
              <p className="text-gray-600">Automatically transcribe, highlight key points, and save time with AI-powered audio processing.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 002.5-2.5V6a2.5 2.5 0 00-2.5-2.5H9V10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 6v.01M9 6v.01M12 14l3 3-3 3-3-3 3-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Learn from YouTube</h3>
              <p className="text-gray-600">Summarize videos into structured notes you can review anytime, anywhere.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">PDF & Document Support</h3>
              <p className="text-gray-600">Extract important insights from textbooks and articles with intelligent document processing.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">AI-Powered Summaries</h3>
              <p className="text-gray-600">Get concise explanations and breakdowns of complex material powered by advanced AI.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Stay Organized</h3>
              <p className="text-gray-600">Keep all your learning resources and notes in one organized, easily searchable place.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Flashcards & Practice</h3>
              <p className="text-gray-600">Reinforce concepts with instant flashcards and quizzes generated from your content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              See Richard in Action
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Beautiful, intuitive design that makes studying enjoyable
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <Image
                  src="/screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-09-24 at 19.24.36.png"
                  alt="Richard app interface"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <Image
                  src="/screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-09-24 at 20.00.15.png"
                  alt="Richard note-taking feature"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <Image
                  src="/screenshots/Simulator Screenshot - iPhone 16 Pro - 2025-09-24 at 20.25.43.png"
                  alt="Richard study tools"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Start Learning the Smart Way
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Whether you&apos;re preparing for exams, learning a new skill, or exploring a topic you love,
            Richard makes studying faster, smarter, and more effective.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/richard-ai-notes-and-study/id6752790082"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.yuming.richard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Android
            </a>
          </div>
        </div>
      </section>

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