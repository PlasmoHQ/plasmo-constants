export const iconMimeTypeMap = {
  bmp: "image/bmp",
  gif: "image/gif",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png"
}

export type ValidIconMimeType = keyof typeof iconMimeTypeMap

export const validIconMimeTypes = Object.keys(iconMimeTypeMap)
export const validIconMimeTypeSet = new Set(validIconMimeTypes)
