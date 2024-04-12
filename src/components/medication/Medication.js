import React from "react";
import { useState } from "react";
import "./Medication.css";

//TODO implement saving med status via local storage.

export default function Medication(props) {
  const [medsTaken, setMedsTaken] = useState(false);

  const messages = {
    take: "Take",
    reset: "Reset",
    status: <p className='status-message-banner'>Taken</p>,
  };

  return (
    <div className='medication-component-wrapper'>
      <div className='med-wrapper-left'>
        <h1 className='med-name'>{props.name}</h1>
        <h2 className='med-dosage'>{`${props.dosage}mg`}</h2>
      </div>
      <div className='med-wrapper-right'>
        <button
          className='toggle-switch'
          onClick={() => {
            setMedsTaken(!medsTaken);
          }}
        >
          {`${!medsTaken ? messages.take : messages.reset}`}
        </button>

        {/* Meds taken banner */}
        {medsTaken ? messages.status : null}
      </div>
    </div>
  );
}
