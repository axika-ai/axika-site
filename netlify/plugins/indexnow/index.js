// Submits the homepage to IndexNow after each production deploy, so Bing
// (which feeds ChatGPT search) picks up changes within hours instead of weeks.
// Never fails the build: any error is logged and swallowed.
const KEY = 'a2144ea5ea024422912c60f75ccbc707';

export const onSuccess = async () => {
	if (process.env.CONTEXT !== 'production') {
		console.log('IndexNow: skipped (not a production deploy)');
		return;
	}
	try {
		const res = await fetch('https://api.indexnow.org/IndexNow', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body: JSON.stringify({
				host: 'axika.ai',
				key: KEY,
				keyLocation: `https://axika.ai/${KEY}.txt`,
				urlList: ['https://axika.ai/'],
			}),
		});
		console.log(`IndexNow: submitted, status ${res.status}`);
	} catch (err) {
		console.log(`IndexNow: submission failed (${err.message}) — ignoring`);
	}
};
