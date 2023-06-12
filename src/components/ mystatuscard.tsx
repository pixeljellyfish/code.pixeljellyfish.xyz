import { useLanyard } from "react-use-lanyard";

function statuscard() {
	const lanyard = useLanyard({
		userId: "952574663916154960",
	});

	return (
		<pre>{!lanyard.isValidating && JSON.stringify(lanyard, null, 4)}</pre>
	);
}

export default statuscard;