import { useState } from "react";

export default function Forms(props) {
	const [state, setState] = useState({ name: "", sex: "", color: "", extra: "", description: "" })
	const handleSubmit = (e) => {
		e.prventDefault();
		// props.cb(state);
		setState(state);

	};
	const change = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name</label>
					<input placeholder="Name" value="name" name="name" onchange={change} />

				</div>
				<div>
					<label>Sex</label>
					<div>
					<label>Male</label>
					<input type="radio" placeholder="sex" value="male" name="sex" onchange={change} />
					<label>Female</label>
					<input type="radio" placeholder="sex" value="female" name="sex" onchange={change} />
					</div>

				</div>
				<div>
					<label>Check All that Apply: </label>
					<input type="checkbox" placeholder="extra" value="over 6 feet tall" name="extra" onchange={change} />
					<input type="checkbox" placeholder="extra" value="over 200 pounds" name="extra" onchange={change} />

				</div>
				<div>

					<label>Eye Color</label>
					<select name="color">
						<option value="green">green</option>
						<option value="green">blue</option>
						<option value="green">black</option>
					</select>

					</div>
					<div>
						<label>Describe Your athletic Ability: </label>
						<input type="textarea" placeholder="your text here" value="description" name="description" onchange={change} />

					</div>
				
				<input type="submit" />

			</form>
		</div>
	)
}