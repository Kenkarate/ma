"use client"
import React from 'react'
import dgimage from '@/public/digital-marketing.webp'
import Image from 'next/image'

function page() {
  return (
    <div>
      <Image src={dgimage}/>
    </div>
  )
}

export default page
