'use client';

import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import { CrosswordSizeContext } from './context';
import type { UsedCellData, EnhancedProps } from './types';

const cellPropTypes = {
  /** the data specific to this cell */
  cellData: PropTypes.shape({
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    guess: PropTypes.string, // .isRequired,
    number: PropTypes.string,
    answer: PropTypes.string,
  }).isRequired,

  /** whether this cell has focus */
  focus: PropTypes.bool,

  /** whether this cell is highlighted */
  highlight: PropTypes.bool,

  /** handler called when the cell is clicked */
  onClick: PropTypes.func,
};

export type CellProps = EnhancedProps<
  typeof cellPropTypes,
  {
    /** the data specific to this cell */
    cellData: UsedCellData;
    /** handler called when the cell is clicked */
    onClick?: (cellData: UsedCellData) => void;
  }
>;

/**
 * An individual-letter answer cell within the crossword grid.
 *
 * A `Cell` lives inside the SVG for a
 * [`CrosswordGrid`](#/Complex%20layouts/CrosswordGrid), and renders at a
 * position determined by the `row`, `col`, and `cellSize` properties from
 * `cellData` and `renderContext`.
 */
export default function Cell({
  cellData,
  onClick,
  focus,
  highlight,
}: CellProps) {
  const { cellSize, cellPadding, cellInner, cellHalf, fontSize } = useContext(CrosswordSizeContext);

  const handleClick = useCallback<React.MouseEventHandler>(
    (event) => {
      event.preventDefault();
      if (onClick) {
        onClick(cellData);
      }
    },
    [cellData, onClick]
  );

  const { row, col, guess, number, answer } = cellData;

  const x = col * cellSize;
  const y = row * cellSize;

  return (
    <g
      onClick={handleClick}
      style={{ cursor: 'default', fontSize: `${fontSize}px` }}
      className="clue-cell"
    >
      <rect
        x={x + cellPadding}
        y={y + cellPadding}
        width={cellInner}
        height={cellInner}
        fill={
          focus
            ? 'rgb(255,255,0)'
            : highlight
            ? 'rgb(255,255,204)'
            : 'rgb(255,255,255)'
        }
        stroke={'rgb(0,0,0)'}
        strokeWidth={cellSize / 50}
      />
      {number && (
        <text
          x={x + cellPadding * 4}
          y={y + cellPadding * 4}
          textAnchor="start"
          dominantBaseline="hanging"
          className="fill-rose-700 font-bold"
          style={{ fontSize: '65%' }}
        >
          {number}
        </text>
      )}
      <text
        x={x + cellHalf}
        y={y + cellHalf + 1} // +1 for visual alignment?
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fill: answer === guess ? 'rgb(0,0,0)' : "#d32f2f" }}
        className={
          answer === guess ? 'guess-text-correct' : 'guess-text-incorrect'
        }
      >
        {guess}
      </text>
    </g>
  );
}

Cell.propTypes = cellPropTypes;
