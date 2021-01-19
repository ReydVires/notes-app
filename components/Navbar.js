import Link from "next/link";

const Navbar = () => (
	<nav className="navbar">
		<Link href="/">
			<a className="navbar-brand">Notes App</a>
		</Link>
		<Link href="/new">
			<a className="create">Create note</a>
		</Link>
	</nav>
);

export default Navbar;