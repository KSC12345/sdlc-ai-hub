
import * as React from "react"

export function Avatar({ children }: any) {
  return <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">{children}</div>
}

export function AvatarImage({ src }: any) {
  return <img src={src} className="object-cover w-full h-full" />
}

export function AvatarFallback({ children }: any) {
  return <span className="text-sm font-semibold">{children}</span>
}
