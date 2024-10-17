import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["ar", "en"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
	"/": "/",
	"/about-us": "/about-us",
	"/our-services": "/our-services",
	"/projects": "/projects",
};

export const localePrefix: LocalePrefix<Locales> = "always";
