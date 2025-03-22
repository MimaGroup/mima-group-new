"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        companyName: formData.get("companyName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      })

      // Reset form
      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#1A1F2C] p-8 rounded-xl">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1">
            First Name
          </label>
          <Input id="firstName" name="firstName" required className="bg-[#0B0F17] border-gray-700 text-white" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-1">
            Last Name
          </label>
          <Input id="lastName" name="lastName" required className="bg-[#0B0F17] border-gray-700 text-white" />
        </div>
      </div>
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-400 mb-1">
          Company Name
        </label>
        <Input id="companyName" name="companyName" required className="bg-[#0B0F17] border-gray-700 text-white" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
          Email
        </label>
        <Input id="email" name="email" type="email" required className="bg-[#0B0F17] border-gray-700 text-white" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
          Phone Number
        </label>
        <Input id="phone" name="phone" type="tel" required className="bg-[#0B0F17] border-gray-700 text-white" />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full bg-[#4169E1] hover:bg-[#4169E1]/80 text-white">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  )
}