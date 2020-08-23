import React, { useContext } from "react"
import classNames from "classnames"
import { TabsContext } from './tabs'

export interface TabItemProps {
  label: any;
  disabled?: boolean;
  className?: string;
  children?: string;
  index?: number;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const { contextIndex, onSelect } = useContext(TabsContext)
  const { index, label, disabled, className, children } = props
  const classes = classNames("tab-item", className, {
    "is-disabled": disabled,
    "is-active": contextIndex === index,
  });
  const handleClick = () => {
    if (onSelect && !disabled && index && children) {
      //bug:useContext第一次取不到onSelect？？？
      onSelect(index, children)
    }
  }
  return (
    <li className={classes} onClick={handleClick}>
      {label}
    </li>
  )
}

TabItem.displayName = 'TabItem'
export default TabItem
