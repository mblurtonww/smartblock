import * as React from 'react';
import { EditorView } from 'prosemirror-view';
import { undo, undoDepth } from 'prosemirror-history'
import UndoIcon from './icons/Undo';
import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface Props {
  view: EditorView
}

const BackBtn = styled.button`
  background: #F2F2F4;
  width: 44px;
  height: 44px;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 10;
  color: #014CC5;
  appearance: none;
  border: none;
  cursor: pointer;
  box-shadow: 0px 3px 6px rgba(0,0,0,.16);
  animation: ${appear} .3s;
  svg {
    fill: currentColor;
  }
`;


export default (props: Props) => {

  const { state, dispatch } = props.view;

  const depth = undoDepth(state);

  if (!depth) {
    return (<></>);
  }

  return (<BackBtn onClick={() => {
    undo(state, dispatch);
  }}><UndoIcon style={{ width: '24px', height: '24px' }} /></BackBtn>)
}