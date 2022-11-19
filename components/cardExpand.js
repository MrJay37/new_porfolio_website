import { SlArrowUp, SlArrowDown } from 'react-icons/sl'

export default function CardExpand(props){
    return <div className='switch' onClick={props.onClick} {...props}>
        {props.open ? <SlArrowUp />: <SlArrowDown />}
    </div>
}
