
import * as React from "react"

export function Textarea({ className = "", ...props }: any) {
  return <textarea className={`flex min-h-[80px] w-full rounded-md border border-gray-300 px-3 py-2 text-sm ${className}`} {...props} />
}
