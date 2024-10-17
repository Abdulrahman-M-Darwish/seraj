import { footerQuickLinks } from "@/constants";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import {
	FaEnvelope,
	FaInstagram,
	FaLocationDot,
	FaTiktok,
	FaWhatsapp,
	FaXTwitter,
} from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";

export const Footer = () => {
	const t = useTranslations("Footer");
	return (
		<>
			<div className="mt-20 py-10 bg-[url(/footer-bg.jpg)] text-white">
				<div className="max-container gap-16 flex max-mdx:text-center max-mdx:flex-col max-mdx:items-center justify-between">
					<div className="max-mdx:items-center flex flex-col gap-4">
						<Image src="/logo-light.svg" width={100} height={100} alt="logo" />
						<p className="max-w-sm text-lg fw-medium">{t("description")}</p>
						<div className="flex !mt-10 gap-5">
							<div className="w-11 h-11 flex items-center justify-center hover:text-accent hover:-translate-y-1.5 duration-300 transition-all ">
								<FaXTwitter size={22} />
							</div>
							<div className="w-11 h-11 flex items-center justify-center hover:text-accent hover:-translate-y-1.5 duration-300 transition-all ">
								<FaWhatsapp size={22} />
							</div>
							<div className="w-11 h-11 flex items-center justify-center hover:text-accent hover:-translate-y-1.5 duration-300 transition-all ">
								<FaTiktok size={22} />
							</div>
							<div className="w-11 h-11 flex items-center justify-center hover:text-accent hover:-translate-y-1.5 duration-300 transition-all ">
								<FaInstagram size={22} />
							</div>
						</div>
					</div>
					<div>
						<h2 className="text-2xl mb-8">{t("heading-1")}</h2>
						<div className="grid grid-cols-2 gap-4 text-xl">
							{footerQuickLinks.map((link, i) => (
								<Link
									href={link}
									key={"link" + i}
									className="hover:text-accent transition-colors duration-300"
								>
									{t(`heading-1-link-${i + 1}`)}
								</Link>
							))}
						</div>
					</div>
					<div>
						<h2 className="text-2xl mb-8">{t("heading-2")}</h2>
						<div className="space-y-4 text-xl">
							<div className="flex items-center gap-4 hover:text-accent transition-all duration-300">
								<div className="w-8 h-8 bg-accent flex items-center justify-center rounded-full text-primary">
									<FaLocationDot size={14} />
								</div>
								<span className="max-mdx:flex-1">{t("heading-2-link-1")}</span>
							</div>
							<div className="flex items-center gap-4 hover:text-accent transition-all duration-300">
								<div className="w-8 h-8 bg-accent flex items-center justify-center rounded-full text-primary">
									<BsTelephoneFill size={14} />
								</div>
								<Link className="max-mdx:flex-1" href="tel:0537826886">
									{t("heading-2-link-2")}
								</Link>
							</div>
							<div className="flex items-center gap-4 hover:text-accent transition-all duration-300">
								<div className="w-8 h-8 bg-accent flex items-center justify-center rounded-full text-primary">
									<FaEnvelope size={14} />
								</div>
								<Link className="max-mdx:flex-1" href="mailto:care@serajj.sa">
									{t("heading-2-link-3")}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="p-4 bg-primary text-white text-center">
				{t("copyright")} {new Date().getFullYear()}
			</div>
		</>
	);
};
