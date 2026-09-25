/* eslint-disable @next/next/no-sync-scripts */
"use client";
import React from "react";

export const Map = () => {
	return (
		<div className="flex-1 rounded-3xl overflow-hidden">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.8029923219488!2d46.714935999999994!3d24.767943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd84c62786e3%3A0x52f7572a48d7434b!2zQ2Vub21pIEFsIE5ha2hlZWwgTWFsbCB8INiz2YrZhtmI2YXZiiDYp9mE2YbYrtmK2YQg2YXZiNmEINmI2KzZh9iq2YMg2KfZhNmF2YHYttmE2Kk!5e0!3m2!1sen!2seg!4v1790340701991!5m2!1sen!2seg"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen={false}
				loading="lazy"
				referrerPolicy="strict-origin-when-cross-origin"
			></iframe>
		</div>
	);
};
