'use client';

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { CrosswordContext } from './context';
import type { Direction, EnhancedProps } from './types';

import Clue from './Clue';

// interface ClueInfo {
//   number: string;
//   clue: string;
//   correct?: boolean;
// }

const directionCluesPropTypes = {
  /** direction of this list of clues ("across" or "down") */
  direction: PropTypes.string.isRequired,

  /** a label to use instead of the (English) default */
  label: PropTypes.string,
};

export type DirectionCluesProps = EnhancedProps<
  typeof directionCluesPropTypes,
  { direction: Direction }
>;

export default function DirectionClues({
  direction,
  label,
}: DirectionCluesProps) {
  const { clues } = useContext(CrosswordContext);
  return (
    <div>
      {/* use something other than h3? */}
      <h3 className="font-semibold text-xl">{label || direction.toUpperCase()}</h3>
      {clues?.[direction].map(({ number, clue, complete, correct, hint, usedHint = false }) => (
        <Clue
          key={number}
          direction={direction}
          number={number}
          complete={complete}
          correct={correct}
          hint={hint}
          usedHint={usedHint}
        >
          {clue}
        </Clue>
      ))}
    </div>
  );
}

DirectionClues.propTypes = directionCluesPropTypes;
