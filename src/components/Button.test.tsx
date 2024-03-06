import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react-native'
import { Button } from './Button'

describe('Button', () => {
  it('calls onPress handler on press', () => {
    let called = false
    const onPress = () => {
      called = true
    }

    render(<Button label="Click me" onPress={onPress}/>)

    fireEvent.press(screen.getByText('Click me'))

    expect(called).toEqual(true)
  })
})
