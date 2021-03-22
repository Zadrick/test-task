export const state = {
  cars: [
    { value: 'volvo', html: 'Volvo' },
    { value: 'audi', html: 'Audi' },
    { value: 'mercedes', html: 'Mercedes' },
    { value: 'toyota', html: 'Toyota' },
    { value: 'volvo', html: 'Volvo' },
  ]
}

type stateType = typeof state

export interface state extends stateType {}

export default state