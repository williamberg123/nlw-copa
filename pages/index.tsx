interface HomeProps {
	count: number
}

export default function Home(props: HomeProps) {
	return (
		<div>
			<h1>Hello, world</h1>
			<p>Há {props.count} bolão</p>
		</div>
	)
}

export async function getServerSideProps() {
	const response = await fetch('http://localhost:3333/pools/count');
	const data = await response.json();

	console.log(data);

	return {
		props: {
			count: data.count,
		}
	}
}
