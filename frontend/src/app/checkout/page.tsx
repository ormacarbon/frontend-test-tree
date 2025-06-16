"use client"

import { Suspense, useEffect, useState } from "react"
import { LoadingOverlay } from "@/components/Loading"
import CheckoutContent from "@/components/Checkout"

export default function CheckoutPage() {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <CheckoutContent />
    </Suspense>
  )
}
