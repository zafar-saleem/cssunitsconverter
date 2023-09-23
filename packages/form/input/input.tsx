"use client";

import { Props } from "./interfaces";
import * as Styled from "./input.styled";
import React from "react";

export const Input = ({ children, ...props }: Props) => {
  return (
    <Styled.Input>
      <Styled.Field
        type="number"
        name={props.name}
        disabled={props.lock && true}
        onChange={(event: any) => props.updateParentState && props.updateParentState(parseInt(event.target.value))}
        defaultValue={props.value && props.value}
        inputMode="numeric"
        {...props}
      />
      <Styled.Label>{props.label}</Styled.Label>
    </Styled.Input>
  )
}
