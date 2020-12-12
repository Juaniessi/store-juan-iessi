import React, {useContext} from "react";
import {Context} from "../../context/ContextProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faThumbsUp,
    faThumbsDown
} from '@fortawesome/free-solid-svg-icons';

function SuccessErrorModal() {

    const {redeemState, setRedeemState} = useContext(Context);

    return(
        redeemState !== null ? (
            <div className="full-container">
                <div className={`message-container ${redeemState ? "success-background" : "error-background"}`}>
                    <FontAwesomeIcon icon={ redeemState ? faThumbsUp : faThumbsDown} className="icon-message" />
                    <h3 className="message">{ redeemState ? "success!" : "error!"}</h3>
                    <span className="large-message">
                        { redeemState ? "thanks for your redeem, everything went wonderfully." : "oh no, something went wrong."}
                    </span>
                    <button onClick={() => setRedeemState(null)} className="close-button">
                        { redeemState ? "great!" : "try again"}
                    </button>
                </div>
            </div>)
        : null
    )
}

export default SuccessErrorModal;