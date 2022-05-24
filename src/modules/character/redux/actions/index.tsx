import { CLICK_UPDATE_VALUE } from './action-types'


export const clickUpdate = (value: string) => (
    {
        type: CLICK_UPDATE_VALUE,
        newValue: value
    }
)

