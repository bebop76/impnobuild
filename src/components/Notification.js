import React from "react";

const Notification = ( {showNotif} ) => {
    return(
        <div className={`notification-container ${showNotif ? 'show' : '' }`}>
        <p>HAI GIA' DIGITATO QUESTA LETTERA</p>
        </div>
    )
}

export default Notification