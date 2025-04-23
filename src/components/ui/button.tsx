
import * as React from "react"

export function Button({ children, className = "", ...props }: any) {
  return (
    <button className={`inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700 ${className}`} {...props}>
      {children}
    </button>
  )
}
