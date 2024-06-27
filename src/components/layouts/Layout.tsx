// React
import { PropsWithChildren } from "react"

// Icons
import { TbHome } from "react-icons/tb"

// Third-Party Libraries
import { Link } from "react-router-dom"

export function Layout(params: PropsWithChildren<{}>): JSX.Element {
  return (
    <section className="min-h-dvh m-3 flex flex-col justify-center">
      <div className="max-w-[1200px] w-full mx-auto rounded-3xl overflow-hidden shadow border">
        <section className="m-5 flex justify-between gap-3">
          <div className="text-3xl font-bold">Bali Babes</div>

          <Link
            to="#"
            className="inline-block overflow-hidden"
          >
            <button
              className="btn btn-secondary btn-outline"
              title="Back To Homepage"
            >
              <TbHome className="block md:hidden" />
              <span className="md:block hidden">Back To Homepage</span>
            </button>
          </Link>
        </section>

        {params.children}
      </div>
    </section>
  )
}