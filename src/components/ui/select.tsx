
import * as React from "react"

export function Select({ children }: any) {
  return <div className="relative w-full">{children}</div>
}

export function SelectTrigger({ children }: any) {
  return <div className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white cursor-pointer">{children}</div>
}

export function SelectValue({ placeholder }: any) {
  return <span className="text-gray-500">{placeholder}</span>
}

export function SelectContent({ children }: any) {
  return <ul className="border mt-1 bg-white shadow rounded">{children}</ul>
}

export function SelectItem({ value, children }: any) {
  return <li className="px-3 py-1 hover:bg-blue-100 cursor-pointer">{children}</li>
}
