'use client';

import React, { useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import type { Direction, EnhancedProps } from './types';
import { CrosswordContext } from './context';
import Hint from './Hint';

interface ClueWrapperProps {
  complete?: boolean | null;
  correct?: boolean | null;
  highlight?: boolean | null;
  highlightBackground?: string | null;
}

const ClueWrapper = styled.div.attrs<ClueWrapperProps>((props) => ({
  className: `clue${
    props.complete ? (props.correct ? ' correct' : ' incorrect') : ''
  }`,
}))<ClueWrapperProps>`
  cursor: pointer;
  background-color: ${(props) =>
    props.highlight ? props.highlightBackground : 'transparent'};
  padding: 0.5em 0;
`;

/**
 * Renders an individual clue, with its number. Makes use of `CrosswordContext`
 * to know whether to render as “highlighted” or not, and uses the theme to
 * provide the highlighting color.
 */
export default function Clue({
  direction,
  number,
  children,
  complete,
  correct,
  hint,
  usedHint,
  ...props
}: EnhancedProps<
  typeof Clue.propTypes,
  {
    /** direction of the clue: “across” or “down”; passed back in onClick */
    direction: Direction;
    hint: string;
    usedHint: boolean | null;
  }
>) {
  const { focused, selectedDirection, selectedNumber, handleClueSelected, handleHintSelected } = useContext(CrosswordContext);
  const [ onHintShow, setOnHintShow ] = useState<boolean>(false);

  const handleClick = useCallback<React.MouseEventHandler>(
    (event) => {
      event.preventDefault();
      handleClueSelected(direction, number);
    },
    [direction, number, handleClueSelected]
  );

  return (
    <>
      <div className="block mr-4">
        <ClueWrapper
          highlightBackground='rgb(255,255,204)'
          highlight={
            focused && direction === selectedDirection && number === selectedNumber
          }
          complete={complete}
          correct={correct}
          {...props}
          onClick={handleClick}
          aria-label={`clue-${number}-${direction}`}
        >
          問題{number}：{children}
        </ClueWrapper>
      </div>
      { hint && <span className="text-yellow-500 text-xs hidden cursor-pointer md:inline-block" onClick={() => { setOnHintShow(prev => !prev); handleHintSelected(direction, number); } }>Hintを{ onHintShow ? "閉じる" : "見る" }</span> }
      <Hint onShow={onHintShow}>{hint}</Hint>
    </>
  );
}

Clue.propTypes = {
  /** direction of the clue: "across" or "down"; passed back in onClick */
  direction: PropTypes.string.isRequired,
  /** number of the clue (the label shown); passed back in onClick */
  number: PropTypes.string.isRequired,
  /** clue text */
  children: PropTypes.node.isRequired,
  /** whether the answer/guess is complete */
  complete: PropTypes.bool,
  /** whether the answer/guess is correct */
  correct: PropTypes.bool,
};
