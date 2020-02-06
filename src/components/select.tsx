import React, { Dispatch } from "react";
import { Action, Name } from '../reducer';
import styled from "styled-components";


type Props = {
  name: Name;
  value?: string;
  dispatch?: Dispatch<Action>
  refs?: string | ((instance: HTMLSelectElement | null) => void) | React.RefObject<HTMLSelectElement> | null | undefined;
  className?: string;
}

const Select:React.FC<Props> = React.memo((props) => {
  return (
      <select
        value={props.value}
        onChange={(e) => {
          props.dispatch && props.dispatch({
            type: "change",
            name: props.name,
            value: e.currentTarget.value
          })
        }}
        name={props.name}
      >
        {props.children}
      </select>
  )
})



export default styled(Select)`
`
