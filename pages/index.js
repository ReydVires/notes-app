import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card, Grid } from "semantic-ui-react";

const Index = ({ notes }) => {
	const col = 3;
	return (
		<div className="notes-container">
			<h1>Notes</h1>
			<div className="grid">
				<Grid columns={col} divided centered>
				{notes.map((note) => (
					<div key={note._id}>
						<Card>
							<Card.Content>
								<Card.Header>
									<Link href={`/${note._id}`}>
										<a>{note.title}</a>
									</Link>
								</Card.Header>
							</Card.Content>
							<Card.Content extra>
								<div className='ui two buttons'>
									<Link href={`/${note._id}`}>
										<Button basic color="blue">View</Button>
									</Link>
									<Link href={`/${note._id}/edit`}>
										<Button basic color="yellow">Edit</Button>
									</Link>
								</div>
							</Card.Content>
						</Card>
					</div>
				))}
				</Grid>
			</div>
		</div>
	);
}

// Rendering first on server-side
Index.getInitialProps = async () => {
	const res = await fetch("http://localhost:3000/api/notes");
	const { data } = await res.json();

	return { notes: data };
}

export default Index;