import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.css';

export default function MenuOption(props){
    const {
        name,
        icon,
        callFunction,
    } = props;
    return(
        <div className="modal-menu-option" onClick={callFunction}>
            <div className="menu-option-icon"><FontAwesomeIcon icon={icon} /></div>
            <div className="menu-option-name">{name}</div>
        </div>
    )
}