import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { navLinks } from "@/constants";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { RxHamburgerMenu } from "react-icons/rx";

export const MobileNavbar = () => {
	const t = useTranslations("Navbar");
	const pathname = usePathname();
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					className={
						"mdx:hidden !rounded-lg " + (pathname == "/" ? "text-white" : "")
					}
				>
					<RxHamburgerMenu size={20} />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-screen rounded-none mx-auto mt-4 p-0">
				<div className="flex flex-col text-lg">
					{navLinks.map((link) => (
						<Link
							key={link.path}
							href={link.path}
							className={`p-4 hover:bg-primary transition-colors hover:text-primary-foreground ${
								pathname == link.path ? "text-accent bg-primary" : ""
							}`}
						>
							{t(link.name)}
						</Link>
					))}
					<button className="p-4 text-start sm:hidden !rounded-none hover:bg-primary transition-colors hover:text-primary-foreground">
						{t("serviceRequest")}
					</button>
					<button className="p-4 text-start sm:hidden !rounded-none hover:bg-primary transition-colors hover:text-primary-foreground">
						{t("contactUs")}
					</button>
					<div className="py-4 hover:bg-primary transition-colors hover:text-primary-foreground">
						<LocaleSwitcher />
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
};
