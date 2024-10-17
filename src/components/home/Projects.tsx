"use client";
import { projectsSlides } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const Projects = () => {
	const t = useTranslations("HomePage.Projects");
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
				{projectsSlides.map((project, i) => (
					<SwiperSlide key={"project" + i} className="py-4">
						<Image
							src={project}
							width={475}
							height={280}
							alt="project"
							className="w-full"
						/>
						<div>
							<h4 className="text-xl my-8">{t(`slide-${i + 1}.heading`)}</h4>
							<p className="text-sm fw-light">
								{t.rich(`slide-${i + 1}.description`, { br: () => <br /> })}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
