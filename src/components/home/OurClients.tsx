import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const OurClients = () => {
	const t = useTranslations("HomePage.OurClients");
	return (
		<div>
			<h2 className="label mb-4">{t("label")}</h2>
			<h3 className="text-[26px] mb-16">{t("heading")}</h3>
			<div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-x-10 gap-y-5">
				{Array.from({ length: 20 }).map((_, i) => (
					<div
						key={"our-clients" + i}
						className="w-fit relative hover:scale-110 overflow-hidden transition-all duration-700 group"
					>
						<div className="absolute transition-all group-hover:opacity-0 top-1/2 left-1/2 scale-0 group-hover:scale-150 -translate-y-1/2 -translate-x-1/2 bg-accent/60 w-36 h-36 rotate-45 duration-1000" />
						<Image
							src={`/home/client-${1 + i}.png`}
							width={250}
							height={250}
							alt="client"
						/>
					</div>
				))}
			</div>
		</div>
	);
};
