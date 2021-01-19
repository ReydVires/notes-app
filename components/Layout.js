import Head from "next/head";
import Navbar from "./Navbar";

// Wrapping around all of the pages
const Layout = ({ children }) => (
	<>
		<Head>
			<title>Notes App</title>
		</Head>
		<Navbar />
		{children}
	</>
);

export default Layout;