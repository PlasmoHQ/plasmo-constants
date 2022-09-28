import { transformRouteToEndpoint } from "@plasmo/utils/entry-reducer"

export const ApiEndpoint = {
  Itero:
    process.env.PLASMO_ITERO_ENDPOINT ||
    (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"
      ? "https://beta-itero.vercel.app"
      : "https://itero.plasmo.com")
}

export const ChromePolicyApiRoute = {
  Base: `/api/chrome-policy`,
  Hash: `/api/chrome-policy/hash`
}

export const ChromePolicyApiEndpoint = transformRouteToEndpoint(
  ApiEndpoint.Itero,
  ChromePolicyApiRoute
)
