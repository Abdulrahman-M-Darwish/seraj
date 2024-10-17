"use client";
import { useEffect, useState } from "react";

export const useMediaQuery = (media: string) => {
	const [isMatch, setIsMatch] = useState(matchMedia(media).matches);
	useEffect(() => {
		const listner = () => setIsMatch(matchMedia(media).matches);
		addEventListener("resize", listner);
		return () => removeEventListener("resize", listner);
	}, [media]);
	return isMatch;
};
