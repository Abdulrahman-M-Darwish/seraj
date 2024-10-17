import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import React from "react";

type Props = {
	params: {
		locale: string;
	};
};

const OurServices: React.FC<Props> = ({ params: { locale } }) => {
	unstable_setRequestLocale(locale);
	const t = useTranslations("OurServices");
	return (
		<div className="max-container mt-20">
			<div className="grid sm:grid-cols-2 mdx:grid-cols-3 gap-16">
				{Array.from({ length: 6 }).map((_, i) => (
					<div
						key={i}
						className="flex flex-col max-sm:text-center max-sm:items-center"
					>
						<Image
							src={`/our-services/service-${i + 1}.png`}
							width={400}
							height={400}
							alt="project"
						/>
						<h2 className="text-2xl my-4">{t(`card-${i + 1}.heading`)}</h2>
						<p>{t(`card-${i + 1}.description`)}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurServices;
