import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { locales, localePrefix, pathnames } from "./constants/nextIntlConfig";

export const {
	Link,
	getPathname,
	permanentRedirect,
	redirect,
	usePathname,
	useRouter,
} = createLocalizedPathnamesNavigation({
	locales,
	pathnames,
	localePrefix,
	defaultLocale: "ar",
});
