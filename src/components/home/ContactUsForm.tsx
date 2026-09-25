"use client";
import React from "react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { StringInput } from "./StringInput";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export const ContactUsForm = () => {
	const t = useTranslations("HomePage.ContactUs.form");
	const validationSchema = z.object({
		fullName: z.string({ message: t("required") }).min(3, t("3atLeast")),
		email: z.string({ message: t("required") }).email(t("invalidEmail")),
		phoneNumber: z.string({ message: t("required") }).min(3, t("3atLeast")),
		message: z.string({ message: t("required") }).min(10, t("messageError")),
	});
	const form = useForm<z.infer<typeof validationSchema>>({
		resolver: zodResolver(validationSchema),
		defaultValues: {
			email: undefined,
			fullName: undefined,
			message: undefined,
			phoneNumber: undefined,
		},
	});
	const onSubmit = (values: z.infer<typeof validationSchema>) => {
		console.log(values);
	};
	return (
		<Form {...form}>
			<form
				className="flex-1 bg-secondary py-12 px-4 min-[450px]:px-10 sm:px-16 rounded-2xl"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<h2 className="text-xl sm:text-2xl mb-8">{t("heading")}</h2>
				<div className="space-y-8">
					<StringInput form={form} label={t("fullName")} name="fullName" />
					<div className="flex max-sm:flex-col gap-4">
						<div className="flex-1">
							<StringInput form={form} label={t("email")} name="email" />
						</div>
						<div className="flex-1">
							<StringInput
								form={form}
								label={t("phoneNumber")}
								name="phoneNumber"
							/>
						</div>
					</div>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="cursor-pointer fw-bold text-base">
									{t("message")}
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder={t("message")}
										className="rounded-xl"
										rows={5}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button size="lg" className="w-full">
						{t("submit")}
					</Button>
				</div>
			</form>
		</Form>
	);
};
