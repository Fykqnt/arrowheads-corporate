"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navigation from "@/components/navigation"
import BubbleBackground from "@/components/bubble-background"
import Footer from "@/components/footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    faculty: '',
    message: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.faculty.trim()) newErrors.faculty = 'Faculty is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      try {
        // Send form data to API route
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to submit form');
        }
        
        // Show success message
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          faculty: '',
          message: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        // Optional: Add error state and display to user
        // setSubmissionError(error.message);
      }
    }
  }

  return (
    <main className="relative min-h-screen bg-[#121212] text-white overflow-hidden flex flex-col">
      {/* Background with bubbles */}
      <div className="absolute inset-[40px] z-0 pointer-events-auto">
        <BubbleBackground />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 pointer-events-none flex-grow flex flex-col">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors pointer-events-auto">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        {/* Navigation on the right */}
        <div className="fixed top-0 right-0 h-full w-1/3 max-w-xs z-20 pointer-events-none pr-0">
          <Navigation />
        </div>
        
        {/* Contact Form */}
        <div className="relative flex-grow w-full max-w-2xl mx-auto my-8 flex items-center">
          <div className="w-full backdrop-blur-md bg-black/30 rounded-lg p-8 pointer-events-auto">
            <h1 className="text-3xl font-bold mb-6 text-blue-400">Contact Us</h1>
            
            {isSubmitted ? (
              <div className="backdrop-blur-md bg-green-950/50 border border-green-500/50 p-6 rounded-lg text-center">
                <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
                <p className="mb-4">Your contact form has been sent successfully.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-white/10 hover:bg-white/20 transition duration-300 px-4 py-2 rounded-md"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xl font-semibold text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-black/20 backdrop-blur-sm border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xl font-semibold text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-black/20 backdrop-blur-sm border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="faculty" className="block text-xl font-semibold text-gray-300 mb-1">Faculty</label>
                  <input
                    type="text"
                    id="faculty"
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleChange}
                    className={`w-full bg-black/20 backdrop-blur-sm border ${errors.faculty ? 'border-red-500' : 'border-gray-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200`}
                  />
                  {errors.faculty && <p className="mt-1 text-sm text-red-400">{errors.faculty}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xl font-semibold text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-black/20 backdrop-blur-sm border ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-500/80 hover:bg-blue-600/80 text-white py-3 px-6 rounded-md font-medium transition duration-300 backdrop-blur-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </main>
  )
} 