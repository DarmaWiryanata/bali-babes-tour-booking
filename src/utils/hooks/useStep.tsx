// React
import { useState } from "react"

export function useStep() {
  // Hooks
  const [step, setStep] = useState<number>(0)

  return { step, setStep }
}