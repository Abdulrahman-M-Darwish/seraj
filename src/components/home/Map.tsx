/* eslint-disable @next/next/no-sync-scripts */
"use client";
import React from "react";

export const Map = () => {
	return (
		<div className="flex-1 rounded-3xl overflow-hidden">
			<iframe
				id="gmap_canvas"
				className="h-full w-full"
				src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%D8%B3%D8%B1%D8%A7%D8%AC%20%D9%84%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%20+(%D8%B3%D8%B1%D8%A7%D8%AC%20%D9%84%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
			></iframe>
			<script
				type="text/javascript"
				src="https://embedmaps.com/google-maps-authorization/script.js?id=bbfda3d09ac4c93703d6f2dc309cee1d07d670fd"
			/>
		</div>
	);
};
