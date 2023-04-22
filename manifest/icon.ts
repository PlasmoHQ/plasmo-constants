export const iconMimeTypeMap = {
  bmp: "image/bmp",
  gif: "image/gif",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png"
} as const

export type ValidIconMimeType = keyof typeof iconMimeTypeMap
export type ValidIconMimeTypeValue = (typeof iconMimeTypeMap)[ValidIconMimeType]

export const validIconExtList = Object.keys(iconMimeTypeMap)
export const validIconExtSet = new Set(validIconExtList)

export const validIconMimeTypeList = Object.values(iconMimeTypeMap)
export const validIconMimeTypeSet = new Set(validIconMimeTypeList)
