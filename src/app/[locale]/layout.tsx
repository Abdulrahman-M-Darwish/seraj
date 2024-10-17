import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Footer, Navbar } from "@/components";
import {
	getMessages,
	getTranslations,
	unstable_setRequestLocale,
} from "next-intl/server";

const avenirLight = localFont({
	src: "../fonts/AvenirArabic-Light.ttf",
	variable: "--font-avenir-light",
});

const avenirMedium = localFont({
	src: "../fonts/Avenir-Medium.ttf",
	variable: "--font-avenir-medium",
});

const avenirBold = localFont({
	src: "../fonts/AvenirArabic-Bold.ttf",
	variable: "--font-avenir-bold",
});

type Props = {
	children: React.ReactNode;
	params: { locale: string };
};

const Layout = async ({ children, params: { locale } }: Props) => {
	unstable_setRequestLocale(locale);
	const t = await getTranslations({ locale, namespace: "metadata" });
	const messages = await getMessages();
	return (
		<html lang={locale} dir={t("dir")}>
			<body
				className={`${avenirLight.variable} ${avenirMedium.variable} ${avenirBold.variable} antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					<Navbar />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export const generateMetadata = async ({
	params: { locale },
}: Omit<Props, "children">) => {
	const t = await getTranslations({ locale, namespace: "metadata" });
	return {
		title: t("title"),
	};
};

// export function generateStaticParams() {
// 	return locales.map((locale) => ({ locale }));
// }

export default Layout;
