/**
 * The Form Wrapper component.
 */

import { ReactNode } from "react";
import styles from "../assets/styles.module.css"

type FormWrapperProps = {
	title: string
	children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
	return (
		<>
			<h2 className={styles.centeredHeading}>
				{title}
			</h2>
			<div className={styles.formElements}>
				{children}
			</div>
		</>
	)
}