import { useTranslations } from "next-intl";
import React from "react";
import { Map } from "./Map";
import { ContactUsForm } from "./ContactUsForm";

export const ContactUs = () => {
	const t = useTranslations("HomePage.ContactUs");
	return (
		<div>
			<div className="space-y-4 mb-16 max-[400px]:px-4">
				<h2 className="label">{t("label")}</h2>
				<h3 className="text-[32px]">{t("heading")}</h3>
				<p>{t("description")}</p>
			</div>
			<div className="flex gap-8 max-md:flex-col">
				<div className="flex flex-1 ">
					<Map />
				</div>
				<ContactUsForm />
			</div>
		</div>
	);
};
