import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const Leaders = () => {
	const t = useTranslations("HomePage.Leaders");
	return (
		<div>
			<h2 className="label mb-12">{t("label")}</h2>
			<div className="flex max-sm:flex-col gap-10">
				{[1, 2].map((n) => (
					<div
						key={"leader" + n}
						className="flex flex-col max-sm:items-center max-sm:text-center"
					>
						<Image
							src={`/home/leader-${n}.png`}
							width={200}
							height={200}
							alt={t(`leader-${n}.name`)}
						/>
						<h3 className="text-2xl fw-medium mt-4">{t(`leader-${n}.name`)}</h3>
						<h4 className="fw-medium my-1">{t(`leader-${n}.role`)}</h4>
						<p>{t(`leader-${n}.description`)}</p>
					</div>
				))}
			</div>
		</div>
	);
};
