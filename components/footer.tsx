import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 mt-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="pointer-events-auto">
            <p className="text-gray-400">© 2025 Arrowheads Inc. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 pointer-events-auto">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

