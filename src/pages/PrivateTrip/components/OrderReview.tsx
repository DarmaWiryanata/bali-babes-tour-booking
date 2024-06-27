// React
import { Fragment } from "react"

// Components
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { YourActivity, YourBooking, YourDetail } from "@/components"

// Icons
import { TbChevronUp } from "react-icons/tb"

export function OrderReview(params: { onPreviousStep: () => void }) {
  return (
    <section className="flex md:flex-row flex-col md:divide-x gap-y-10">
      <section className="md:order-1 order-2 grow px-3">
        <YourActivity onPreviousStep={params.onPreviousStep} />

        <Disclosure>
          {({ open }) => (
            <Fragment>
              <DisclosureButton className="flex w-full justify-between items-center rounded-lg px-4 py-2 text-left font-medium border">
                <span>Exploring Ubud Surrounding Tour - $47</span>
                <TbChevronUp className={`h-5 w-5 transition ${open && 'rotate-180 transform'}`} />
              </DisclosureButton>

              <DisclosurePanel className="p-4 flex gap-3">
                <img
                  src="https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg"
                  alt="Exploring Ubud Surrounding Tour"
                  className="max-w-[100px] rounded-xl"
                />

                <div>$47 pp with entrances / $35 pp without entrances</div>
              </DisclosurePanel>
            </Fragment>
          )}
        </Disclosure>
      </section>

      <section className="md:order-2 order-1 md:w-[300px] w-full px-3 flex flex-col gap-5">
        <YourBooking>
          <tr>
            <td>Private Trip x2</td>
            <td className="text-right whitespace-nowrap">${(2000).toLocaleString()}</td>
          </tr>
        </YourBooking>

        <YourDetail />
      </section>
    </section>
  )
}