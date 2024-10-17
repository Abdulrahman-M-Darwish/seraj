import { Cards, KnowUs, Leaders, Main, Stats } from "@/components";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
	params: {
		locale: string;
	};
};

const AboutUsPage: React.FC<Props> = ({ params: { locale } }) => {
	unstable_setRequestLocale(locale);
	return (
		<div className="space-y-20">
			<Main />
			<Cards />
			<Stats />
			<KnowUs />
			<div className="max-container">
				<Leaders />
			</div>
		</div>
	);
};

export default AboutUsPage;
