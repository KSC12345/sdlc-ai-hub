
import * as React from "react"

export function Card({ className = "", children }: any) {
  return <div className={`rounded-lg border bg-white text-black shadow-sm ${className}`}>{children}</div>
}

export function CardContent({ className = "", children }: any) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}
