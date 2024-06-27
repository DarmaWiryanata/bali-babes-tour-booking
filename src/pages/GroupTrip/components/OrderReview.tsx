// React
import { Fragment } from "react"

// Components
import { YourActivity, YourBooking, YourDetail } from "@/components"
import { useStep } from "@/utils"

// Icons
import { TbChevronRight } from "react-icons/tb"

export function OrderReview(params: { onPreviousStep: () => void }) {
  // Vars
  const itenary: {
    description: string
    image: string
    title: string
  }[] = [
    {
      description: "Upon landing at Rio de Janeiro International Airport, our chauffeur will whisk you away to your upscale hotel. Take the evening to settle in and prepare for the adventures ahead. You will enjoy your welcome dinner in a traditional Brazilian churrascaria.",
      image: "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg",
      title: "Welcome to Rio!"
    },
    {
      description: "In the morning, embark on a thrilling Jeep tour through the lush Tijuca Rainforest, the world's largest urban forest. Discover hidden waterfalls, diverse wildlife, and visit the Botanic Garden for a serene escape from the city buzz. In the evening, immerse yourself in the spirit of Carnival with VIP tickets to a dazzling parade. Experience the vibrant costumes, electrifying music, and the sheer joy of this world-largest celebration.",
      image: "https://images.pexels.com/photos/119777/pexels-photo-119777.jpeg",
      title: "Jeep Tour & Carnival"
    },
    {
      description: "You will have the free morning to rest. In the afternoon you will be taken to Barra da Tijuca to fly in a helicopter over the Wonderful City. Marvel at the stunning aerial views of famous beaches, mountains, and landmarks. Free evening to explore Rio on your own terms.",
      image: "https://images.pexels.com/photos/3822113/pexels-photo-3822113.jpeg",
      title: "Helicopter ride"
    }
  ]
  // Hooks
  const { step, setStep } = useStep()

  return (
    <section className="flex md:flex-row flex-col md:divide-x gap-y-10">
      <section className="md:order-1 order-2 grow px-3">
        <YourActivity onPreviousStep={params.onPreviousStep} />

        <section className="flex items-center gap-2">
          {itenary.map((_, key) => {
            // Vars
            const is_selected = key === step

            // Functions
            const Step = (): JSX.Element => (
              <button
                className={`btn btn-sm ${is_selected ? "btn-primary" : "btn-ghost"}`}
                onClick={() => setStep(key)}
              >
                Day {key + 1}
              </button>
            )

            if (key > 0) {
              return (
                <Fragment key={key}>
                  <TbChevronRight />
                  <Step />
                </Fragment>
              )
            }

            return <Step key={key} />
          })}
        </section>

        {itenary.map((item, key) => {
          if (step === key) {
            return (
              <section
                key={key}
                className="p-4"
              >
                <div className="flex lg:flex-row md:flex-col sm:flex-row flex-col gap-3">
                  <section className="prose lg:order-1 md:order-2 sm:order-1 order-2">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </section>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="lg:w-[200px] lg:h-fit sm:w-[200px] sm:h-fit md:w-full md:h-[200px] w-full h-[200px] object-cover grow lg:order-2 order-1"
                  />
                </div>
              </section>
            )
          }

          return <Fragment key={key} />
        })}
      </section>

      <section className="md:order-2 order-1 md:w-[300px] w-full px-3 flex flex-col gap-5">
        <YourBooking>
          <tr>
            <td>Group Trip</td>
            <td className="text-right whitespace-nowrap">${(2000).toLocaleString()}</td>
          </tr>
        </YourBooking>

        <YourDetail />
      </section>
    </section>
  )
}