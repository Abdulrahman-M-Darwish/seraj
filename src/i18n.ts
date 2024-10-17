import { getRequestConfig } from "next-intl/server";
import { locales } from "./constants/nextIntlConfig";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	if (!locales.includes(locale as any)) notFound();
	return {
		messages: (await import(`./messages/${locale}.json`)).default,
	};
});
