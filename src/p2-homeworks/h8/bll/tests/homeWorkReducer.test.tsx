import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},

        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    expect(newState.length).toBe(6)
    expect(newState[0]._id).toBe(1)
    expect(newState[0].name).toBe('Александр')
    expect(newState[5].name).toBe('Кот')
    expect(newState[1].age).not.toBe(40)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    console.log(newState)
    expect(newState[0].name).toBe('Кот')
    expect(newState[5].name).toBe('Александр')
    expect(newState[1].age).not.toBe(40)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    expect(newState.length).not.toBe(initialState.length)
    expect(newState[0].name).toBe('Александр')
    expect(newState[3].name).toBe('Ирина')
    expect(newState[1].age).toBe(44)
    expect(newState.length).toBe(4)
})
