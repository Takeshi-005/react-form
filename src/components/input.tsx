import React, { Dispatch } from 'react'
import { Action, FormName } from '../reducer';
import styled from 'styled-components';

interface Props {
  name: keyof FormName;
  value?: string;
  dispatch?: Dispatch<Action>
  refs?: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
  className?: string;
}

const Input:React.FC<Props> = React.memo(props => (
  <input
    type="text"
    name={props.name}
    value={props.value}
    className={props.className}
    onChange={(e) => {
      props.dispatch && props.dispatch({
        type: "change",
        name: props.name,
        value: e.currentTarget.value
      })
    }}
    ref={props.refs}
  />
), (p,n) => (p.value === n.value))

export default styled(Input)`
  padding: 8px;
`
