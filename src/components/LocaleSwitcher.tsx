"use client";
import { useLocale } from "next-intl";
import React from "react";
import { usePathname, useRouter } from "@/navigation";

export const LocaleSwitcher = () => {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const handleClick = () => {
		router.replace(
			{
				pathname,
			},
			{ locale: locale == "ar" ? "en" : "ar" }
		);
	};
	return (
		<button
			onClick={handleClick}
			className="fw-bold relative text-lg px-4 group uppercase w-full text-start"
		>
			{locale == "ar" ? "en" : "ar"}
			<div className="max-mdx:hidden absolute h-1 w-full left-0 -bottom-4 rounded opacity-0 group-hover:opacity-100 transition-opacity bg-accent" />
		</button>
	);
};
