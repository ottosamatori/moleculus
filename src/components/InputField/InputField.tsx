import React from "react";

type Props = {
	getEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
	type: "text" | "password" | "email" | "number";
	name: string;
};

const InputField: React.FC<Props> = ({ getEvent, name, type }) => {
	const [value, setValue] = React.useState("");

	const onChange = React.useCallback(
		(e) => {
			getEvent(e);
			setValue(e.target.value);
		},
		[getEvent]
	);

	return <input value={value} onChange={onChange} name={name} type={type} />;
};

export default InputField;
