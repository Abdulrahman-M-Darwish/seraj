"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { BsArrowLeft } from "react-icons/bs";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const Main = () => {
	const t = useTranslations("AboutUs.Main");
	const isMobile = useMediaQuery("(max-width: 768px)");
	return (
		<div className="max-container">
			<div className="relative">
				<div className="absolute w-[90%] flex flex-col gap-4 md:gap-8 text-white start-[5%] top-1/2 -translate-y-1/2">
					<h2 className="label text-sm md:!text-xl">{t("label")}</h2>
					<h1 className="text-2xl md:text-4xl">{t("heading")}</h1>
					<p className="max-w-[650px] max-sm:text-sm">{t("description")}</p>
					<Button
						variant="secondary"
						size="lg"
						className="w-fit gap-2 text-xl fw-light"
					>
						{t("btnText")}
						<BsArrowLeft />
					</Button>
				</div>
				<Image
					src={isMobile ? "/about/main-mobile.jpg" : "/about/main.jpg"}
					width={isMobile ? 375 : 1920}
					height={isMobile ? 800 : 1080}
					alt="main"
					className="min-h-96 w-full"
				/>
			</div>
		</div>
	);
};
