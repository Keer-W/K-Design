import React, { useContext, useState, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import IosArrowDown from "react-ionicons/lib/IosArrowDown";
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface SubMenuProps {
  index?: string;
  className?: string;
  title: string;
}
export const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, className, title, children } = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  const [ menuOpen, setOpen ] = useState(isOpend)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : null
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
  } : null
  //该函数渲染下拉菜单的内容
  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-open': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      //类型断言
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error("Warning: SubMenu has a child whick is not a MenuItem component")
      }
    })
    return (
      <ul className={subMenuClasses}>
        { childrenComponent }
      </ul>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div 
        {...clickEvents}
        className="submenu-title"
      >
        {title}
        <IosArrowDown className="arrow-icon" />
      </div>
      { renderChildren() }
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu