
import * as React from "react"

export function Input({ className = "", ...props }: any) {
  return <input className={`flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm ${className}`} {...props} />
}
