export type ManifestContentScript = (
  | {
      world: "MAIN"
      persist_across_sessions?: boolean
    }
  | {
      world?: "ISOLATED"

      match_about_blank?: boolean
      match_origin_as_fallback?: boolean

      /**
       * https://developer.chrome.com/docs/extensions/mv3/content_scripts/#matchAndGlob
       */
      exclude_globs?: string[]
      include_globs?: string[]
    }
) & {
  matches: string[]
  /**
   * https://developer.chrome.com/docs/extensions/mv3/content_scripts/#matchAndGlob
   */
  exclude_matches?: string[]
  js?: string[]

  css?: string[]

  all_frames?: boolean

  /**
   * https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time
   */
  run_at?: "document_start" | "document_end" | "document_idle"

  exclude_matches?: string[]
}
