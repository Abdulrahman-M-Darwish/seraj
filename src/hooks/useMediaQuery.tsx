"use client";
import { useEffect, useState } from "react";

export const useMediaQuery = (media: string) => {
	const [isMatch, setIsMatch] = useState(
		typeof window == "object" ? matchMedia(media).matches : null,
	);
	useEffect(() => {
		const listner = () =>
			setIsMatch(typeof window == "object" ? matchMedia(media).matches : null);
		addEventListener("resize", listner);
		return () => removeEventListener("resize", listner);
	}, [media]);
	return isMatch;
};
