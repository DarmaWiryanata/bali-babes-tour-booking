// React
import { useState } from "react"

// Icons
import { TbCheck } from "react-icons/tb"

export function Activity() {
  // Vars
  const activity_list: {
    title: string
    image: string
    description: string
    price: number
  }[] = [
    {
      title: "Exploring Ubud Surrounding Tour",
      image: "https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg",
      description: "$47 pp with entrances / $35 pp without entrances",
      price: 47
    },
    {
      title: "Exploring Southern Bali Tour",
      image: "https://images.pexels.com/photos/9359159/pexels-photo-9359159.jpeg",
      description: "$49 pp with entrances / $39 pp without entrances",
      price: 49
    },
    {
      title: "Cool Mountain Lake Temple Tour",
      image: "https://images.pexels.com/photos/9260617/pexels-photo-9260617.jpeg",
      description: "$54 pp with entrances / $44 pp without entrances",
      price: 54
    },
    {
      title: "2 Best Snorkeling",
      image: "https://images.pexels.com/photos/4609196/pexels-photo-4609196.jpeg",
      description: "$75 pp (Pricing based on minimum of 2 people)",
      price: 75
    }
  ]

  // Hooks
  const [selectedActivity, setActivity] = useState<number[]>([])

  return (
    <section className="flex flex-wrap justify-center gap-5 mb-20">
      {activity_list.map((item, key) => {
        // Vars
        const isSelected: boolean = selectedActivity.findIndex(item => item === key) !== -1

        return (
          <section
            key={key}
            className="h-full w-[300px] cursor-pointer relative"
            onClick={() => {
              // Vars
              const data = selectedActivity.findIndex(item => item === key)
              const activity = [...selectedActivity]

              if (data === -1) {
                activity.push(key)
              } else {
                activity.splice(data, 1)
              }

              setActivity(activity)
            }}
          >
            <section className={`mx-auto w-full rounded-full transition border border-2 p-3 ${isSelected ? "scale-[101%] border-primary" : "border-black border-dashed"}`}>
              <div
                className="w-full aspect-square rounded-full bg-cover bg-bottom"
                style={{ backgroundImage: `url(${item.image})` }}
              >
              </div>
            </section>
  
            <div className={`my-3 text-2xl text-center ${isSelected && "text-primary font-bold"}`}>{item.title}</div>

            {isSelected && (
              <div className="absolute top-[20px] left-[5px] w-[50px] h-[50px] rounded-full flex flex-col justify-center items-center bg-primary text-white">
                <TbCheck />
              </div>
            )}
          </section>
        )
      })}
    </section>
  )
}