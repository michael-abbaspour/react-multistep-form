/**
 * The Account Form component.
 */

import { useId } from "react";
import { FormWrapper } from "./FormWrapper";

type AccountData = {
	email: string
	password: string
}
type AccountFormProps = AccountData & {
	updateFields: (fields: Partial<AccountData>) => void;
}
export function AccountForm({
	email,
	password,
	updateFields
}: AccountFormProps) {
	const inputId = useId();
	return (
		<FormWrapper title="Account Creation">
			<label htmlFor={`${inputId}-email`}>Email</label>
			<input
				id={`${inputId}-email`}
				type="email"
				autoFocus
				required
				value={email}
				onChange={function(event) {
					updateFields({ email: event.target.value })}
				}
			/>
			<label htmlFor={`${inputId}-password`}>Password</label>
			<input
				id={`${inputId}-password`}
				type="password"
				required
				value={password}
				onChange={function(event) {
					updateFields({ password: event.target.value })}
				}
			/>
		</FormWrapper>
	)
}