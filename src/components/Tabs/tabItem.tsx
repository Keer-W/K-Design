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
  const context = useContext(TabsContext)
  const { index, label, disabled, className, children } = props
  const classes = classNames('tab-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  console.log(context)
  const handleClick = () => {
    if (context.onSelect && !disabled && index && children) {
      //bug:context.onSelect传过来，第一次获取的为undefined，其余正常
      context.onSelect(index, children)
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
