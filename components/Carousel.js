import Image from 'next/image'
import React from 'react'

export default function Carousel({ className = "" }) {
    return (
        <>
            <div className={`carousel w-full ${className}`}>
                <div id="slide1" className="carousel-item justify-center relative w-full">
                    <div >
                        <Image src={'/man.png'} width={366} height={417} alt="teacher-photo" className="rounded-3xl" />
                        <h5 className="font-medium text-2xl leading-9 mt-10 text-text-primary">Christian Howard</h5>
                        <div className="flex gap-3">
                            <Image src={'/italy.png'} width={34} height={34} alt="nationality" />
                            <p className="text-lg font-light leading-[190%] text-text-body ">Italian teacher</p>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item justify-center relative w-full">
                    <div>
                        <Image src={'/girl.png'} width={366} height={417} alt="teacher-photo" className="rounded-3xl" />
                        <h5 className="font-medium text-2xl leading-9 mt-10 text-text-primary">Sandra Wilson</h5>
                        <div className="flex gap-3">
                            <Image src={'/spain.png'} width={34} height={34} alt="nationality" />
                            <p className="text-lg font-light leading-[190%] text-text-body "> Spanish teacher</p>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item justify-center relative w-full">
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
        </>
    )
}
