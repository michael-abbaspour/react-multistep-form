import { FormEvent, useState } from "react";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./components/UserForm";
import { AddressForm } from "./components/AddressForm";
import { AccountForm } from "./components/AccountForm";
import './App.css';

type FormData = {
    firstName: string
    lastName: string
    age: string
    street: string
    city: string
    state: string
    zipCode: string
    email: string
    password: string
}

const initialData: FormData = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    password: ""
}

function App() {
    const [data, setData] = useState(initialData);
    function updateFields(fields: Partial<FormData>) {
        setData(function(prev) {
            return {
                ...prev,
                ...fields
            }
        })
    }
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, previousStep, nextStep } = useMultistepForm([
        <UserForm {...data} updateFields={updateFields} />,
        <AddressForm {...data} updateFields={updateFields} />,
        <AccountForm {...data} updateFields={updateFields} />
    ]);
    const onSubmit = function(event: FormEvent) {
        event.preventDefault();
        if (!isLastStep) {
            return nextStep();
        }
        alert("Account successfully registered!");
    }

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <div className="stepCounter">
                    {currentStepIndex + 1} / {steps.length}
                </div>
                {step}
                <div className="pagination">
                    {!isFirstStep && (
                        <button type="button" onClick={previousStep}>
                            Previous
                        </button>
                    )}
                    <button type="submit">
                        {isLastStep ? "Finish" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default App
