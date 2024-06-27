// React
import { Fragment } from "react"

// Components
import { Layout, Steps } from "@/components"
import { Activity, OrderReview } from "./components"

// Icons
import { TbMinus, TbPlus } from "react-icons/tb"

// Utils
import { step_list, useStep } from "@/utils"

export default function PrivateTrip() {
  // Hooks
  const { step, setStep } = useStep()

  return (
    <Fragment>
      <Layout>
        <section className="m-5">
          <section className="flex flex-col gap-3">
            <Steps
              currentstep={step}
              list={step_list}
            />

            {step === 0 && <Activity />}
            {step === 1 && <OrderReview onPreviousStep={() => setStep(0)} />}
          </section>
        </section>
      </Layout>

      {step === 0 && (
        <div className="fixed bottom-0 w-full bg-base-100 shadow-inner px-3">
          <section className="max-w-[1200px] w-full mx-auto my-5">
            <section className="flex justify-between gap-3">
              <section className="flex md:flex-row flex-col md:items-center gap-3">
                <div className="md:text-xl text-sm">How many people will join the trip?</div>

                <section className="flex items-center gap-1">
                  <button className="btn btn-sm btn-circle btn-outline">
                    <TbMinus />
                  </button>

                  <div className="w-[30px] text-center">0</div>

                  <button className="btn btn-sm btn-circle btn-outline">
                    <TbPlus />
                  </button>
                </section>
              </section>
              
              <section className="flex items-center gap-3">
                <div className="text-2xl font-bold">${(1000).toLocaleString()}</div>

                <button
                  className="btn btn-primary btn-outline"
                  onClick={() => setStep(1)}
                >
                  Next
                </button>
              </section>
            </section>
          </section>
        </div>
      )}
    </Fragment>
  )
}