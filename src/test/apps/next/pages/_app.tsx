import Head from "next/head";
import type { AppProps } from 'next/app'
import { createEmotionSsrAdvancedApproach } from "tss-react/nextJs";
import "dsfr-react/dsfr/dsfr.css";
import { withDsfr } from "dsfr-react/lib/nextJs";

const { EmotionCacheProvider, withEmotionCache } = createEmotionSsrAdvancedApproach({ "key": "css" });

export { withEmotionCache };

export function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Next DSFR!</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<EmotionCacheProvider>
				<Component {...pageProps} />
			</EmotionCacheProvider>
		</>
	);
}

//export default withDsfr(DefaultApp);
export default withDsfr(App, {
	"defaultColorScheme": "system",
	"preloadFonts": [
		"Marianne-Bold",
		"Marianne-Regular",
		"Marianne-Medium"
	]
});
