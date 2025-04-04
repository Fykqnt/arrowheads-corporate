import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-gray-800 px-4 py-6 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Arrowheads Inc. All rights reserved.
        </div>
        
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end">
          <a href="/privacy" className="text-gray-400 hover:text-white text-xs md:text-sm mx-2 my-1 md:my-0 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white text-xs md:text-sm mx-2 my-1 md:my-0 transition-colors">
            Terms of Service
          </a>
          
          {/* Logo in the bottom right */}
          <div className="ml-4 md:ml-6 relative">
            <Image 
              src="/assets/ahz_logo_icon.png"
              alt="Arrowheads Logo" 
              width={160} 
              height={40}
              className="w-[120px] h-[30px] md:w-[160px] md:h-[40px] opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

