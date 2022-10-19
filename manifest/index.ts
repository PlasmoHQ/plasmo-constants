import type { ManifestContentScript } from "./content-script"
import type { ManifestPermission } from "./permission"

export type { ManifestContentScript } from "./content-script"
export * from "./icon"
export { permissionMap } from "./permission"
export type { ManifestPermission } from "./permission"

type ExtensionManifestAction = {
  default_icon?: string | Record<string, string>
  default_popup?: string
  default_title?: string
}

export type ChromeUrlOverrides = {
  newtab: string
  history: string
  bookmarks: string
}

export type ChromeUrlOverrideType = keyof ChromeUrlOverrides

export type BrowserSpecificSettings = {
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

type BaseExtensionManifest = {
  version: string

  name: string
  description: string
  author?: string
  homepage_url?: string

  version_name?: string
  short_name?: string

  icons?: Record<string, string>

  default_locale?: string

  key?: string
  update_url?: string

  options_page?: string
  options_ui?: {
    page: string
    open_in_tab?: boolean
  }

  devtools_page?: string

  content_scripts?: ManifestContentScript[]

  commands?: Record<
    string,
    {
      suggested_key:
        | string
        | {
            default?: string
            mac?: string
            linux?: string
            windows?: string
            chromeos?: string
            android?: string
            ios?: string
          }
      description?: string
    }
  >

  incognito?: "spanning" | "split" | "not_allowed"

  chrome_url_overrides?: Partial<ChromeUrlOverrides>

  browser_specific_settings?: BrowserSpecificSettings

  applications?: BrowserSpecificSettings
}

export type ExtensionManifestV3 = BaseExtensionManifest & {
  manifest_version: 3
  permissions?: ManifestPermission[]
  host_permissions?: string[]

  action?: ExtensionManifestAction

  background?: {
    service_worker: string
    type?: "module"
  }

  content_security_policy?: {
    extension_pages: string
    sandbox?: string
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

  permissions: ManifestPermission[] | string[]

  background?: {
    scripts: string[]
  }

  browser_action?: ExtensionManifestAction

  content_security_policy?: string

  web_accessible_resources?: string[]
}

export type ExtensionManifest = ExtensionManifestV2 | ExtensionManifestV3
