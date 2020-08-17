import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './button'

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
  })
  it('should render the correct component based on different props', () => {

  })
  it('should render a link when btnType equals link and href is provided', () => {

  })
  it('should render disabled button when disable set true', () => {

  })
})