import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
	children: React.ReactNode;
	params: { locale: string };
};

const RootLayout: React.FC<Props> = ({ params: { locale }, children }) => {
	unstable_setRequestLocale(locale);
	return children;
};

export default RootLayout;
