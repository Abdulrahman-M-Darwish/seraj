import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { FaInstagram, FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { BsArrowLeft } from "react-icons/bs";

export const Hero = () => {
	const t = useTranslations("HomePage.Hero");
	return (
		<div className="relative text-white md:max-container">
			<Image
				src="/home/hero.png"
				width={1920}
				height={1080}
				alt="hero image"
				className="w-full max-md:h-screen object-cover"
			/>
			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
				<div className="flex max-xl:flex-col">
					<div className="flex gap-8 flex-col items-center justify-between">
						<h1 className="text-3xl sm:text-4xl md:text-5xl text-center">
							{t("heading")}
						</h1>
						<p className="text-center fw-medium text-sm sm:text-xl px-4 max-w-[640px]">
							{t.rich("description", {
								br: () => <br />,
							})}
						</p>
						<div className="flex flex-wrap justify-center gap-8">
							<Button size="lg" variant="secondary" className="sm:w-44 gap-2">
								{t("contactUs")}
								<BsArrowLeft size={20} />
							</Button>
							<Button
								size="lg"
								variant="secondary"
								className="sm:w-44 bg-white/15 text-white"
							>
								{t("aboutUs")}
							</Button>
						</div>
					</div>
					<div className="flex bottom-4 max-xl:left-1/2 justify-center gap-8 relative xl:-end-20 max-xl:absolute max-xl:-translate-x-1/2 xl:flex-col">
						<div className="sm:text-2xl w-10 sm:w-14 h-10 sm:h-14 bg-white/15 rounded-full flex items-center justify-center">
							<FaXTwitter />
						</div>
						<div className="sm:text-2xl w-10 sm:w-14 h-10 sm:h-14 bg-white/15 rounded-full flex items-center justify-center">
							<FaWhatsapp />
						</div>
						<div className="sm:text-2xl w-10 sm:w-14 h-10 sm:h-14 bg-white/15 rounded-full flex items-center justify-center">
							<FaTiktok />
						</div>
						<div className="sm:text-2xl w-10 sm:w-14 h-10 sm:h-14 bg-white/15 rounded-full flex items-center justify-center">
							<FaInstagram />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
