import Header from "../components/Header";
import SideNav from "../components/SideNav";

function App() {
	return (
		<div className="row" style={{ width: "100vw" }}>
			<SideNav />
			<div className="col">
				<Header />
			</div>
		</div>
	);
}

export default App;
