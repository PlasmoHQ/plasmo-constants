export const permissionMap = {
  activeTab: {
    description:
      "Requests that the extension be granted permissions according to the activeTab specification."
  },
  alarms: {
    description: "Gives access to the chrome.alarms API."
  },
  background: {
    description:
      'Makes Chrome start up early and shut down late, so that extensions can have a longer life.\n\nWhen any installed extension has "background" permission, Chrome runs (invisibly) as soon as the user logs into their computer—before the user launches Chrome. The "background" permission also makes Chrome continue running (even after its last window is closed) until the user explicitly quits Chrome.\n\nNote: Disabled extensions are treated as if they aren\'t installed.\n\nYou should use the "background" permission with background scripts.'
  },
  bookmarks: {
    description: "Gives access to the chrome.bookmarks API."
  },
  browsingData: {
    description: "Gives access to the chrome.browsingData API."
  },
  certificateProvider: {
    description: "Gives access to the chrome.certificateProvider API."
  },
  clipboardRead: {
    description: "Required if the extension uses document.execCommand('paste')."
  },
  clipboardWrite: {
    description:
      "Required if the extension uses document.execCommand('copy') or document.execCommand('cut')."
  },
  contentSettings: {
    description: "Gives access to the chrome.contentSettings API."
  },
  contextMenus: {
    description: "Gives access to the chrome.contextMenus API."
  },
  cookies: {
    description: "Gives access to the chrome.cookies API."
  },
  debugger: {
    description: "Gives access to the chrome.debugger API."
  },
  declarativeContent: {
    description: "Gives access to the chrome.declarativeContent API."
  },
  declarativeNetRequest: {
    description:
      "Gives your extension access to the chrome.declarativeNetRequest API. Some operations may require host permissions to perform."
  },
  declarativeNetRequestWithHostAccess: {
    description:
      "Gives your extension access to the chrome.declarativeNetRequest API, but requires host permissions to the request URL and initiator to act on a request."
  },
  declarativeNetRequestFeedback: {
    description:
      "Gives access to events and methods within the chrome.declarativeNetRequest API which return information on declarative rules matched."
  },
  declarativeWebRequest: {
    description: "Gives access to the chrome.declarativeWebRequest API."
  },
  desktopCapture: {
    description: "Gives access to the chrome.desktopCapture API."
  },
  documentScan: {
    description: "Gives access to the chrome.documentScan API."
  },
  downloads: {
    description: "Gives access to the chrome.downloads API."
  },
  "enterprise.deviceAttributes": {
    description: "Gives access to the chrome.enterprise.deviceAttributes API."
  },
  "enterprise.hardwarePlatform": {
    description: "Gives access to the chrome.enterprise.hardwarePlatform API."
  },
  "enterprise.networkingAttributes": {
    description:
      "Gives access to the chrome.enterprise.networkingAttributes API."
  },
  "enterprise.platformKeys": {
    description: "Gives access to the chrome.enterprise.platformKeys API."
  },
  experimental: {
    description:
      "Required if the extension uses any chrome.experimental.* APIs."
  },
  fileBrowserHandler: {
    description: "Gives access to the chrome.fileBrowserHandler API."
  },
  fileSystemProvider: {
    description: "Gives access to the chrome.fileSystemProvider API."
  },
  fontSettings: {
    description: "Gives access to the chrome.fontSettings API."
  },
  gcm: {
    description: "Gives access to the chrome.gcm API."
  },
  geolocation: {
    description:
      "Allows the extension to use the geolocation API without prompting the user for permission."
  },
  history: {
    description: "Gives access to the chrome.history API."
  },
  identity: {
    description: "Gives access to the chrome.identity API."
  },
  idle: {
    description: "Gives access to the chrome.idle API."
  },
  loginState: {
    description: "Gives access to the chrome.loginState API."
  },
  management: {
    description: "Gives access to the chrome.management API."
  },
  nativeMessaging: {
    description: "Gives access to the native messaging API."
  },
  notifications: {
    description: "Gives access to the chrome.notifications API."
  },
  offscreen: {
    description: "Gives access to the chrome.offscreen API."
  },
  pageCapture: {
    description: "Gives access to the chrome.pageCapture API."
  },
  platformKeys: {
    description: "Gives access to the chrome.platformKeys API."
  },
  power: {
    description: "Gives access to the chrome.power API."
  },
  printerProvider: {
    description: "Gives access to the chrome.printerProvider API."
  },
  printing: {
    description: "Gives access to the chrome.printing API."
  },
  printingMetrics: {
    description: "Gives access to the chrome.printingMetrics API."
  },
  privacy: {
    description: "Gives access to the chrome.privacy API."
  },
  processes: {
    description: "Gives access to the chrome.processes API."
  },
  proxy: {
    description: "Gives access to the chrome.proxy API."
  },
  scripting: {
    description: "Gives access to the chrome.scripting API."
  },
  search: {
    description: "Gives access to the chrome.search API."
  },
  sessions: {
    description: "Gives access to the chrome.sessions API."
  },
  sidePanel: {
    description: "Gives access to the chrome.sidePanel API."
  },
  storage: {
    description: "Gives access to the chrome.storage API."
  },
  "system.cpu": {
    description: "Gives access to the chrome.system.cpu API."
  },
  "system.display": {
    description: "Gives access to the chrome.system.display API."
  },
  "system.memory": {
    description: "Gives access to the chrome.system.memory API."
  },
  "system.storage": {
    description: "Gives access to the chrome.system.storage API."
  },
  tabCapture: {
    description: "Gives access to the chrome.tabCapture API."
  },
  tabGroups: {
    description: "Gives access to the chrome.tabGroups API."
  },
  tabs: {
    description:
      'Gives access to privileged fields of the Tab objects used by several APIs including chrome.tabs and chrome.windows. In many circumstances your extension will not need to declare the "tabs" permission to make use of these APIs.'
  },
  topSites: {
    description: "Gives access to the chrome.topSites API."
  },
  tts: {
    description: "Gives access to the chrome.tts API."
  },
  ttsEngine: {
    description: "Gives access to the chrome.ttsEngine API."
  },
  unlimitedStorage: {
    description:
      "Provides an unlimited quota for storing client-side data, such as databases and local storage files. Without this permission, the extension is limited to 5 MB of local storage.\nNote: This permission applies only to Web SQL Database and application cache (see issue 58985). Also, it doesn't currently work with wildcard subdomains such as http://*.example.com."
  },
  vpnProvider: {
    description: "Gives access to the chrome.vpnProvider API."
  },
  wallpaper: {
    description: "Gives access to the chrome.wallpaper API."
  },
  webAuthenticationProxy: {
    description: "Gives access to the chrome.webAuthenticationProxy API."
  },
  webNavigation: {
    description: "Gives access to the chrome.webNavigation API."
  },
  webRequest: {
    description: "Gives access to the chrome.webRequest API."
  },
  webRequestBlocking: {
    description:
      "Required if the extension uses the chrome.webRequest API in a blocking fashion."
  }
}

export type ManifestPermission = keyof typeof permissionMap
