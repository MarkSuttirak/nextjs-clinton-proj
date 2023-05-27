import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const Hero = () => {
  const incentives = [
    {
      name: 'สินค้าดีที่เราแนะนำ',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
      name: 'ราคาดีการันตี',
      description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
      name: 'โค้ดและโปรโมชั่น',
      description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
    },
    {
      name: 'ตัวอย่างสินค้า',
      description: "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    },
    {
      name: 'สินค้านี้จัดส่งฟรี',
      description: "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    },
  ]

  const guarantees = [
    {
      name: 'สินค้าคุณภาพ',
      description: "สินค้าผลิตจากวัสดุที่มีคุณภาพ และได้มาตรฐาน CE",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
      name: 'รับประกัน 1 ปี',
      description: 'รับประกันสินค้าสูงสุด 1 ปี',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
      name: 'บริการ',
      description: "จัดส่งรวดเร็ว พร้อมดูแลสินค้าตลอดอายุการใช้งาน",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
    },
  ]

  return (
    <>
    <div className="w-full relative content-container pt-15">
      <div className="flex gap-x-2">
        <div className="text-white bg-black w-4/6 inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:px-8 py-24">
          <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
            แรงชัวร์ มั่นใจ ใช้คลินตัน
          </h1>
          <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            คลินตัน จำหน่ายปั๊มน้ำและอุปกรณ์เครื่องมือช่าง มากกว่า 300 รายการ ได้แก่ สว่าน ปั๊มลม เครื่องเจียร ตู้เชื่อมไฟฟ้า และอื่นๆ
          </p>
          <div className="more-details-btn">
            <UnderlineLink href="/store">ดูรายละเอียด</UnderlineLink>
          </div>
        </div>
        <div className="text-white bg-black w-2/6 inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:px-8 pt-24 pb-8">
          <h2 className="text-xl-semi mb-4 drop-shadow-md shadow-black">
            สว่านโรตารี่ไร้สาย CLINTON รุ่น FER-ROTARY 21V
          </h2>
        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-8">
          {incentives.map((incentive) => (
            <div key={incentive.name}>
              <img src={incentive.imageSrc} alt="" className="h-24 w-auto" />
              <h3 className="mt-6 text-sm font-medium text-black">{incentive.name}</h3>
              <p className="mt-2 text-sm text-black">{incentive.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-red-600">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {guarantees.map((guarantee) => (
            <div key={guarantee.name}>
              <img src={guarantee.imageSrc} alt="" className="h-24 w-auto" />
              <h3 className="mt-6 text-xl font-medium text-white">{guarantee.name}</h3>
              <p className="mt-2 text-sm text-white">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
