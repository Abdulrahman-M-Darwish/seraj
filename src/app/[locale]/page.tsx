import {
	About,
	ContactUs,
	Hero,
	Leaders,
	News,
	OurClients,
	WhatWeAdded,
	Projects,
	Services,
} from "@/components";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
	params: {
		locale: string;
	};
};

export default function Home({ params: { locale } }: Props) {
	unstable_setRequestLocale(locale);
	return (
		<div className="space-y-20">
			<Hero />
			<div className="max-container space-y-20">
				<About />
				<Services />
				<Projects />
				<Leaders />
				<OurClients />
				<WhatWeAdded />
				<News />
			</div>
			<div className="min-[400px]:max-container">
				<ContactUs />
			</div>
		</div>
	);
}
