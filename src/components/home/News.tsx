"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const News = () => {
	const t = useTranslations("HomePage.News");
	const isLaptop = useMediaQuery("(max-width: 960px)");
	const isMobile = useMediaQuery("(max-width: 640px)");
	return (
		<div>
			<div className="space-y-4 mb-16">
				<h2 className="label">{t("label")}</h2>
				<h3 className="text-[32px]">{t("heading")}</h3>
				<p>{t("description")}</p>
			</div>
			<Swiper
				autoplay
				slidesPerView={isMobile ? 1 : isLaptop ? 2 : 3}
				modules={[Autoplay, Pagination]}
				pagination={{ dynamicBullets: true, clickable: true }}
				className="!pb-20"
				loop
				spaceBetween={50}
			>
				{[1, 2, 3, 4, 5].map((n) => (
					<SwiperSlide key={"project" + n} className="py-4">
						<Image
							src={`/home/news-slider-${n}.webp`}
							width={475}
							height={280}
							alt="project"
							className="w-full"
						/>
						<div>
							<h4 className="text-xl my-8">{t(`slide-${n}.heading`)}</h4>
							<p className="text-sm fw-light">
								{t.rich(`slide-${n}.description`, { br: () => <br /> })}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
