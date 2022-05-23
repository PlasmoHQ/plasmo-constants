import { transformRouteToEndpoint } from "@plasmo/utils"

export const ApiEndpoint = {
  Itero: process.env.PLASMO_ITERO_ENDPOINT || "https://itero.plasmo.com"
}

export const ChromePolicyApiRoute = {
  Base: `/api/chrome-policy`,
  Hash: `/api/chrome-policy/hash`
}

export const ChromePolicyApiEndpoint = transformRouteToEndpoint(
  ApiEndpoint.Itero,
  ChromePolicyApiRoute
)
