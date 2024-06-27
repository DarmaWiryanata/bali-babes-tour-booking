// Components
import { Input } from "@/components"

// Icons
import { TbShoppingCart } from "react-icons/tb"

export function YourDetail() {
  return (
    <section>
      <div className="text-lg font-bold">Your Detail</div>
      <Input label="First Name" />
      <Input label="Last Name" />

      <Input
        label="Email"
        type="email"
      />

      <button className="mt-5 w-full btn btn-primary btn-outline">
        <TbShoppingCart /> Order Now
      </button>
    </section>
  )
}