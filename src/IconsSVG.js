import React from 'react';
import InlineSVG from 'svg-inline-react';

const svgCheckedStyle = {
	width: "20px",
	height: "20px",
	color: "#91DC5A"
}
const svgCloseStyle = {
	width: "12px",
	height: "12px",
	color: "#D80027"
}

const svgSearchStyle = {
	width: "20px",
	height: "20px",
	color: "#006DF0"
}
const svgChecked =
	`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve" width="${svgCheckedStyle.width}" height="${svgCheckedStyle.height}">
 		<path d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0    c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136    C513.921,95.666,513.921,83.198,506.231,75.508z" fill="${svgCheckedStyle.color}"/>
   </svg>`;

const svgClose =
	`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${svgCloseStyle.width}" height="${svgCloseStyle.height}" version="1.1" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
	    <path fill="${svgCloseStyle.color}" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
	</svg>`;

const svgSearch =
	`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 451 451" style="enable-background:new 0 0 451 451;" xml:space="preserve" width="${svgSearchStyle.width}" height="${svgSearchStyle.height}">
		<path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z" fill="${svgSearchStyle.color}"/>
	</svg>`;

export const CheckedIcon = (<InlineSVG src={ svgChecked } className="svgstyle checked"/>);
export const CloseIcon = (<InlineSVG src={ svgClose } className="svgstyle close"/>);
export const SearchIcon = (<InlineSVG src={ svgSearch } className="svgstyle close"/>);
