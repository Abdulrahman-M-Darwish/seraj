import { useTranslations } from "next-intl";
import React from "react";
import { BsFillRocketFill } from "react-icons/bs";
import { FaMoneyBills } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";

export const Stats = () => {
	const t = useTranslations("AboutUs.Stats");
	return (
		<div className="min-h-[350px] bg-[url('/about/counter.jpg')] bg-cover py-8 text-white flex items-center gap-16 px-4 flex-wrap">
			{[HiUserGroup, BsFillRocketFill, FaMoneyBills, IoPersonSharp].map(
				(icon, i) => (
					<div
						key={"stat" + i}
						className="flex-1 flex gap-4 justify-around mdx:justify-center items-center"
					>
						<div className="flex items-center justify-center w-20 h-20 bg-white/15 rounded-full">
							{icon({ size: 40 })}
						</div>
						<div>
							<h2 className="text-lg">{t(`stat-${i + 1}.heading`)}</h2>
							<div className="flex items-baseline gap-2">
								<h3 className="text-[40px]">
									{t(`stat-${i + 1}.description`)}
								</h3>
								<span className="text-2xl">{t(`stat-${i + 1}.sub`)}</span>
							</div>
						</div>
					</div>
				)
			)}
		</div>
	);
};
