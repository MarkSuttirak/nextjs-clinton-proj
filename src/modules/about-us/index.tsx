import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { CheckIcon } from '@heroicons/react/20/solid'

const AboutUs = () => {
    const { data } = useFeaturedProductsQuery()

    const missions = [
      {
        name: '01.',
        description: 'ขับเคลื่อนองค์กรด้วยเทคโนโลยีที่เหมาะสมกับการดำเนินธุรกิจ',
      },
      {
        name: '02.',
        description: 'พัฒนาบุคลากรให้สนับสนุนงานการค้าและบริการโดยยึดหลัก ‘ลูกค้าเป็นศูนย์กลางธุรกิจ’',
      },
      {
        name: '03.',
        description: 'เพิ่มความหลากหลายของผลิตภัณฑ์เพื่อสร้างโอกาสและข้อได้เปรียในการแข่งขัน',
      },
    ]

    return (
        <div className="w-full relative pt-20">
            <div className="relative isolate overflow-hidden bg-red-600">
                <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
                  <div className="max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 m-auto">
                    <h2 className="text-md text-white">About us</h2>
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mt-2">
                      รู้จักคลินตัน
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white mt-6">
                      ตลอด 1 ทศวรรษที่ผ่านมา เรามุ่งพัฒนาการให้บริการที่มีคุณภาพ ภายใต้แนวคิด การให้ลูกค้าเป็นศูนย์กลางธุรกิจ เพื่อสร้างความเชื่อมั่นและความประทับใจให้แก่ลูกค้า
                    </p>
                  </div>
                  <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <img
                            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                            alt="App screenshot"
                            width={2432}
                            height={1442}
                            className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                        />
                        </div>
                    </div>
                  </div>
                </div>
            </div>

            {/* MISSIONS*/}

            <div className="bg-black py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div>
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-white">แรงชัวร์ มั่นใจ ใช้คลินตัน</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">พันธกิจของเรา</p>
                    </div>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-white sm:grid-cols-3 lg:gap-y-16">
                        {missions.map((mission) => (
                        <div key={mission.name} className="relative pl-9">
                            <dt className="font-semibold text-white">
                            <CheckIcon className="absolute top-1 left-0 h-5 w-5 text-indigo-500" aria-hidden="true" />
                            {mission.name}
                            </dt>
                            <dd className="mt-2">{mission.description}</dd>
                        </div>
                        ))}
                    </dl>
                    </div>
                </div>
            </div>

            <div className="relative bg-red-600">
                <div className="relative h-80 overflow-hidden bg-black md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2 z-10 flex items-center">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
                    alt=""
                    style={{height:"90%"}}
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
                    <h2 className="text-base font-semibold leading-7 text-white">What we do</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white">คลินตัน อินเตอร์เทรด</p>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                    จำหน่ายปั๊มน้ำและอุปกรณ์เครื่องมือช่าง สว่าน ปั๊มลม เครื่องเจียร ตู้เชื่อมไฟฟ้า ภายใต้ 7 แบรนด์ย่อย ได้แก่ ไทรตัน บอซ มาซาวา เอ็มเทค อะควา โมนิก้า และลองยัง โดยเรามีการขายทั้งค้าปลีกและส่ง ปัจจุบันเปิดทำการมาเป็น
                    ระยะเวลา 16 ปี มีสินค้ามากกว่า 300 รายการ
                    </p>
                    <div className="mt-8">
                        <a
                        href="#"
                        className="inline-flex rounded-md bg-white/10 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                        Visit the help center
                        </a>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default AboutUs;
