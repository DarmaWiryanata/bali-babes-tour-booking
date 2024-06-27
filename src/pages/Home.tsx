// React
import { Fragment } from "react"

export default function Home(): JSX.Element {
  return (
    <Fragment>
      <div className="text-2xl text-center font-bold my-3">Pick Your Trip</div>

      <section className="grid md:grid-cols-2">
        <a
          href="#"
          className="inline-block overflow-hidden"
        >
          <div
            className="h-[600px] bg-center bg-cover cursor-pointer transition duration-1000 md:hover:scale-110"
            style={{ backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('https://images.pexels.com/photos/25662334/pexels-photo-25662334/free-photo-of-woman-with-headscarf-riding-camel-near-pyramid-in-egypt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
          >
            <section className="h-full flex flex-col justify-center items-center">
              <div className="w-80 h-80 border border-dashed rounded-full flex flex-col justify-center items-center">
                <div className="text-white text-2xl font-bold">Private Trip</div>
              </div>
            </section>
          </div>
        </a>

        <a
          href="#"
          className="inline-block overflow-hidden"
        >
          <div
            className="h-[600px] bg-center bg-cover cursor-pointer transition duration-1000 md:hover:scale-110"
            style={{ backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('https://images.pexels.com/photos/887828/pexels-photo-887828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
          >
            <section className="h-full flex flex-col justify-center items-center">
              <div className="w-80 h-80 border border-dashed rounded-full flex flex-col justify-center items-center">
                <div className="text-white text-2xl font-bold">Group Trip</div>
              </div>
            </section>
          </div>
        </a>
      </section>
    </Fragment>
  )
}