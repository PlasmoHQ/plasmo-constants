import type { ManifestContentScript } from "./content-script"
import type { ManifestPermission } from "./permission"

export type { ManifestContentScript } from "./content-script"
export * from "./icon"
export { permissionMap } from "./permission"
export type { ManifestPermission } from "./permission"

type BaseExtensionManifest = {
  version: string

  name: string
  description: string
  author?: string
  homepage_url?: string

  icons?: Record<string, string>

  key?: string
  update_url?: string

  permissions?: ManifestPermission[]

  options_ui?: {
    page: string
    open_in_tab?: boolean
  }

  devtools_page?: string

  content_scripts?: ManifestContentScript[]

  chrome_url_overrides?: {
    newtab?: string
    history?: string
    bookmarks?: string
  }
}

export type ExtensionManifest = BaseExtensionManifest & {
  manifest_version: 3

  host_permissions?: string[]

  action?: {
    default_icon?: Record<string, string>
    default_popup?: string
  }

  background?: {
    service_worker: string
    type?: "module"
  }

  web_accessible_resources?: {
    resources: string[]
    matches: string[]
    extension_ids?: string[]
    use_dynamic_url?: boolean
  }[]
}

export type ExtensionManifestV2 = BaseExtensionManifest & {
  manifest_version: 2

  background?: {
    scripts: string[]
  }

  browser_action?: {
    default_icon?: Record<string, string>
    default_popup?: string
  }

  web_accessible_resources?: string[]
}
