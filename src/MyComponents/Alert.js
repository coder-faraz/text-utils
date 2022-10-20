import React from 'react';


export default function Alert(props) {

    return (
      <div style={ {height: '8vh',} }>  {/* now the layout will not shift when an alert displays on page */}
        { props.alerting && <div className={`alert alert-${props.alerting} alert-dismissible fade show`} role="alert">
            <strong>{props.alerting ? props.alerting.charAt(0).toUpperCase() + props.alerting.slice(1) : props.alerting}</strong>
         </div> }   {/* Array.slice(1) - removes 1st character from array & returns remaining characters from alerting array */}
        </div>
  )
}

