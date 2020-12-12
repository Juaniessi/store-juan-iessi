import React, {useContext} from "react";
import {Context} from "../../context/ContextProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSmileBeam,
    faFrownOpen
} from '@fortawesome/free-solid-svg-icons';

function SuccessErrorModal({success}) {

    const {redeemState, setRedeemState} = useContext(Context);

    return(
        redeemState !== null ? (
        <div className="success-container">
            <FontAwesomeIcon icon={ success ? faSmileBeam : faFrownOpen} />
            <h3>Success!!</h3>
            <button onClick={ () => setRedeemState(null)}>OK</button>
        </div>)
    : null
    )
}

export default SuccessErrorModal;