import Image from 'next/image'
import dynamic from 'next/dynamic'
import React from 'react'
const RemotePage = dynamic(() => import('authApp/ButtonAuth'), {ssr:false})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Container App
      <React.Suspense fallback="loading ...">
        <RemotePage />
      </React.Suspense>
    </main>
  )
}
