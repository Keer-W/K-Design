import React, { useState } from 'react'
import classNames from "classnames";

interface BaseAlertProps {
  title?: string;
  description?: string;
  type?: string;
  closable?: boolean;
}
const Alert = (props: any) => {
  const [ show, setShow ] = useState(true)
  const {
    title,
    description,
    type,
    closable
  } = props
  const classes = classNames('alert')
  return (
    <React.Fragment>
      {show ? (
        <div>
          {
            <div className={classes}>
              <span className="alert-title">{title}</span>
              <p className="alert-desc">{description}</p>
              <span 
                onClick={() => {setShow(false)}}
                className="alert-close"
              >
                X
              </span>
            </div>
          }
        </div>
      ) : null}
    </React.Fragment>
  );
}
export default Alert