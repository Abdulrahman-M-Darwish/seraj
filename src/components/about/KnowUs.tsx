import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "../ui/button";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";

export const KnowUs = () => {
	const t = useTranslations("AboutUs.KnowUs");
	return (
		<div className="flex gap-12 max-mdx:flex-col max-container">
			<div className="flex-1 flex justify-end">
				<Image
					src="/home/about.png"
					width={800}
					height={800}
					alt="about"
					className="w-full"
				/>
			</div>
			<div className="flex flex-col gap-4 max-sm:items-center max-sm:text-center flex-1">
				<h2 className="label text-base">{t("label")}</h2>
				<h3 className="text-[32px]">{t("heading")}</h3>
				<p>{t("description")}</p>
				<Button size="lg" className="!mt-14 text-lg w-fit gap-2">
					{t("btnText")}
					<BsArrowLeft size={25} />
				</Button>
			</div>
		</div>
	);
};
