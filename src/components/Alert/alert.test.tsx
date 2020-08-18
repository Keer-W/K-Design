import React from 'react'
import { render , fireEvent } from '@testing-library/react'
import Alert, { BaseAlertProps } from './alert'

const defaultProps = {
  title: '标题',
  description: '这是一个描述',
  onClick: jest.fn()
}

const testProps = {
  type: 'danger',
  title: '标题', 
  description: '这是一个描述'
}

const closableProps: BaseAlertProps = {
  closable: false,
  onClick: jest.fn()
}

describe('test Alert Component', () => {
  it('should render the correct default alert', () => {
    const wrapper = render(<Alert {...defaultProps}/>)
    const element = wrapper.container.querySelector('.alert')
    const closeElement = wrapper.container.querySelector('.alert-close')
    expect(element).toBeInTheDocument()
    expect(closeElement).toBeInTheDocument()
    expect(element).toHaveClass('alert alert-default')
    expect(closeElement.tagName).toEqual('SPAN')
    fireEvent.click(closeElement)
    expect(element).not.toBeInTheDocument()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Alert {...testProps}/>)
    const element = wrapper.container.querySelector('.alert')
    const closeElement= wrapper.container.querySelector('.alert-close')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('alert alert-danger')
    expect(closeElement).toBeInTheDocument();
    fireEvent.click(closeElement);
    expect(element).not.toBeInTheDocument();
  })
  it('should not render alert component when closableed set to false', () => {
    const wrapper = render(<Alert {...closableProps} />);
    const element = wrapper.container.querySelector(".alert");
    const closeElement = wrapper.container.querySelector(".alert-close");
    expect(closeElement).not.toBeInTheDocument()
  })
})