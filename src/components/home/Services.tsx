"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { serviceSlides, serviceSlidesMobile } from "@/constants";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import { Button } from "../ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Bullet = ({ i, isActive }: { i: number; isActive: boolean }) => {
	const swiper = useSwiper();
	return (
		<button
			key={"bullet" + i}
			className={
				"w-6 h-6 relative transition-all bg-black/15 " +
				(isActive ? "border-[6px] border-white" : "")
			}
			onClick={() => swiper.slideTo(i)}
		>
			{!isActive && (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
			)}
		</button>
	);
};

export const Services = () => {
	const t = useTranslations("HomePage.Services");
	const [activeIndex, setActiveIndex] = useState(0);
	const isMobile = useMediaQuery("(max-width: 1024px)");
	const isRtl = useTranslations("metadata")("dir") == "rtl";
	return (
		<div>
			<div className="space-y-4 mb-16">
				<h2 className="label">{t("label")}</h2>
				<h3 className="text-[32px]">{t("heading")}</h3>
				<p>{t("description")}</p>
			</div>
			<div className={"relative mx-auto " + (isMobile ? "max-w-[375px]" : "")}>
				<Swiper
					modules={[EffectFade, Navigation, Autoplay]}
					spaceBetween={50}
					effect="fade"
					navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
					onActiveIndexChange={(s) => setActiveIndex(s.activeIndex)}
					rewind
					autoplay={{ delay: 10000, pauseOnMouseEnter: true }}
				>
					{(isMobile ? serviceSlidesMobile : serviceSlides).map((slide, i) => (
						<SwiperSlide key={slide}>
							<div className="absolute w-[90%] h-full top-0 end-[5%] text-white">
								<div className="max-w-lg mt-10 ms-auto">
									<h4 className="sm:text-[42px] text-3xl">
										{t(`slide-${i + 1}.heading`)}
									</h4>
									<p className="my-4">{t(`slide-${i + 1}.description`)}</p>
									<Button className="bg-accent/10 pe-1 fw-bold py-1 h-auto border border-accent text-accent gap-8 ps-8 font-bold group">
										{t("btnText")}
										<div className="w-9 h-9 rounded-full text-white flex items-center justify-center bg-accent group-hover:text-primary transition-colors">
											{isRtl ? <FaArrowRight /> : <FaArrowLeft />}
										</div>
									</Button>
								</div>
							</div>
							{isMobile ? (
								<Image src={slide} width={375} height={750} alt={slide} />
							) : (
								<Image src={slide} width={1920} height={1080} alt={slide} />
							)}
						</SwiperSlide>
					))}
					<div className="absolute max-sm:flex-col-reverse bottom-10 items-center justify-between w-[90%] end-[5%] z-10 flex gap-4">
						<div className="flex gap-2">
							{serviceSlides.map((_, i) => (
								<Bullet key={"bullet" + i} i={i} isActive={activeIndex == i} />
							))}
						</div>
						<div className="flex gap-4">
							<button className="button-prev relative text-white border overflow-hidden w-12 h-12 rounded-full flex items-center justify-center transition-all hover:justify-start hover:bg-[#f3d270] hover:text-primary hover:border-[#f3d270] hover:!rounded-e-none hover:w-20 duration-300 ease-linear hover:ps-4 group">
								{isRtl ? (
									<GoChevronRight size={24} />
								) : (
									<GoChevronLeft size={24} />
								)}
								<div
									className={
										"h-[1px] w-1/2 bg-primary absolute transition-all duration-300 " +
										(isRtl
											? "-translate-x-full end-0 group-hover:translate-x-3"
											: "translate-x-full start-0 group-hover:translate-x-6")
									}
								/>
							</button>
							<button className="button-next relative text-white border overflow-hidden w-12 h-12 rounded-full flex items-center justify-center transition-all hover:justify-end hover:bg-[#f3d270] hover:text-primary hover:border-[#f3d270] hover:!rounded-s-none hover:w-20 duration-300 ease-linear hover:pe-4 group">
								{isRtl ? (
									<GoChevronLeft size={24} />
								) : (
									<GoChevronRight size={24} />
								)}
								<div
									className={
										"h-[1px] w-1/2 bg-primary absolute transition-all duration-300 " +
										(isRtl
											? "translate-x-full start-0 group-hover:-translate-x-3"
											: "-translate-x-full end-0 group-hover:-translate-x-6")
									}
								/>
							</button>
						</div>
					</div>
				</Swiper>
			</div>
		</div>
	);
};
