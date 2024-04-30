export default async function LoadingPage() {
	await new Promise<void>((res) =>
		setTimeout(() => {
			res();
		}, 5000)
	);

	return <h1>tets loading</h1>;
}
