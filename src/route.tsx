// Pages
import GroupTrip from "@/pages/GroupTrip"
import Home from "@/pages/Home"
import PrivateTrip from "@/pages/PrivateTrip"

// Types
import type { RouteObject } from "react-router-dom"

export const route: RouteObject[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/group-trip",
    element: <GroupTrip />
  },
  {
    path: "/private-trip",
    element: <PrivateTrip />
  }
]