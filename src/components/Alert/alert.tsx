import React, { useState } from 'react'
import classNames from 'classnames'
import MdClose from "react-ionicons/lib/MdClose";

export type AlertType = 'success' | 'default' | 'warning' | 'danger'

export interface BaseAlertProps {
  className?: string;
  title?: string;
  description?: string;
  type?: AlertType;
  closable?: boolean;
  LogoNodejs?: any;
  onClick?: any;
}
export const Alert: React.FC<BaseAlertProps> = (props) => {
  const [ show, setShow ] = useState(true)
  const {
    className,
    title,
    description,
    type,
    closable
  } = props
  const classes = classNames('alert', className, {
    [`alert-${type}`]: type
  })
  return (
    <React.Fragment>
      {show ? (
        <div>
          {
            <div className={classes}>
              <span className="alert-title">{title}</span>
              <p className="alert-desc">{description}</p>
              {
                closable ? (
                  <span
                    onClick={() => {
                      setShow(false);
                    }}
                    className="alert-close"
                  >
                    <MdClose color="#fff" fontSize="30px" />
                  </span>
                ) : null
              }
            </div>
          }
        </div>
      ) : null}
    </React.Fragment>
  );
}

Alert.defaultProps = {
  type: 'default',
  closable: true
}
export default Alert