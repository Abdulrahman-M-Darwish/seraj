"use client";
import { navLinks } from "@/constants";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
	const t = useTranslations("Navbar");
	const pathname = usePathname();
	return (
		<div
			className={
				"max-container z-50 py-8 flex gap-8 items-center justify-between " +
				(pathname == "/" ? "max-sm:absolute" : "")
			}
		>
			<Link href="/">
				<Image
					src="/logo.svg"
					width={100}
					height={100}
					alt="logo"
					className={pathname == "/" ? "max-sm:hidden" : ""}
				/>
				{pathname == "/" && (
					<Image
						src="/logo-light.svg"
						width={100}
						height={100}
						alt="logo"
						className="sm:hidden"
					/>
				)}
			</Link>
			<div className="flex flex-1 gap-2 items-center justify-evenly max-mdx:hidden">
				{navLinks.map((link) => (
					<Link
						key={link.path}
						href={link.path}
						className={
							"fw-bold relative text-lg px-4 group whitespace-nowrap " +
							(pathname == link.path ? "text-accent" : "")
						}
					>
						{t(link.name)}
						<div
							className={
								"absolute h-1 w-full left-0 -bottom-4 rounded opacity-0 group-hover:opacity-100 transition-opacity " +
								(pathname == link.path ? "bg-primary opacity-100" : "bg-accent")
							}
						/>
					</Link>
				))}
				<div>
					<LocaleSwitcher key={pathname} />
				</div>
			</div>
			<div className="flex gap-4">
				<Button size="lg" className="fw-bold max-sm:hidden">
					{t("serviceRequest")}
				</Button>
				<Button size="lg" variant="secondary" className="fw-bold max-sm:hidden">
					{t("contactUs")}
				</Button>
				<MobileNavbar />
			</div>
		</div>
	);
};
