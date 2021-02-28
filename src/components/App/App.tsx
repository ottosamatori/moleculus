import React from "react";
import "./App.css";
import InputField from "../InputField/InputField";

const App: React.FC<any> = () => {
	return (
		<div className='App'>
			<InputField getEvent={(e) => console.log(e.target.value)} name='email' type='text' />
		</div>
	);
};

export default App;
