// Components
import { Layout, Steps } from "@/components"
import { Activity, OrderReview } from "./components"

// Utils
import { step_list, useStep } from "@/utils"

export default function GroupTrip() {
  // Hooks
  const { step, setStep } = useStep()

  return (
    <Layout>
      <section className="m-5">
        <section className="flex flex-col gap-3">
          <Steps
            currentstep={step}
            list={step_list}
          />

          {step === 0 && <Activity onNextStep={() => setStep(1)} />}
          {step === 1 && <OrderReview onPreviousStep={() => setStep(0)} />}
        </section>
      </section>
    </Layout>
  )
}