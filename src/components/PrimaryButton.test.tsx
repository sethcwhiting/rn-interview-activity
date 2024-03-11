import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react-native'
import { PrimaryButton } from './PrimaryButton'

describe('PrimaryButton', () => {
  it('calls onPress handler on press', () => {
    let called = false
    const onPress = () => {
      called = true
    }

    render(<PrimaryButton label="Click me" onPress={onPress}/>)

    fireEvent.press(screen.getByText('Click me'))

    expect(called).toEqual(true)
  })
})
