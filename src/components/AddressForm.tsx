/**
 * The Address Form component.
 */

import { useId } from "react";
import { FormWrapper } from "./FormWrapper";

type AddressData = {
	street: string
	city: string
	state: string
	zipCode: string
}
type AddressFormProps = AddressData & {
	updateFields: (fields: Partial<AddressData>) => void;
}
export function AddressForm({
	street,
	city,
	state,
	zipCode,
	updateFields
}: AddressFormProps) {
	const inputId = useId();
	return (
		<FormWrapper title="Address">
			<label htmlFor={`${inputId}-street`}>Street</label>
			<input
				id={`${inputId}-street`}
				type="text"
				autoFocus
				required
				value={street}
				onChange={function(event) {
					updateFields({ street: event.target.value })}
				}
			/>
			<label htmlFor={`${inputId}-city`}>City</label>
			<input
				id={`${inputId}-city`}
				type="text"
				required
				value={city}
				onChange={function(event) {
					updateFields({ city: event.target.value })}
				}
			/>
			<label htmlFor={`${inputId}-state`}>State</label>
			<input
				id={`${inputId}-state`}
				type="text"
				required
				value={state}
				onChange={function(event) {
					updateFields({ state: event.target.value })}
				}
			/>
			<label htmlFor={`${inputId}-zipCode`}>Zip Code</label>
			<input
				id={`${inputId}-zipCode`}
				type="text"
				required
				value={zipCode}
				onChange={function(event) {
					updateFields({ zipCode: event.target.value })}
				}
			/>
		</FormWrapper>
	)
}