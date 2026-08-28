import createMiddleware from "next-intl/middleware";
import { locales } from "./constants/nextIntlConfig";

export default createMiddleware({
	locales,
	defaultLocale: "en",
});

export const config = {
	matcher: ["/", "/(ar|en)/:path*"],
};
