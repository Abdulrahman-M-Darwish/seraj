import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const WhatWeAdded = () => {
	const t = useTranslations("HomePage.WhatWeAdded");
	const locale = useLocale();
	return (
		<div className="flex justify-between gap-16 max-sm:flex-col-reverse">
			<div className="flex-1">
				<h2 className="text-4xl">{t("heading")}</h2>
				<p className="text-lg my-8">{t("description-1")}</p>
				<p className="text-lg">{t("description-2")}</p>
			</div>
			<div className="flex-1 flex justify-center sm:justify-end">
				<Image
					src={`/home/${locale}-meaning.svg`}
					width={450}
					height={450}
					alt="meaning"
				/>
			</div>
		</div>
	);
};
