const URL_FOLDERS_FONTS= "https://cdn.jsdelivr.net/gh/SeatSADesignSystem/Seat-Fonts";
const FONTS = []
FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-Black.otf)`,
	descriptors:{weight: 900}
})

FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-BlackItalic.otf)`,
	descriptors:{style: "italic"}
})

FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-Bold.otf)`,
	descriptors:{weight: 900}
})

FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-BoldItalic.otf)`,
	descriptors:{style: "italic",
		weight: 700}
})

FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-Book.otf)`,
	descriptors:{}
})

FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-BookItalic.otf)`,
	descriptors:{style: "italic"}
})

FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-ExtraLight.otf)`,
	descriptors:{weight: 200}
})


FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-ExtraLightItalic.otf)`,
	descriptors:{style: "italic",weight: 200}
})

FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-ExtraLightItalic.otf)`,
	descriptors:{style: "italic",weight: 200}
})
FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-Italic.otf)`,
	descriptors:{style: "italic"}
})
FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-Light.otf)`,
	descriptors:{weight: 300}
})

FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-LightItalic.otf)`,
	descriptors:{style: "italic",weight: 300}
})

FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-Medium.otf)`,
	descriptors:{weight: 500}
})

FONTS.push({
	family: "SEATBCN",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-MediumItalic.otf)`,
	descriptors:{style: "italic",weight: 600}
})

FONTS.push({
	family: "SEATBCN-Regular",
	src: `url(${URL_FOLDERS_FONTS}/SEATBCN-Regular.otf)`,
	descriptors:{weight: 400}
})

export async function loadFonts() {
	const promisedFonts = FONTS.map(font => new FontFace (font.family,font.src,font.descriptors).load())
    const fonts = await Promise.all(promisedFonts).then (r => r)
	fonts.forEach(font=> document.fonts.add(font))
}