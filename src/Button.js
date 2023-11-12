import react from 'react'

const  Button=(props)=>{

    return(
        <div>
        <p>This is button component using aroow function </p>
        <button>{props.name}</button>
        </div>
    )

}
export default Button;