/**
 * The function used to render out our steps.
 */

import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	function nextStep() {
		setCurrentStepIndex(function(i) {
			if (i >= steps.length) {
				return i;
			}
			return i + 1;
		})
	}

	function previousStep() {
		setCurrentStepIndex(function(i) {
			if (i <= 0) {
				return i;
			}
			return i - 1;
		})
	}

	/*function goToStep(index: number) {
		setCurrentStepIndex(index);
	}*/

	return {
		currentStepIndex,
		step: steps[currentStepIndex],
		steps,
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === steps.length - 1,
		nextStep,
		previousStep
	}
}