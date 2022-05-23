export const permissionMap = {
  activeTab: {
    Description:
      "Requests that the extension be granted permissions according to the activeTab specification."
  },
  alarms: {
    Description: "Gives your extension access to the chrome.alarms API."
  },
  background: {
    Description:
      'Makes Chrome start up early and shut down late, so that extensions can have a longer life.When any installed extension has "background" permission, Chrome runs (invisibly) as soon as the user logs into their computer—before the user launches Chrome. The "background" permission also makes Chrome continue running (even after its last window is closed) until the user explicitly quits Chrome.Note: Disabled extensions are treated as if they aren\'t installed.You should use the "background" permission with background scripts.'
  },
  bookmarks: {
    Description: "Gives your extension access to the chrome.bookmarks API."
  },
  browsingData: {
    Description: "Gives your extension access to the chrome.browsingData API."
  },
  certificateProvider: {
    Description:
      "Gives your extension access to the chrome.certificateProvider API."
  },
  clipboardRead: {
    Description: "Required if the extension uses document.execCommand('paste')."
  },
  clipboardWrite: {
    Description:
      "Required if the extension uses document.execCommand('copy') or document.execCommand('cut')."
  },
  contentSettings: {
    Description:
      "Gives your extension access to the chrome.contentSettings API."
  },
  contextMenus: {
    Description: "Gives your extension access to the chrome.contextMenus API."
  },
  cookies: {
    Description: "Gives your extension access to the chrome.cookies API."
  },
  debugger: {
    Description: "Gives your extension access to the chrome.debugger API."
  },
  declarativeContent: {
    Description:
      "Gives your extension access to the chrome.declarativeContent API."
  },
  declarativeNetRequest: {
    Description:
      "Gives your extension access to the chrome.declarativeNetRequest API."
  },
  declarativeNetRequestFeedback: {
    Description:
      "Grants the extension access to events and methods within the chrome.declarativeNetRequest API which return information on declarative rules matched."
  },
  declarativeWebRequest: {
    Description:
      "Gives your extension access to the chrome.declarativeWebRequest API."
  },
  desktopCapture: {
    Description: "Gives your extension access to the chrome.desktopCapture API."
  },
  documentScan: {
    Description: "Gives your extension access to the chrome.documentScan API."
  },
  downloads: {
    Description: "Gives your extension access to the chrome.downloads API."
  },
  "enterprise.deviceAttributes": {
    Description:
      "Gives your extension access to the chrome.enterprise.deviceAttributes API."
  },
  "enterprise.hardwarePlatform": {
    Description:
      "Gives your extension access to the chrome.enterprise.hardwarePlatform API."
  },
  "enterprise.networkingAttributes": {
    Description:
      "Gives your extension access to the chrome.enterprise.networkingAttributes API."
  },
  "enterprise.platformKeys": {
    Description:
      "Gives your extension access to the chrome.enterprise.platformKeys API."
  },
  experimental: {
    Description:
      "Required if the extension uses any chrome.experimental.* APIs."
  },
  fileBrowserHandler: {
    Description:
      "Gives your extension access to the chrome.fileBrowserHandler API."
  },
  fileSystemProvider: {
    Description:
      "Gives your extension access to the chrome.fileSystemProvider API."
  },
  fontSettings: {
    Description: "Gives your extension access to the chrome.fontSettings API."
  },
  gcm: {
    Description: "Gives your extension access to the chrome.gcm API."
  },
  geolocation: {
    Description:
      "Allows the extension to use the geolocation API without prompting the user for permission."
  },
  history: {
    Description: "Gives your extension access to the chrome.history API."
  },
  identity: {
    Description: "Gives your extension access to the chrome.identity API."
  },
  idle: {
    Description: "Gives your extension access to the chrome.idle API."
  },
  loginState: {
    Description: "Gives your extension access to the chrome.loginState API."
  },
  management: {
    Description: "Gives your extension access to the chrome.management API."
  },
  nativeMessaging: {
    Description: "Gives your extension access to the native messaging API."
  },
  notifications: {
    Description: "Gives your extension access to the chrome.notifications API."
  },
  pageCapture: {
    Description: "Gives your extension access to the chrome.pageCapture API."
  },
  platformKeys: {
    Description: "Gives your extension access to the chrome.platformKeys API."
  },
  power: {
    Description: "Gives your extension access to the chrome.power API."
  },
  printerProvider: {
    Description:
      "Gives your extension access to the chrome.printerProvider API."
  },
  printing: {
    Description: "Gives your extension access to the chrome.printing API."
  },
  printingMetrics: {
    Description:
      "Gives your extension access to the chrome.printingMetrics API."
  },
  privacy: {
    Description: "Gives your extension access to the chrome.privacy API."
  },
  processes: {
    Description: "Gives your extension access to the chrome.processes API."
  },
  proxy: {
    Description: "Gives your extension access to the chrome.proxy API."
  },
  scripting: {
    Description: "Gives your extension access to the chrome.scripting API."
  },
  search: {
    Description: "Gives your extension access to the chrome.search API."
  },
  sessions: {
    Description: "Gives your extension access to the chrome.sessions API."
  },
  signedInDevices: {
    Description:
      "Gives your extension access to the chrome.signedInDevices API."
  },
  storage: {
    Description: "Gives your extension access to the chrome.storage API."
  },
  "system.cpu": {
    Description: "Gives your extension access to the chrome.system.cpu API."
  },
  "system.display": {
    Description: "Gives your extension access to the chrome.system.display API."
  },
  "system.memory": {
    Description: "Gives your extension access to the chrome.system.memory API."
  },
  "system.storage": {
    Description: "Gives your extension access to the chrome.system.storage API."
  },
  tabCapture: {
    Description: "Gives your extension access to the chrome.tabCapture API."
  },
  tabGroups: {
    Description: "Gives your extension access to the chrome.tabGroups API."
  },
  tabs: {
    Description:
      'Gives your extension access to privileged fields of the Tab objects used by several APIs including chrome.tabs and chrome.windows. In many circumstances your extension will not need to declare the "tabs" permission to make use of these APIs.'
  },
  topSites: {
    Description: "Gives your extension access to the chrome.topSites API."
  },
  tts: {
    Description: "Gives your extension access to the chrome.tts API."
  },
  ttsEngine: {
    Description: "Gives your extension access to the chrome.ttsEngine API."
  },
  unlimitedStorage: {
    Description:
      "Provides an unlimited quota for storing client-side data, such as databases and local storage files. Without this permission, the extension is limited to 5 MB of local storage.Note: This permission applies only to Web SQL Database and application cache (see issue 58985). Also, it doesn't currently work with wildcard subdomains such as http://*.example.com."
  },
  vpnProvider: {
    Description: "Gives your extension access to the chrome.vpnProvider API."
  },
  wallpaper: {
    Description: "Gives your extension access to the chrome.wallpaper API."
  },
  webNavigation: {
    Description: "Gives your extension access to the chrome.webNavigation API."
  },
  webRequest: {
    Description: "Gives your extension access to the chrome.webRequest API."
  },
  webRequestBlocking: {
    Description:
      "Required if the extension uses the chrome.webRequest API in a blocking fashion."
  }
}

export type ManifestPermission = keyof typeof permissionMap
