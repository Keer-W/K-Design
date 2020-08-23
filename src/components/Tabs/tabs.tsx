import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { TabItemProps } from './tabItem'

interface TabsProps {
  defaultContent?: string;
  defaultIndex?: number;
  className?: string;
  onSelect?: (selectedIndex: number, children?: string) => void;
  type?: string;
}

interface ITabsContext  {
  contextIndex: number;
  onSelect: (selectedIndex: number, children: string) => void;
}

export const TabsContext = createContext<ITabsContext>({ contextIndex: 0, onSelect: () => {}});

export const Tabs: React.FC<TabsProps> = (props) => {
  const { defaultContent, defaultIndex, className, onSelect, type, children } = props
  const classes = classNames('tab', className, {

  })
  const [ currentActive, setActive ] = useState(defaultIndex)
  const [ currentContent, setContent ] = useState(defaultContent)
  const handleClick = (index: number, children: string) => {
    setActive(index)
    setContent(children)
    if(onSelect) {
      onSelect(index)
    }
  }
  const activeContext: ITabsContext = {
    contextIndex: currentActive ? currentActive : 0,
    onSelect: handleClick,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      const { displayName } = childElement.type
      if (displayName === 'TabItem') {
        return React.cloneElement(childElement, {
          index: index
        })
      } else {
        console.error("Warning: Tabs has a child whick is not a TabItem component")
      }
    })
  }
  return (
    <React.Fragment>
      <ul className={classes}>
        <TabsContext.Provider value={activeContext}>
          {renderChildren()}
        </TabsContext.Provider>
      </ul>
      <div className="tab-content">
        {currentContent}
      </div>
    </React.Fragment>
  );
}

Tabs.defaultProps = {
  defaultIndex: 0,
  defaultContent: 'keer'
}
export default Tabs