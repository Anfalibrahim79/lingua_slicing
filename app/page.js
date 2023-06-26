import Button from "@/components/icon/Button";
import IconButton from "@/components/icon/IconButton";
import LogoFooter from "@/components/icon/LogoFooter";
import Image from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi'

const image = ['F.png', 'M.png', 'H.png', 'G.png'];

export default function Home() {
  return (
    <>
      {/*Hero Section */}
      <section className="px-8 pt-8">
        <div className="bg-secondary md:min-h-[817px] rounded-[40px]">
          <div className="container mx-auto xl:px-20 pt-36 flex flex-col-reverse md:flex md:flex-row md:items-center">
            {/*Hero Text*/}
            <div className="flex-1 p-10 ">
              <h1 className="font-light text-4xl leading-[126%] md:text-[56px] text-text-primary ">
                A <span className="text-primary-200 font-medium ">unique</span> approach to learning foreign languages online
              </h1>
              <p className="mt-[18px] font-light text-text-body leading-[34px] text-lg w-7/12">
                Learn at your own pace, with lifetime access on mobile and desktop
              </p>
              <Button className="mt-8">Get Started</Button>
            </div>
            {/*illustration */}
            <div className="hidden md:flex">
              <div className="relative w-fit">
                {/*BG 1 */}
                <div className="w-[534px] bg-[#FFD6B0]/30 aspect-1 rounded-[60px] absolute -rotate-[4deg]">
                </div>
                {/*Hero Image */}
                <div className="w-[534px] aspect-1 bg-[#FFD6B0] rounded-[60px] rotate-[10deg] overflow-hidden">
                  <Image src={'/hero.png'} width={618} height={586} alt="hero" className="absolute -bottom-11 -rotate-[10deg]"></Image>
                </div>
                {/* Avatar  */}
                <div className="py-3 px-5 bg-white rounded-[19px] absolute h-[81px] flex items-center left-[-48px] top-[89px] shadow-darkShadow ">
                  <Image src={'/avatar1.png'} width={48} height={48} alt="avatar1" className="border-outline border-[3px] rounded-full"></Image>
                  <div className="ml-4">
                    <p className="font-bold text-sm leading-7 text-text-primary">Jane Cooper</p>
                    <span className="text-xs leading-7 text-text-body">I love the italian course!</span>
                  </div>
                </div>
                {/*10 Courses */}
                <div className="px-[22px] py-5 absolute bg-white flex flex-col rounded-[21px] right-[-60px] top-[190px]">
                  <p className="font-bold text-lg leading-[30px] text-primary-200">10+ Courses</p>
                  <span className="text-xs leading-6 text-text-body ">Multiple Categories</span>
                </div>
                {/*Student */}
                <div className="px-5 py-[22px] absolute bg-light rounded-[29px] bottom-[-70px] left-1/4">
                  <ul className="flex -space-x-3">
                    {
                      image.map((el, key) => {
                        return (
                          <li key={key}>
                            <Image src={`/${el}`} key={key} width={52} height={52} alt="avatar2" className="border-light border-[3px] flex-shrink-0 rounded-full">
                            </Image>
                          </li>
                        )
                      })
                    }
                    <li>
                      <p className="w-[48px] aspect-1 rounded-full border-outline bg-[#e8e8f6] font-bold text-primary-200 text-sm leading-6 flex items-center justify-center">+50</p>
                    </li>
                  </ul>
                  <span className="text-xs leading-6 text-text-body">Dedicated students per day</span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/*Why choose */}
      <section className="container flex items-center justify-center mx-auto lg:mx-0">
        <div className="min-h-full lg:h-[472px] mt-[200px] flex flex-col items-center">
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold leading-[190%] uppercase text-outline">WHY CHOOSE US</p>
            <h2 className="text-5xl leading-[130%] text-text-primary font-light">Our values</h2>
          </div>
          <div className="flex flex-col items-center lg:flex-row mt-[89px] px-[45px] gap-32">
            <div className="flex flex-col items-center">
              <Image src={'/Glass1.png'} width={81} height={81} alt="glass-icon" />
              <p className="text-2xl font-medium text-text-primary mt-[47px] mb-4">Speaking clubs</p>
              <span className="text-lg font-light leading-[190%] text-text-body text-center">In our school you will practice your speaking skills and just get a lot of positive emotions!</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src={'/Glass2.png'} width={75} height={81} alt="glass-icon" />
              <p className="text-2xl font-medium text-text-primary mt-[47px] mb-4">Quality control</p>
              <span className="text-lg font-light leading-[190%] text-text-body text-center">A huge work has been done with the teachers and their work has been monitored thoroughly.</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src={'/Glass3.png'} width={81} height={81} alt="glass-icon" />
              <p className="text-2xl font-medium text-text-primary mt-[47px] mb-4">Progress analysis</p>
              <span className="text-lg font-light leading-[190%] text-text-body text-center">The CEF of Reference has been used at our school. It allows to control our students’ success in studying.</span>
            </div>
          </div>
        </div>
      </section>
      {/*Teacher Section */}
      <section className="container pt-[240px] flex flex-col mx-auto px-10 lg:px-[100px]">
        <div className="min-h-full md:min-h-[702px]">
          <div className="flex md:justify-between items-center">
            <div>
              <p className="text-lg font-bold leading-[190%] text-outline uppercase">key persons</p>
              <h2 className="text-5xl font-light leading-[130%] text-text-primary">Meet our teachers</h2>
            </div>

            {/* icon arrow */}
            <div className="space-x-3 md:flex items-center hidden">
              <IconButton type="secondary" size="large" className=" flex justify-center items-center">
                <MdKeyboardArrowLeft className="text-3xl" />
              </IconButton>
              <IconButton type="primary" size="large" className="flex justify-center items-center">
                <MdKeyboardArrowRight className="text-3xl" />
              </IconButton>
            </div>


          </div>
          <div className="flex flex-col items-center gap-5 lg:flex-row mt-[58px] md:justify-between">
            <div>
              <Image src={'/man.png'} width={366} height={417} alt="teacher-photo" className="rounded-3xl" />
              <h5 className="font-medium text-2xl leading-9 mt-10 text-text-primary">Christian Howard</h5>
              <div className="flex gap-3">
                <Image src={'/italy.png'} width={34} height={34} alt="nationality" />
                <p className="text-lg font-light leading-[190%] text-text-body ">Italian teacher</p>
              </div>
            </div>
            <div>
              <Image src={'/girl.png'} width={366} height={417} alt="teacher-photo" className="rounded-3xl" />
              <h5 className="font-medium text-2xl leading-9 mt-10 text-text-primary">Sandra Wilson</h5>
              <div className="flex gap-3">
                <Image src={'/spain.png'} width={34} height={34} alt="nationality" />
                <p className="text-lg font-light leading-[190%] text-text-body "> Spanish teacher</p>
              </div>
            </div>
            <div>
              <Image src={'/man2.png'} width={366} height={417} alt="teacher-photo" className="rounded-3xl" />
              <h5 className="font-medium text-2xl leading-9 mt-10 text-text-primary">Jimmy Cooper</h5>
              <div className="flex gap-3 items-center">
                <Image src={'/england.png'} width={34} height={34} alt="nationality" />
                <p className="text-lg font-light leading-[190%] text-text-body ">English teacher</p>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/*Students Section */}
      <section section className="container pt-[240px] mx-auto px-10 lg:px-[100px]" >
        <div className="min-h-full lg:h-[792px] ">
          <div>
            <p className="text-lg font-bold leading-[190%] uppercase text-outline">TOP STUDIYING</p>
            <h2 className="text-5xl font-light leading-[130%] text-text-primary">Our students say</h2>
            <div className="pt-[59px] flex flex-col lg:flex-row lg:gap-[128px]">
              <div className="bg-[#fceae3] w-[302px] md:w-[400px] md:h-[400px] aspect-1 rounded-[60px] overflow-hidden">
                <Image src={'/man3.png'} height={502} width={502} alt="students" />
              </div>
              <div className="flex-1">
                <div className="mt-10">
                  <h3 className="font-bold text-3xl leading-9">Martin Watson</h3>
                  <div className="flex mt-[19px] gap-1">
                    <Image src={'/spain.png'} width={34} height={34} alt="nationality" />
                    <p className="text-lg font-light leading-[190%] text-text-body">B2 course student</p>
                  </div>
                  <h4 className="text-[26px] leading-[180%] font-light text-text-primary mt-[50px]">
                    There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/*Common Section */}
      <section section className="container pt-[200px] mx-auto px-10 lg:px-[100px]" >
        <div className="min-h-full lg:h-[693px]">
          <p className="text-lg font-bold leading-[190%] text-outline uppercase">more info</p>
          <h2 className="text-5xl font-light leading-[130%]">Common questions</h2>
          <div className="mt-[43px] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="py-2 px-10  border border-outline/30 rounded-[40px] ">
              <div className="flex justify-around gap-1">
                <p className="text-xl font-medium leading-9 text-text-primary">How can I know my level of knowledge?</p>
                <IconButton nButton type="primary" size="small">+</IconButton>
              </div>
            </div>
            <div className="py-2 px-10  border border-outline/30 rounded-[40px] ">
              <div className="flex justify-around gap-1">
                <p className="text-xl font-medium leading-9 text-text-primary">How can I know my level of knowledge?</p>
                <IconButton nButton type="primary" size="small">+</IconButton>
              </div>
            </div>
            <div className="py-2 px-10  border border-outline/30 rounded-[40px] ">
              <div className="flex justify-around gap-1">
                <p className="text-xl font-medium leading-9 text-text-primary">How can I know my level of knowledge?</p>
                <IconButton nButton type="primary" size="small">+</IconButton>
              </div>
            </div>
            <div className="py-2 px-10  border border-outline/30 rounded-[40px] ">
              <div className="flex justify-around gap-1">
                <p className="text-xl font-medium leading-9 text-text-primary">How can I know my level of knowledge?</p>
                <IconButton nButton type="primary" size="small">+</IconButton>
              </div>
            </div>
            <div className="py-2 px-10  border border-outline/30 rounded-[40px] ">
              <div className="flex justify-around gap-1">
                <p className="text-xl font-medium leading-9 text-text-primary">How can I know my level of knowledge?</p>
                <IconButton nButton type="primary" size="small">+</IconButton>
              </div>
            </div>
            <div className="py-2 px-10  border border-outline/30 rounded-[40px] ">
              <div className="flex justify-around gap-1">
                <p className="text-xl font-medium leading-9 text-text-primary">How can I know my level of knowledge?</p>
                <IconButton nButton type="primary" size="small">+</IconButton>
              </div>
            </div>


          </div>
        </div>
      </section >
      {/*Trial Section */}
      <section section className="pt-[39px] px-[100px] mx-auto  lg:px-[100px]" >
        <div className="min-w-full h-[595px] flex justify-center items-center">
          <div>
            <h2 className="text-5xl font-light leading-[130%] text-text-primary">Get a free trial lesson today</h2>
            <p className="text-lg font-light leading-[190%] text-text-body text-center">Start fulfilling your language dreams with our school</p>
            <div className="mt-14 flex justify-center items-center gap-4">
              <input type="email" required placeholder="Enter your email!" className="py-[15px] pl-[33.5px] pr-[46px] border border-outline rounded-full" />
              <Button type="primary">Send</Button>
            </div>
          </div>
        </div>
      </section >
      {/*Footer */}
      <footer className=" pb-[89px] mx-auto lg:px-[100px]">
        <div className="bg-dark rounded-[40px]">
          <div className="p-5 md:px-[69px] md:pt-[52px] md:pb-[108px] flex justify-between">

            {/*Name Company */}
            <div>
              <LogoFooter className='mb-8' />
              <p className="text-xs font-light leading-6 text-text-body">20 Osgood Rd, Milford, NH 03055, USA
                +1283871239190213021</p>
            </div>
            {/*Name Company */}
            <div>
              <p className="text-base font-semibold leading-6 text-text-primary mb-6">Company</p>
              <ul className="flex flex-col gap-2">
                <li className="text-sm font-light leading-6 text-text-body">Careers</li>
                <li className="text-sm font-light leading-6 text-text-body">Teachers</li>
                <li className="text-sm font-light leading-6 text-text-body">Support</li>
                <li className="text-sm font-light leading-6 text-text-body">Contact</li>
              </ul>
            </div>
            {/*Name Company */}
            <div>
              <p className="text-base font-semibold leading-6 text-text-primary mb-6">Product</p>
              <ul className="flex flex-col gap-2">
                <li className="text-sm font-light leading-6 text-text-body">Courses</li>
                <li className="text-sm font-light leading-6 text-text-body">Pricing</li>
                <li className="text-sm font-light leading-6 text-text-body">Blog</li>
              </ul>
            </div>
            {/*Name Company */}
            <div>
              <p className="text-base font-semibold leading-6 text-text-primary mb-6">Legal</p>
              <ul className="flex flex-col gap-2">
                <li className="text-sm font-light leading-6 text-text-body">Terms & Conditions</li>
                <li className="text-sm font-light leading-6 text-text-body">Privacy policy</li>
              </ul>
            </div>
            {/*Name Company */}
            <div>
              <ul className="md:flex gap-3">
                <li >
                  <IconButton type="secondary" size="small" className="flex justify-center items-center"><BiLogoFacebook className="text-2xl" /></IconButton>
                </li>
                <li >
                  <IconButton type="secondary" size="small" className="flex justify-center items-center"><BiLogoTwitter className="text-2xl" /></IconButton>
                </li><li >
                  <IconButton type="secondary" size="small" className="flex justify-center items-center"><BiLogoInstagram className="text-2xl" /></IconButton>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}
