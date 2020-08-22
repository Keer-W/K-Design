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
  //纵向模式下，控制SubMenu是否默认展开
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  //钩子函数useState，控制下拉菜单的展示
  const [ menuOpen, setOpen ] = useState(isOpend)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  });
  //下拉菜单点击展示函数
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  //下拉菜单hover展示函数
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  //纵向模式下，SubMenu的内容点击展示
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : null
  //横向模式下，SubMenu的内容hover展示
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
  } : null

  //该函数用来循环渲染组件
  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-open': menuOpen
    }) 
    const childrenComponent = React.Children.map(children, (child, i) => {
      //为了拿到displayName,需要转化成一个FunctionCoponent的实例
      const childElement = child as FunctionComponentElement<MenuItemProps>
      //判断SubMenu组件的子组件只能是MenuItem，其他类型报错
      if (childElement.type.displayName === 'MenuItem') {
        //为元素自动添加index,避免手动添加的麻烦
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
      <div {...clickEvents} className="submenu-title">
        {title}
        <IosArrowDown className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  )
}
//用来判断Menu只能包含MenuItem和SbuMenu
SubMenu.displayName = 'SubMenu'
export default SubMenu