import React, { Dispatch } from 'react'
import { Action, FormName } from '../reducer';

interface Props {
  name: keyof FormName;
  value?: string;
  dispatch?: Dispatch<Action>
  refs?: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined
}

const Input:React.FC<Props> = React.memo(({ value, name, dispatch, refs }) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={(e) => {
      dispatch && dispatch({
        type: "change",
        name,
        value: e.currentTarget.value
      })
    }}
    ref={refs}
  />
), (p,n) => (p.value === n.value))

export default Input
