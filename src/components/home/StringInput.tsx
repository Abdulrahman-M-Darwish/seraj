import React from "react";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type Props = {
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	form: any;
	label: string;
};

export const StringInput: React.FC<Props> = ({ form, label, name }) => {
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel className="cursor-pointer fw-bold text-base">
						{label}
					</FormLabel>
					<FormControl>
						<Input
							placeholder={label}
							{...field}
							className="rounded-full !mt-4"
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
