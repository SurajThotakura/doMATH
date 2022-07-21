import './button.css'

const ButtonOL = (props) => {
    const buttonLabel = props.label;
    
    return (
        <div className="buttonComponent" onClick={props.buttonClicked}>
            {buttonLabel}
        </div>
    )
}

export default ButtonOL