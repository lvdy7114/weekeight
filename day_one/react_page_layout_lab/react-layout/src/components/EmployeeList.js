import React from 'react'

function EmployeeList(props) {
    return (
        <div className="employee-name-title">
            <h4>{props.name}</h4>
            <h5>{props.jobTitle}</h5>
        </div>
    );
}

export default EmployeeList