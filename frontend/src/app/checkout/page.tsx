"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Logo } from '@/components/Logo'
import { CheckoutForm } from '@/components/CheckoutForm'
import { SummaryCard } from '@/components/SummaryCard'
import { Separator } from '@/components/ui/separator'

export default function CheckoutPage() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 768)
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  if (isDesktop) {
    return (
      <div className="min-h-screen bg-background flex overflow-hidden">
        <div className="w-3/5 flex items-center justify-center">
          <div className="w-full max-w-md space-y-6">
            <Logo />
            <CheckoutForm isDesktop={true} />
          </div>
        </div>
        
        <Separator orientation="vertical" className="w-0.5 h-screen" />
        
        <div className="w-2/5 flex items-center justify-center">
          <div className="w-full max-w-sm space-y-6">
            <div className="w-full h-48 flex items-center justify-center">
              <Image 
                src="/card.svg" 
                alt="Credit Card" 
                width={351}
                height={214}
                className="w-full h-full object-contain"
              />
            </div>
            <SummaryCard isDesktop={true} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      <div className="p-4">
        <div className="mb-6">
          <Logo />
        </div>
        <SummaryCard isDesktop={false} />    
        <CheckoutForm isDesktop={false} />
      </div>
    </div>
  )
}