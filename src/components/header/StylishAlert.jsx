import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {coinsAlertMsj} from "../../services/const";

function StylishAlert({succeed}) {
	const {className, icon, message} = coinsAlertMsj[
		succeed ? 'success' : 'error'
	];
	return (
		<div className={`add-coins-notification ${className}`}>
			<FontAwesomeIcon className='status-icon' icon={icon} />
			<h4 className='message'>{message}</h4>
		</div>
	);
}

export default StylishAlert;