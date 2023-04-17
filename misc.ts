import type { BackendType } from "@parcel/watcher"

import { isLinux, isWindows } from "@plasmo/utils/platform"

export const PARCEL_WATCHER_BACKEND: BackendType = isWindows
  ? "windows"
  : isLinux
  ? "inotify"
  : "fs-events"
