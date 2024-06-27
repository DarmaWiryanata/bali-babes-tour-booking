// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'

// Utils
import { trip_list } from "../utils"

export function Activity(params: { onNextStep: () => void }) {
  return (
    <section className="flex flex-wrap justify-center gap-3">
      {trip_list.map((item, key) => (
        <section
          key={key}
          className="cursor-pointer"
          onClick={params.onNextStep}
        >
          <Swiper
            loop
            autoplay
            className="rounded-2xl transition hover:shadow-xl"
            style={{
              width: "300px",
              height: "400px"
            }}
          >
            {item.images.map((i, key) => (
              <SwiperSlide key={key}>
                <img
                  src={i}
                  alt={`${item.title} - ${key + 1}`}
                  className="h-full w-full object-cover m-0 brightness-75"
                />
              </SwiperSlide>
            ))}

            <div className="absolute inset-0 p-5 z-[10] flex flex-col justify-between">
              <section className="flex justify-end gap-3">
                <div className="bg-black/50 rounded-2xl text-white prose text-center px-4">
                  <h1 className="text-white m-0">{item.days}</h1>
                  <div>Days</div>
                </div>

                <div className="bg-black/50 rounded-2xl text-white prose text-center px-3">
                  <h1 className="text-white m-0">{item.nights}</h1>
                  <div>Nights</div>
                </div>
              </section>
              <section className="prose">
                <h2 className="mt-0 text-white">{item.title}</h2>
              </section>
            </div>
          </Swiper>
        </section>
      ))}
    </section>
  )
}