import type { ManifestContentScript } from "./content-script"
import type { ManifestPermission } from "./permission"

export type { ManifestContentScript } from "./content-script"
export * from "./icon"
export { permissionMap } from "./permission"
export type { ManifestPermission } from "./permission"

export type ExtensionManifest = {
  manifest_version: 3
  version: string

  name: string
  description: string
  author?: string
  homepage_url?: string

  key?: string

  permissions?: ManifestPermission[]
  update_url?: string

  icons?: Record<string, string>
  action?: {
    default_icon?: Record<string, string>
    default_popup?: string
  }

  options_ui?: {
    page: string
    open_in_tab?: boolean
  }

  devtools_page?: string

  content_scripts?: ManifestContentScript[]

  background?: {
    service_worker: string
    type?: "module"
  }

  chrome_url_overrides?: {
    newtab?: string
    history?: string
    bookmarks?: string
  }

  host_permissions?: string[]
}
