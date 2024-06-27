// React
import { PropsWithChildren } from "react"

export function YourBooking(params: PropsWithChildren<{}>) {
  return (
    <section>
      <div className="text-lg font-bold">Your Booking</div>

      <table className="w-full">
        <tbody>
          {params.children}

          <tr>
            <td>Additional Fee</td>
            <td className="text-right whitespace-nowrap">${(0).toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <div className="w-full p-4 border rounded-3xl flex justify-between items-center gap-3 mt-3">
        <div className="text-xl font-bold">Total</div>
        <div className="text-xl font-bold">${(2000).toLocaleString()}</div>
      </div>
    </section>
  )
}