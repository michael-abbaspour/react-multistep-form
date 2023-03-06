/**
 * The User Form component.
 */

import { useId } from "react";
import { FormWrapper } from "./FormWrapper";

type UserData = {
	firstName: string
	lastName: string
	age: string
}

type UserFormProps = UserData & {
	updateFields: (fields: Partial<UserData>) => void;
}

export function UserForm({ firstName, lastName, age, updateFields }: UserFormProps) {
	const inputId = useId();
	return (
		<FormWrapper title="User Details">
			<label htmlFor={`${inputId}-firstName`}>First Name</label>
			<input
				id={`${inputId}-firstName`}
				type="text"
				autoFocus
				required
				value={firstName}
				onChange={function(event) {
					updateFields({ firstName: event.target.value })}
				}
			/>
			<label htmlFor={`${inputId}-lastName`}>Last Name</label>
			<input
				id={`${inputId}-lastName`}
				type="text"
				required
				value={lastName}
				onChange={function(event) {
					updateFields({ lastName: event.target.value })}
				}
			/>
			<label htmlFor={`${inputId}-age`}>Age</label>
			<input
				id={`${inputId}-age`}
				type="number"
				required
				min={1}
				value={age}
				onChange={function(event) {
					updateFields({ age: event.target.value })}
				}
			/>
		</FormWrapper>
	)
}