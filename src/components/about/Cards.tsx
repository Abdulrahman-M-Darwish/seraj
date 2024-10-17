import { useTranslations } from "next-intl";
import React from "react";
import { FaEye, FaStar } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";

export const Cards = () => {
	const t = useTranslations("AboutUs.Cards");
	return (
		<div className="flex gap-16 max-container flex-wrap">
			{[FaStar, GoGoal, FaEye].map((icon, i) => (
				<div
					key={"card" + i}
					className="flex-1 flex flex-col items-center p-5 pt-0 bg-secondary rounded-3xl group min-w-64"
				>
					<div className="w-20 h-20 rounded-full bg-accent/80 text-primary flex items-center justify-center -translate-y-10 group-hover:ring-8 group-hover:ring-offset-8 ring-offset-slate-300 ring-slate-300 transition-all">
						{icon({ size: 25 })}
					</div>
					<h2 className="text-2xl mb-8">{t(`card-${i + 1}.heading`)}</h2>
					<p>{t(`card-${i + 1}.description`)}</p>
				</div>
			))}
		</div>
	);
};
