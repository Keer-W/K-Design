import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void

export interface MenuProps {
  //默认高亮
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  //自定义样式
  style?: React.CSSProperties;
  //自定义回调
  onSelect?: SelectCallback;
  //纵向模式下控制SubMenu是否自动展开
  defaultOpenSubMenus?: string[];
}

//确定context类型
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
//创建context
export const MenuContext = createContext<IMenuContext>({index: '0'}) 

export const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    children,
    onSelect,
    defaultOpenSubMenus,
  } = props

  //定义当前高亮项目
  const [ currentActive, setActive ] = useState(defaultIndex)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

  const handleClick = (index: string) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }
  
  //定义传递给子组件的context
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }

  //该方法用来循环渲染组件
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      //为了拿到displayName,需要转化成一个FunctionCoponent的实例
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      //displayName调试用
      const { displayName } = childElement.type
      //判断Menu的子组件只能是MenuItem和SubMenu,其他类型报错
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        //为子元素自动添加index,避免手动添加的繁琐
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error("Warning:Menu has a child which is not a MenuItem component")
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider> 
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}
export default Menu