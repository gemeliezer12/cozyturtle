import TextareaAutosize from "react-textarea-autosize"

const Input = ({input}) => {
    return (
        <div className={`input-label ${input.value !== "" && "focus-within"} ${input.value === "" ? "" : input.isValid ? "valid" : "invalid"}`}>
            {input.isRequired ? 
            <div>
                <label htmlFor={input.name} className="label">
                    {input.label}
                    <span style={{
                        color: "var(--red)"
                    }}>*</span>
                </label>
                <TextareaAutosize name={input.name} required/>
            </div>
            :
            <div>
                <label htmlFor={input.name} className="label">
                    {input.label}
                </label>
                <TextareaAutosize name={input.name}/>
            </div>
            }
        </div>
    )
}

export default Input
