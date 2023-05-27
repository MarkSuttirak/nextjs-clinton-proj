import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  const features = [
    {
      name: 'เครื่องมือช่างไร้สาย',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-01.jpg',
      imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
    },
    {
      name: 'ตู้เชื่อม',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-02.jpg',
      imageAlt: 'Green cardstock box open with 50 cards inside.',
    },
    {
      name: 'เครื่องฉีดน้ำแรงดันสูง',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-03.jpg',
      imageAlt: 'Detail of white today card, beige next card, and brown someday card with dot grid.',
    },
    {
      name: 'ปั๊มน้ำอัตโนมัติ',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-04.jpg',
      imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
    },
  ]

  return (
    <div>
    <div className="block text-center mt-40 content-container">
      <h1 className="text-4xl">ทำไมต้องคลินตัน</h1>
      <p className="mt-3">เพราะเรารู้ว่า ช่างต้องการอะไร เราจึงตั้งใจคัดสรร <strong>‘ปั๊มน้ำ เครื่องมือช่างคุณภาพดี’</strong><br/>
โดยคำนึงถึงความหลากหลายของรูปแบบการใช้งาน เพื่อนำไปสู่การปฏิบัติงานช่างที่สมบูรณ์แบบ และนี่คือจุดเด่นสำคัญของเรา</p>
    </div>

    {/* Why Clinton with Images */}

    <div className="bg-black mt-8 content-container">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">ปั๊มน้ำคลินตัน อึด แกร่ง แรงสุดขั้ว</h2>
          <p className="mt-4 text-white">
          เรื่องปั๊มน้ำ ต้องคลินตัน ด้วยสมรรถนะความแรงไม่มีตก ทำงานต่อเนื่องได้ ไม่มีสะดุด จึงทำให้ ‘ปั๊มน้ำคลินตัน’ เป็นสินค้าอันดับ 1 ในใจช่าง
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-md bg-white/10 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              ดูรายละเอียด
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>

    <div className="relative bg-gray-900 mt-8 content-container">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          alt=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <p className="mt-2 text-4xl font-bold tracking-tight text-white">เครื่องมือช่างคลินตันทองแดงแท้ ทนทาน ทำงานเต็มกำลัง</p>
          <p className="mt-6 text-base leading-7 text-gray-300">
          ที่สุดแห่งเครื่องมือช่างประสิทธิภาพสูง การันตีด้วยมอเตอร์ ทองแดงแท้ ทนทาน พร้อมลุยทุกงานช่าง <strong>‘แรง ชัวร์ มั่นใจใช้คลินตัน’</strong>
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-md bg-white/10 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              ดูรายละเอียด
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Timer Section */}
    <div className="bg-gray-700 text-center mt-40">
      <div className="max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:w-1/2">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          RAINY SEASON SALE
          <br />
          <span id="days">07</span> : <span id="hours">12</span> : <span id="minutes">42</span> : <span id="seconds">59</span>
        </h2>
        <p></p>
        <div className="mt-10 flex items-center gap-x-6 justify-center">
          <a href="#" className="text-base font-semibold leading-7 text-white">
            ดูรายละเอียด <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>

    {/* Product Section */}

    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="block">
          <div className="inline-block w-1/2">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ประเภทสินค้า</p>
          </div>
          <div className="inline-block w-1/2 text-right">
            <a href="#" className="text-base font-semibold leading-7 text-red-600">
              ดูสินค้าทั้งหมด <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-11 grid grid-cols-1 items-start gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">{feature.name}</h3>
              </div>
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="py-12">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-base-regular text-gray-600 mb-6">
            Latest products
          </span>
          <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Our newest styles are here to help you look your best.
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(8).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default FeaturedProducts
