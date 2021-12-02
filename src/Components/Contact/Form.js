import Input from "../Assets/Input"
import Textarea from "../Assets/Textarea"

const Form = ({ inputs, onChange, allInputIsValid, onSubmit }) => {
    return (
        <form action="" onChange={(e) => onChange(e.target)} className="column gap-20" onSubmit={(e) => onSubmit(e)}>
            <div className="column">
                <Input input={inputs.name}/>
                <Input input={inputs.email}/>
                <Textarea input={inputs.message}/>
            </div>
            <div>
                {allInputIsValid() ? 
                <button className="solid-btn fs-14" style={{
                    backgroundColor: "var(--indigo)"
                }}>
                    <p>Send</p>
                </button>
                :
                <button className="solid-btn fs-14 disabled" style={{
                    backgroundColor: "var(--indigo)"
                }}>
                    <p>Send</p>
                </button>
                }
            </div>
        </form>
    )
}

export default Form
