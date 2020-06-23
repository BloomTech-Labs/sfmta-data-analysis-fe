import React, {useState} from 'react'



export const Hover = (props) => {
    const [hover, setHover] = useState(false)

    const toggleOn = () => {
        setHover(true)
    }
    const toggleOff = () => {
        setHover(false)
    }

return(
<>
    <div className='hoverdiv' onMouseEnter={() => toggleOn()} onMouseLeave={() => toggleOff()}>
        i
    </div>
    <div className={"popup" + (hover ?  ''  : ' hiddenpopup ')}>
        {props.sentence}
    </div>
</>
    )
 }