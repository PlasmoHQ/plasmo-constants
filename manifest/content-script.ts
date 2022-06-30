export type ManifestContentScript = {
  matches: string[]
  /**
   * https://developer.chrome.com/docs/extensions/mv3/content_scripts/#matchAndGlob
   */
  exclude_matches?: string[]
  js?: string[]

  css?: string[]

  match_about_blank?: boolean
  match_origin_as_fallback?: boolean
  all_frames?: boolean
  /**
   * https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time
   */
  run_at?: "document_start" | "document_end" | "document_idle"
}
