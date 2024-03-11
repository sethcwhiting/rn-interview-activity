import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react-native'
import { Toggle, ToggleButton } from './ToggleButton'

describe('ToggleButton', () => {
  it('toggles true on first press', () => {
    let toggleState = false
    const onToggle = ({ state }: Toggle) => {
      toggleState = state
    }

    render(<ToggleButton name="thing" label="Thing" onToggle={onToggle}/>)

    fireEvent.press(screen.getByText('Thing'))

    expect(toggleState).toEqual(true)
  })

  it('toggles false on next press', () => {
    let toggleState = false
    const onToggle = ({ state }: Toggle) => {
      toggleState = state
    }

    render(<ToggleButton name="thing" label="Thing" onToggle={onToggle}/>)

    fireEvent.press(screen.getByText('Thing'))
    fireEvent.press(screen.getByText('Thing'))

    expect(toggleState).toEqual(false)
  })
})
