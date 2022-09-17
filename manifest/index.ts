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

  version_name?: string

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

  browser_specific_settings?: {
    gecko?: {
      id: string
      strict_min_version?: string
      strict_max_version?: string
      update_url?: string
    }
    edge?: {
      browser_action_next_to_addressbar?: boolean
    }
    safari?: {
      strict_min_version?: string
      strict_max_version?: string
    }
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

  content_security_policy?: {
    extension_pages: string
    sandbox: string
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

  content_security_policy?: string

  web_accessible_resources?: string[]
}
