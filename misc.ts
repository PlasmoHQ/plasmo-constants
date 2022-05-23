import type ParcelWatcher from "@parcel/watcher"
import { isLinux, isWindows } from "@plasmo/utils"

export const PARCEL_WATCHER_BACKEND: ParcelWatcher.BackendType = isWindows
  ? "windows"
  : isLinux
  ? "inotify"
  : "fs-events"
