'use client'

import React, { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'

const DialogContext = createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
} | null>(null)

export function Dialog({ children, open: controlledOpen, onOpenChange }: {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = onOpenChange ?? setUncontrolledOpen

  return (
    <DialogContext.Provider value={{ open, onOpenChange: setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

export function DialogTrigger({ children, asChild = false }: {
  children: React.ReactNode
  asChild?: boolean
}) {
  const context = useContext(DialogContext)
  if (!context) throw new Error('DialogTrigger must be used within a Dialog')

  const child = asChild ? React.Children.only(children) : 
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      {children}
    </button>

  return React.cloneElement(child as React.ReactElement, {
    onClick: () => context.onOpenChange(true)
  })
}

export function DialogContent({ children }: { children: React.ReactNode }) {
  const context = useContext(DialogContext)
  if (!context) throw new Error('DialogContent must be used within a Dialog')

  if (!context.open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div 
        className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[85vh] overflow-auto relative"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-6">
          {children}
        </div>
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 rounded-full p-1"
          onClick={() => context.onOpenChange(false)}
          aria-label="Close dialog"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  )
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-6">{children}</div>
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold" id="dialog-title">{children}</h2>
}

// Usage example
export default function Component() {
  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Example Dialog</DialogTitle>
        </DialogHeader>
        <p>This is the content of the dialog.</p>
      </DialogContent>
    </Dialog>
  )
}