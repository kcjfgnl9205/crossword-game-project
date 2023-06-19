'use client';

/* eslint-disable no-console */

import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import produce from 'immer';
import { ThemeProvider } from 'styled-components';

import { CrosswordContext, CrosswordContextType } from './context';
import {
  AnswerTuple,
  CluesData,
  CluesInput,
  cluesInputShapeOriginal,
  Direction,
  EnhancedProps,
  FocusHandler,
  GridPosition,
  GridData,
  UsedCellData,
  CellData,
  UnusedCellData,
  LangType
} from './types';
import {
  bothDirections,
  clearGuesses,
  createGridData,
  isAcross,
  loadGuesses,
  otherDirection,
  saveGuesses,
} from './util';

const defaultStorageKey = 'guesses';

export const crosswordProviderPropTypes = {
  lang: PropTypes.any.isRequired,
  /**
   * clue/answer data; see <a
   * href="#/Configuration%20and%20customization/Clue%20input%20format">Clue
   * input format</a> for details.
   */
  data: cluesInputShapeOriginal.isRequired,

  /** presentation values for the crossword; these override any values coming from a parent ThemeProvider context. */
  theme: PropTypes.shape({
    /**
     * whether to allow a non-square rendering
     * @since 5.1.0
     */
    allowNonSquare: PropTypes.bool,

    /** browser-width at which the clues go from showing beneath the grid to showing beside the grid */
    columnBreakpoint: PropTypes.string,

    /** overall background color (fill) for the crossword grid; can be `'transparent'` to show through a page background image */
    gridBackground: PropTypes.string,
    /**  background for an answer cell */
    cellBackground: PropTypes.string,
    /** border for an answer cell */
    cellBorder: PropTypes.string,
    /** color for answer text (entered by the player) */
    textColor: PropTypes.string,
    /** background color for the cell with focus, the one that the player is typing into */
    focusBackground: PropTypes.string,
    /**
     * background color for the cells in the answer the player is working on,
     * helps indicate in which direction focus will be moving; also used as a
     * background on the active clue
     */
    highlightBackground: PropTypes.string,
  }),

  /** whether to use browser storage to persist the player's work-in-progress */
  useStorage: PropTypes.bool,

  /**
   * a custom storage key to use for persistence; defaults to "guesses" when not
   * provided
   */
  storageKey: PropTypes.string,

  /**
   * callback function that fires when a player completes an answer, whether
   * correct or not; called with `(direction, number, correct, answer)`
   * arguments, where `direction` is `'across'` or `'down'`, `number` is the
   * clue number as text (like `'1'`), `correct` is whether the guessed answer
   * is correct and `answer` is the (actual and correct) answer itself
   *
   * @since 4.3.0
   */
  onAnswerComplete: PropTypes.func,

  /**
   * callback function that fires when a player answers a clue correctly; called
   * with `(direction, number, answer)` arguments, where `direction` is
   * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
   * and `answer` is the answer itself
   *
   * @since 4.3.0; replacing `onCorrect` (to reduce ambiguity)
   */
  onAnswerCorrect: PropTypes.func,

  /**
   * callback function that fires when a player answers a clue correctly; called
   * with `(direction, number, answer)` arguments, where `direction` is
   * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
   * and `answer` is the answer itself
   *
   * @deprecated 4.3.0; being replaced by `onAnswerCorrect` (to reduce
   * ambiguity)
   */
  onCorrect: PropTypes.func,

  /**
   * callback function that fires when a player answers a clue *in*correctly;
   * called with `(direction, number, answer)` arguments, where `direction` is
   * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
   * and `answer` is the (actual and correct) answer itself
   *
   * @since 4.3.0
   */
  onAnswerIncorrect: PropTypes.func,

  /**
   * callback function that's called when a crossword is loaded, to batch up
   * correct answers loaded from storage; passed an array of the same values
   * that `onCorrect` would recieve
   */
  onLoadedCorrect: PropTypes.func,

  /**
   * callback function that's called when the overall crossword is complete,
   * whether correct or not; called with `(correct)` argument, a boolean which
   * indicates whether the crossword is correct or not.
   */
  onCrosswordComplete: PropTypes.func,

  /**
   * callback function that's called when the overall crossword is completely
   * correct (or not)
   *
   * NOTE: this will be deprecated for `onCrosswordComplete` in the future.
   */
  onCrosswordCorrect: PropTypes.func,

  /**
   * callback function called when a cell changes (e.g. when the user types a
   * letter); called with `(row, col, char)` arguments, where the `row` and
   * `column` are the 0-based position of the cell, and `char` is the character
   * typed (already massaged into upper-case)
   */
  onCellChange: PropTypes.func,

  /**
   * callback function called when a clue is selected
   */
  onClueSelected: PropTypes.func,


  onHintSelected: PropTypes.func,

  /**
   * callback function called when a Cell is selected
   */
  onCellSelected: PropTypes.func,

  children: PropTypes.node,
};

export type CrosswordProviderProps = EnhancedProps<typeof crosswordProviderPropTypes,
  {
    lang: LangType;
    /**
     * clue/answer data; see <a
     * href="#/Configuration%20and%20customization/Clue%20input%20format">Clue
     * input format</a> for details.
     */
    data: CluesInput;

    /**
     * callback function that fires when a player completes an answer, whether
     * correct or not; called with `(direction, number, correct, answer)`
     * arguments, where `direction` is `'across'` or `'down'`, `number` is the
     * clue number as text (like `'1'`), `correct` is whether the guessed answer
     * is correct and `answer` is the (actual and correct) answer itself
     *
     * @since 4.3.0
     */
    onAnswerComplete?: (
      direction: Direction,
      number: string,
      correct: boolean,
      answer: string,
    ) => void;

    /**
     * callback function that fires when a player answers a clue correctly;
     * called with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the answer itself
     *
     * @since 4.3.0; replacing `onCorrect` (to reduce ambiguity)
     */
    onAnswerCorrect?: (
      direction: Direction,
      number: string,
      answer: string
    ) => void;

    /**
     * callback function that fires when a player answers a clue correctly;
     * called with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the answer itself
     *
     * NOTE: this is the original/previous name for what is now being called
     * `onAnswerCorrect` (to reduce ambiguity).  It will be deprecated in the
     * future.
     */
    onCorrect?: (direction: Direction, number: string, answer: string) => void;

    /**
     * callback function that fires when a player answers a clue *in*correctly;
     * called with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the (actual and correct) answer itself
     *
     * @since 4.3.0
     */
    onAnswerIncorrect?: (
      direction: Direction,
      number: string,
      answer: string
    ) => void;

    /**
     * callback function that's called when a crossword is loaded, to batch up
     * correct answers loaded from storage; passed an array of the same values
     * that `onCorrect` would recieve
     */
    onLoadedCorrect?: (loaded: AnswerTuple[]) => void;

    /**
     * callback function that's called when the overall crossword is complete,
     * whether correct or not; called with `(correct)` argument, a boolean which
     * indicates whether the crossword is correct or not.
     */
    onCrosswordComplete?: (correct: boolean) => void;

    /**
     * callback function that's called when the overall crossword is completely
     * correct (or not)
     *
     * NOTE: this will be deprecated for `onCrosswordComplete` in the future.
     */
    onCrosswordCorrect?: (isCorrect: boolean) => void;

    /**
     * callback function called when a cell changes (e.g. when the user types a
     * letter); called with `(row, col, char)` arguments, where the `row` and
     * `column` are the 0-based position of the cell, and `char` is the
     * character typed (already massaged into upper-case)
     */
    onCellChange?: (row: number, col: number, char: string, currentDirection: Direction, currentNumber: string, clues: CluesData | undefined) => void;

    /**
     * callback function called when a clue is selected
     */
    onClueSelected?: (direction: Direction, number: string) => void;
    
    
    onHintSelected?: (direction: Direction, number: string, onHint: boolean) => void;

    /**
     * callback function called when a Cell is selected
     */
    onCellSelected?: (cellData: UsedCellData, direction: Direction) => void;
  }
>;

export interface CrosswordProviderImperative {
  /**
   * Sets focus to the crossword component.
   */
  focus: () => void;

  /**
   * Resets the entire crossword; clearing all answers in the grid and
   * also any persisted data.
   */
  reset: () => void;

  /**
   * Fills all the answers in the grid and calls the `onLoadedCorrect`
   * callback with _**every**_ answer.
   */
  fillAllAnswers: () => void;

  /**
   * Returns whether the crossword is entirely correct or not.
   */
  isCrosswordCorrect: () => boolean;

  /**
   * Sets the “guess” character for a specific grid position.
   *
   * @since 4.1.0
   */
  setGuess: (row: number, col: number, guess: string) => void;

  isResultClues: () => any;
}

const defaultTheme: CrosswordProviderProps['theme'] = {
  allowNonSquare: false,
  columnBreakpoint: '768px',
  gridBackground: 'rgb(235,235,235)',
  cellBackground: 'rgb(255,255,255)',
  cellBorder: 'rgb(0,0,0)',
  textColor: 'rgb(0,0,0)',
  focusBackground: 'rgb(255,255,0)',
  highlightBackground: 'rgb(255,255,204)',
};

/**
 * The fundamental logic and data management component for react-crossword.
 * Prior to 4.0, puzzle management was built into the `Crossword` component.  As
 * of 4.0, the logic implementation has been refactored such that `Crossword`
 * leverages `CrosswordProvider` to do the heavy lifting.
 *
 * @since 4.0
 */
const CrosswordProvider = React.forwardRef<
  CrosswordProviderImperative,
  CrosswordProviderProps
>(
  (
    {
      lang,
      data,
      theme,
      onAnswerComplete,
      onAnswerCorrect,
      onCorrect,
      onAnswerIncorrect,
      onLoadedCorrect,
      onCrosswordComplete,
      onCrosswordCorrect,
      onCellChange,
      onClueSelected,
      onHintSelected,
      onCellSelected,
      useStorage,
      storageKey,
      children,
    },
    ref
  ) => {
    // The final theme is the merger of three values: the "theme" property
    // passed to the component (which takes precedence), any values from
    // ThemeContext, and finally the "defaultTheme" values fill in for any
    // needed ones that are missing.  (We create this in standard last-one-wins
    // order in Javascript, of course.)
    const finalTheme = useMemo(() => (
      { ...defaultTheme, ...theme }
    ), [theme]);

    // The original Crossword implementation used separate state to track size
    // and grid data, and conflated the clues-input-data-based grid data and the
    // player input guesses.  Let's see if we can keep the clues-input and
    // player data segregated.
    const {
      rows,
      cols,
      gridData: masterGridData,
      clues: masterClues,
    } = useMemo(
      () => createGridData(data, finalTheme.allowNonSquare ?? false),
      [data, finalTheme.allowNonSquare]
    );

    const [gridData, setGridData] = useState<GridData>([]);
    const [clues, setClues] = useState<CluesData | undefined>();

    // We can't seem to use state to track the registeredFocusHandler, because
    // there seems to be a delay in 'focus' being usable after it's set.  We use
    // a Ref instead.
    const registeredFocusHandler = useRef<FocusHandler | null>(null);

    // interactive player state
    const [focused, setFocused] = useState(false);
    const [focusedRow, setFocusedRow] = useState(0); // rename to selectedRow?
    const [focusedCol, setFocusedCol] = useState(0);
    const [currentDirection, setCurrentDirection] = useState<Direction>('across');
    const [currentNumber, setCurrentNumber] = useState('1');

    const [bulkChange, setBulkChange] = useState<string | null>(null);
    const [bulkCursor, setBulkCursor] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('');

    const [checkQueue, setCheckQueue] = useState<GridPosition[]>([]);
  
    // This *internal* getCellData assumes that it's only ever asked for a valid
    // cell (one that's used).
    const getCellData = useCallback(
      (row: number, col: number) => {
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
          return gridData[row][col];
        }

        // fake cellData to represent "out of bounds"
        return { row, col, used: false, outOfBounds: true } as GridPosition &
          UnusedCellData;
      },
      [cols, gridData, rows]
    );

    const setCellCharacter = useCallback(
      (row: number, col: number, char: string) => {
        const cell = getCellData(row, col);

        if (!cell.used) {
          throw new Error('unexpected setCellCharacter call');
        }

        // If the character is already the cell's guess, there's nothing to do.
        if (cell.guess === char) {
          return;
        }
        
        // update the gridData with the guess
        setGridData(
          produce((draft) => {
            (draft[row][col] as UsedCellData).guess = char;
          })
        );

        // push the row/col for checking!
        setCheckQueue(
          produce((draft) => {
            draft.push({ row, col });
          })
        );

        if (onCellChange) {
          const newClues = { ...clues } as CluesData;
          gridData.forEach((rowData: any) => {
            rowData.forEach((colData: any) => {
              if (colData.used) {
                if (Object.keys(colData).includes("across")) {
                  if (newClues.across && colData.guess) {
                    const index = newClues.across.findIndex((i: any) => i.number === colData.across);
                    if (index !== -1) {
                      const updatedClue = { ...newClues.across[index], userAnswer: (newClues.across[index].userAnswer) + (colData.guess || "") };
                      const updatedAcross = [...newClues.across];
                      updatedAcross[index] = updatedClue;
                      newClues.across = updatedAcross;
                    }
                  }
                }
                if (Object.keys(colData).includes("down")) {
                  if (newClues.down && colData.guess) {
                    const index = newClues.down.findIndex((i: any) => i.number === colData.down);
                    if (index !== -1) {
                      console.log("asdf")
                      const updatedClue = { ...newClues.down[index], userAnswer: (newClues.down[index].userAnswer) + (colData.guess || "") };
                      const updatedAcross = [...newClues.down];
                      updatedAcross[index] = updatedClue;
                      newClues.down = updatedAcross;
                    }
                  }
                }
              }
            });
          });
        
          onCellChange(row, col, char, currentDirection, currentNumber, newClues);
        }
      },
      [clues, currentDirection, currentNumber, getCellData, onCellChange, gridData]
    );

    const notifyAnswerComplete = useCallback(
      (
        direction: Direction,
        number: string,
        correct: boolean,
        answer: string,
      ) => {
        if (onAnswerComplete) {
          onAnswerComplete(direction, number, correct, answer);
        }

        if (correct) {
          if (onAnswerCorrect) {
            onAnswerCorrect(direction, number, answer);
          }

          // NOTE: onCorrect to be (eventually) deprecated
          if (onCorrect) {
            onCorrect(direction, number, answer);
          }
        } else if (onAnswerIncorrect) {
          onAnswerIncorrect(direction, number, answer);
        }
      },
      [onAnswerComplete, onAnswerCorrect, onAnswerIncorrect, onCorrect]
    );

    function normalizeHiragana(word: string): string {
      const normMap = {
        ぁ: 'あ',
        ぃ: 'い',
        ぅ: 'う',
        ぇ: 'え',
        ぉ: 'お',
        っ: 'つ',
        ゃ: 'や',
        ゅ: 'ゆ',
        ょ: 'よ',
        ゎ: 'ゎ',
      };
      let replaced = word;
      Object.entries(normMap).forEach(([k, v]) => {
        replaced = replaced.replace(k, v);
      });
      return replaced;
    }

    const checkCorrectness = useCallback(
      (row: number, col: number) => {
        const cell = getCellData(row, col);
        if (!cell.used) {
          // Because this is in an internal callback, and we only call it with a
          // valid cell (row/col), the throw line isn't testable... so we ignore
          // it.
          /* istanbul ignore next */
          throw new Error('unexpected unused cell');
        }

        // check all the cells for both across and down answers that use this
        // cell
        bothDirections.forEach((direction) => {
          const across = isAcross(direction);
          const number = cell[direction];
          if (!number) {
            return;
          }

          const info = data[direction][number];

          // We send correct/incorrect messages, but *only* if every cell in the
          // answer is filled out; there's no point in reporting "incorrect"
          // when the answer is simply incomplete.
          let complete = true;
          let correct = true;

          for (let i = 0; i < info.answer.length; i++) {
            const checkCell = getCellData(
              info.row + (across ? 0 : i),
              info.col + (across ? i : 0)
            ) as UsedCellData;

            if (!checkCell.guess) {
              complete = false;
              correct = false;
              break;
            }

            if (normalizeHiragana(checkCell.guess) !== normalizeHiragana(checkCell.answer)) {
              correct = false;
            }
          }

          // update the clue state
          setClues(
            produce((draft) => {
              if (draft) {
                const clueInfo = draft[direction].find((i) => i.number === number);
                if (clueInfo) {
                  clueInfo.complete = complete;
                  clueInfo.correct = correct;
                  clueInfo.userAnswer = clueInfo.userAnswer || "";
                }
              }
            })
          );

          if (complete) {
            notifyAnswerComplete(direction, number, correct, info.answer);
          }
        });
      },
      [data, getCellData, notifyAnswerComplete]
    );

    // Any time the checkQueue changes, call checkCorrectness!
    useEffect(() => {
      if (checkQueue.length === 0) {
        return;
      }

      checkQueue.forEach(({ row, col }) => checkCorrectness(row, col));
      setCheckQueue([]);
    }, [checkQueue, checkCorrectness]);

    // Any time the clues change, determine if they are all complete/correct or
    // not.
    const { crosswordComplete, crosswordCorrect } = useMemo(() => {
      const complete = !!(
        clues &&
        bothDirections.every((direction) =>
          clues[direction].every((clueInfo) => clueInfo.complete)
        )
      );

      const correct =
        complete &&
        !!(
          clues &&
          bothDirections.every((direction) =>
            clues[direction].every((clueInfo) => clueInfo.correct)
          )
        );
      // console.log('setting crossword correct', { clues, correct });
      return { crosswordComplete: complete, crosswordCorrect: correct };
    }, [clues]);

    // Let the consumer know everything's correct (or not) if they've asked to
    // be informed.
    useEffect(() => {
      if (crosswordComplete) {
        if (onCrosswordComplete) {
          onCrosswordComplete(crosswordCorrect);
        }
        if (onCrosswordCorrect) {
          onCrosswordCorrect(crosswordCorrect);
        }
      }
    }, [
      crosswordComplete,
      crosswordCorrect,
      onCrosswordComplete,
      onCrosswordCorrect,
    ]);

    // focus and movement
    const focus = useCallback(() => {
      // console.log('CrosswordProvider.focus() called...');

      // If there's a registered focus handler, use it!
      if (registeredFocusHandler.current) {
        // console.log('calling registered focus handler...');
        registeredFocusHandler.current();
        setFocused(true);
      } else {
        console.warn(
          'CrosswordProvider: focus() has no registered handler to call!'
        );
      }
    }, []);

    const moveTo = useCallback(
      (row: number, col: number, directionOverride?: Direction) => {
        let direction = directionOverride ?? currentDirection;
        const candidate = getCellData(row, col);

        if (!candidate.used) {
          return false;
        }

        // If we try to move to a cell with a direction it doesn't support,
        // switch to the other direction.  There is no codepath that can test
        // this, though, as this callback isn't exposed, and we only call it in
        // ways that guarantee that direction is valid.
        if (!candidate[direction]) {
          /* istanbul ignore next */
          direction = otherDirection(direction);
        }

        setFocusedRow(row);
        setFocusedCol(col);
        setCurrentDirection(direction);
        setCurrentNumber(candidate[direction] ?? '');

        return candidate;
      },
      [currentDirection, getCellData]
    );

    const moveRelative = useCallback(
      (dRow: number, dCol: number) => {
        // We expect *only* one of dRow or dCol to have a non-zero value, and
        // that's the direction we will "prefer".  If *both* are set (or zero),
        // we don't change the direction.
        let direction: Direction | undefined;
        if (dRow !== 0 && dCol === 0) {
          direction = 'down';
        } else if (dRow === 0 && dCol !== 0) {
          direction = 'across';
        }

        const cell = moveTo(focusedRow + dRow, focusedCol + dCol, direction);

        return cell;
      },
      [focusedRow, focusedCol, moveTo]
    );

    const moveForward = useCallback(() => {
      const across = isAcross(currentDirection);
      moveRelative(across ? 0 : 1, across ? 1 : 0);
    }, [currentDirection, moveRelative]);

    const moveBackward = useCallback(() => {
      const across = isAcross(currentDirection);
      moveRelative(across ? 0 : -1, across ? -1 : 0);
    }, [currentDirection, moveRelative]);

    // keyboard handling
    const handleSingleCharacter = useCallback(
      (char: string) => {
        setCellCharacter(focusedRow, focusedCol, char.toUpperCase());
        moveForward();
      },
      [focusedRow, focusedCol, setCellCharacter, moveForward]
    );

    // We use the keydown event for control/arrow keys, but not for textual
    // input, because it's hard to suss out when a key is "regular" or not.
    const handleInputKeyDown = useCallback<
      React.KeyboardEventHandler<HTMLInputElement>
    >(
      (event) => {
        // if ctrl, alt, or meta are down, ignore the event (let it bubble)
        if (event.ctrlKey || event.altKey || event.metaKey) {
          return;
        }

        let preventDefault = true;
        const { key } = event;
        // console.log('CROSSWORD KEYDOWN', event.key);

        // FUTURE: should we "jump" over black space?  That might help some for
        // keyboard users.
        switch (key) {
          case 'ArrowUp':
            moveRelative(-1, 0);
            break;

          case 'ArrowDown':
            moveRelative(1, 0);
            break;

          case 'ArrowLeft':
            moveRelative(0, -1);
            break;

          case 'ArrowRight':
            moveRelative(0, 1);
            break;

          case ' ': // treat space like tab?
          case 'Tab': {
            const other = otherDirection(currentDirection);
            const cellData = getCellData(
              focusedRow,
              focusedCol
            ) as UsedCellData;
            if (cellData[other]) {
              setCurrentDirection(other);
              setCurrentNumber(cellData[other] ?? '');
            }
            break;
          }

          // Backspace: delete the current cell, and move to the previous cell
          // Delete:    delete the current cell, but don't move
          case 'Backspace':
          case 'Delete': {
            setCellCharacter(focusedRow, focusedCol, '');
            if (key === 'Backspace') {
              moveBackward();
            }
            break;
          }

          case 'Home':
          case 'End': {
            // move to beginning/end of this entry?
            const info = data[currentDirection][currentNumber];
            const {
              answer: { length },
            } = info;
            let { row, col } = info;
            if (key === 'End') {
              const across = isAcross(currentDirection);
              if (across) {
                col += length - 1;
              } else {
                row += length - 1;
              }
            }

            moveTo(row, col);
            break;
          }

          case 'Process': {
            break;
          }

          default:
            // It would be nice to handle "regular" characters with onInput, but
            // that is still experimental, so we can't count on it.  Instead, we
            // assume that only "length 1" values are regular.
            if (key.length !== 1) {
              preventDefault = false;
              break;
            }

            if (lang === "en") {
              handleSingleCharacter(key);
            }
            break;
        }

        if (preventDefault) {
          event.preventDefault();
        }
      },
      [
        lang,
        moveRelative,
        handleSingleCharacter,
        currentDirection,
        getCellData,
        focusedRow,
        focusedCol,
        setCellCharacter,
        moveBackward,
        data,
        currentNumber,
        moveTo,
      ]
    );

    const handleInputChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
      event.preventDefault();
      const katakana = event.target.value.replace(/[\u3041-\u3096]/g, match => {
        const code = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(code);
      });

      const value = lang === "en" ? event.target.value : lang === "jp-hira" ? event.target.value : katakana;
      if (lang !== "en") {
        setInputValue(value);
      }
      setBulkChange(value);
    }, [lang]);

    const handleCompositionEnd = useCallback<React.CompositionEventHandler<HTMLInputElement>>((event) => {
      if (lang !== "en") {
        event.preventDefault();
        setBulkCursor(0);
        setBulkChange(null);
        setInputValue('');
      }
    },[lang, setBulkCursor, setBulkChange]);


    useEffect(() => {
      if (!bulkChange) {
        setBulkCursor(0);
        return;
      }

      const target = bulkChange[bulkCursor];


      // handle bulkChange by updating a character at a time (this lets us
      // leverage the existing character-entry logic).
    //   handleSingleCharacter(bulkChange[0]);
    //   setBulkChange(bulkChange.length === 1 ? null : bulkChange.substring(1));
    // }, [bulkChange, handleSingleCharacter]);
    if (lang !== "en") {
        if (target && /^[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}\u{30A0}-\u{30FF}\u{30FC}\u{FF5E}]+$/mu.test(target)) {
          handleSingleCharacter(bulkChange[bulkCursor]);
          setBulkCursor(bulkCursor + 1);
          console.log('bulkCursor changed to', bulkCursor + 1);
          // setBulkChange(bulkChange.length === 1 ? null : bulkChange.substring(1));
        }
    }
  }, [
    lang,
    bulkChange,
    bulkCursor,
    setBulkCursor,
    handleSingleCharacter,
    moveBackward,
  ]);

    // When the clues *input* data changes, reset/reload the player data
    useEffect(() => {
      // deep-clone the grid data...
      const newGridData = masterGridData.map((row) =>
        row.map((cell) => ({ ...cell }))
      );

      // deep-clone the clue data...
      const newCluesData: CluesData = {
        across: masterClues.across.map((clue) => ({ ...clue })),
        down: masterClues.down.map((clue) => ({ ...clue })),
      };

      if (useStorage) {
        loadGuesses(newGridData, storageKey || defaultStorageKey);
      }

      setClues(newCluesData);
      setGridData(newGridData);

      // Check all of the clues to see if any were correct... but only if we
      // loaded guesses.  Since the current implementation relies on state, we
      // leverage the checkQueue to run through all the clues/guesses.
      //
      // Really, the ideal thing to do would be to write the checking-logic in a
      // way that it doesn't assume the data is already in state... that would
      // allow us to check everything directly, and simply set the same state
      // that checkCorrectness() does, *and* properly call onLoadedCorrect(). As
      // it is, this implementation can cause some answers to mentioned in
      // onCorrect() more than once (any time an across answer starts inside a
      // down answer, or vice versa.)
      if (useStorage) {
        setCheckQueue(
          bothDirections.flatMap((dir) =>
            // simply use the row/col that starts each answer.
            newCluesData[dir].map(({ row, col }) => ({ row, col }))
          )
        );
      }

      // Should we start with 1-across highlighted/focused?

      // TODO: track input-field focus so we don't draw highlight when we're not
      // really focused, *and* use first actual clue (whether across or down?)
      setFocusedRow(0);
      setFocusedCol(0);
      setCurrentDirection('across');
      setCurrentNumber('1');
    }, [masterClues, masterGridData, storageKey, useStorage]);

    // save the guesses any time they change...
    useEffect(() => {
      if (gridData === null || !useStorage) {
        return;
      }

      saveGuesses(gridData, storageKey || defaultStorageKey);
    }, [gridData, storageKey, useStorage]);

    const handleCellClick = useCallback(
      (cellData: CellData) => {
        if (cellData.used) {
          const { row, col } = cellData;
          const other = otherDirection(currentDirection);

          // should this use moveTo?
          setFocusedRow(row);
          setFocusedCol(col);

          let direction = currentDirection;

          // We switch to the "other" direction if (a) the current direction
          // isn't available in the clicked cell, or (b) we're already focused
          // and the clicked cell is the focused cell, *and* the other direction
          // is available.
          if (
            !cellData[currentDirection] ||
            (focused &&
              row === focusedRow &&
              col === focusedCol &&
              cellData[other])
          ) {
            setCurrentDirection(other);
            direction = other;
          }

          setCurrentNumber(cellData[direction] ?? '');

          if (onCellSelected) {
            onCellSelected(cellData, direction);
          }
        }

        focus();
      },
      [currentDirection, focus, focused, focusedCol, focusedRow, onCellSelected]
    );

    const handleInputClick = useCallback<
      React.MouseEventHandler<HTMLInputElement>
    >(
      (/* event */) => {
        // *don't* event.preventDefault(), because we want the input to actually
        // take focus

        // Like general cell-clicks, cliking on the input can change direction.
        // Unlike cell clicks, we *know* we're clicking on the already-focused
        // cell!
        const other = otherDirection(currentDirection);
        const cellData = getCellData(focusedRow, focusedCol) as UsedCellData;

        let direction = currentDirection;

        if (focused && cellData[other]) {
          setCurrentDirection(other);
          direction = other;
        }

        setCurrentNumber(cellData[direction] ?? '');
        focus();

        if (onCellSelected) {
          onCellSelected(cellData, direction);
        }
      },
      [currentDirection, focus, focused, focusedCol, focusedRow, getCellData, onCellSelected]
    );

    const handleClueSelected = useCallback(
      (direction: Direction, number: string) => {
        const info = clues?.[direction].find((clue) => clue.number === number);

        if (!info) {
          return;
        }

        // console.log('CrosswordProvider.handleClueSelected', { info });
        // TODO: sanity-check info?
        moveTo(info.row, info.col, direction);
        focus();

        if (onClueSelected) {
          onClueSelected(direction, number);
        }
      },
      [clues, focus, moveTo, onClueSelected]
    );

    const handleHintSelected = useCallback((direction: Direction, number: string) => {
        const info = clues?.[direction].find((clue) => clue.number === number);
        if (!info) {
          return;
        }

        let onHint: boolean = false;
        setClues(
          produce((draft) => {
            if (draft) {
              const clueInfo = draft[direction].find((i) => i.number === number);
              if (clueInfo) {
                onHint = clueInfo.usedHint as boolean;
                clueInfo.usedHint = true;
              }
            }
          })
        );

        if (onHintSelected) {
          onHintSelected(direction, number, onHint);
        }
      },
      [clues, onHintSelected]
    );

    const registerFocusHandler = useCallback(
      (focusHandler: FocusHandler | null) => {
        // console.log('CrosswordProvider.registerFocusHandler() called', {
        //   name: focusHandler?.name ?? '(NULL)',
        //   focusHandler,
        // });

        // *If* registeredFocusHandler is implemented as state, realize that we
        // can't simply pass it to the setter... the useState React setter would
        // *invoke* the function and take the return value!  So, we would have
        // to wrap it in a functional setter (setState(() => focusHandler)).
        // But, since we're using a Ref, this is just a simple assignment!
        registeredFocusHandler.current = focusHandler;
      },
      []
    );

    // imperative commands...
    useImperativeHandle(
      ref,
      () => ({
        /**
         * Sets focus to the crossword component.
         */
        focus,

        /**
         * Resets the entire crossword; clearing all answers in the grid and
         * also any persisted data.
         */
        reset: () => {
          setGridData(
            produce((draft) => {
              draft.forEach((rowData) => {
                rowData.forEach((cellData) => {
                  if (cellData.used) {
                    cellData.guess = '';
                  }
                });
              });
            })
          );

          setClues(
            produce((draft) => {
              bothDirections.forEach((direction) => {
                draft?.[direction]?.forEach((clueInfo) => {
                  delete clueInfo.complete;
                  delete clueInfo.correct;
                });
              });
            })
          );

          if (useStorage) {
            clearGuesses(storageKey || defaultStorageKey);
          }
        },

        /**
         * Fills all the answers in the grid and calls the `onLoadedCorrect`
         * callback with _**every**_ answer.
         */
        fillAllAnswers: () => {
          setGridData(
            produce((draft) => {
              draft.forEach((rowData) => {
                rowData.forEach((cellData) => {
                  if (cellData.used) {
                    cellData.guess = cellData.answer;
                  }
                });
              });
            })
          );

          setClues(
            produce((draft) => {
              bothDirections.forEach((direction) => {
                draft?.[direction].forEach((clueInfo) => {
                  clueInfo.complete = true;
                  clueInfo.correct = true;
                });
              });
            })
          );

          // trigger onLoadedCorrect with every clue!
          if (onLoadedCorrect) {
            const loadedCorrect: AnswerTuple[] = [];
            bothDirections.forEach((direction) => {
              clues?.[direction].forEach(({ number, answer }) => {
                loadedCorrect.push([direction, number, answer]);
              });
            });

            onLoadedCorrect(loadedCorrect);
          }
        },

        /**
         * Returns whether the crossword is entirely correct or not.
         */
        isCrosswordCorrect: () => crosswordCorrect,


        // 結果データ
        isResultClues: () => {
          const newClues = { ...clues };
          gridData.forEach((rowData: any) => {
            rowData.forEach((colData: any) => {
              if (colData.used) {
                if (Object.keys(colData).includes("across")) {
                  if (newClues.across && colData.guess) {
                    const index = newClues.across.findIndex((i: any) => i.number === colData.across);
                    if (index !== -1) {
                      const updatedClue = { ...newClues.across[index], userAnswer: (newClues.across[index].userAnswer) + (colData.guess || "") };
                      const updatedAcross = [...newClues.across];
                      updatedAcross[index] = updatedClue;
                      newClues.across = updatedAcross;
                    }
                  }
                }
                if (Object.keys(colData).includes("down")) {
                  if (newClues.down && colData.guess) {
                    const index = newClues.down.findIndex((i: any) => i.number === colData.down);
                    if (index !== -1) {
                      console.log("asdf")
                      const updatedClue = { ...newClues.down[index], userAnswer: (newClues.down[index].userAnswer) + (colData.guess || "") };
                      const updatedAcross = [...newClues.down];
                      updatedAcross[index] = updatedClue;
                      newClues.down = updatedAcross;
                    }
                  }
                }
              }
            });
          });
          return newClues;
        },

        /**
         * Sets the “guess” character for a specific grid position.
         *
         * @since 4.1.0
         */
        setGuess: (row: number, col: number, guess: string) => {
          // REVIEW: should we force-case this?
          setCellCharacter(row, col, guess.toUpperCase());
        },
      }),
      [
        clues,
        crosswordCorrect,
        focus,
        onLoadedCorrect,
        setCellCharacter,
        storageKey,
        useStorage,
        gridData
      ]
    );

    const crosswordContext = useMemo<CrosswordContextType>(
      () => ({
        rows,
        cols,
        gridData,
        clues,

        handleInputKeyDown,
        handleInputChange,
        handleCellClick,
        handleInputClick,
        handleClueSelected,
        handleCompositionEnd,
        registerFocusHandler,
        handleHintSelected,

        focused,
        selectedPosition: { row: focusedRow, col: focusedCol },
        selectedDirection: currentDirection,
        selectedNumber: currentNumber,

        crosswordCorrect,
        inputValue,
      }),
      [
        rows,
        cols,
        gridData,
        clues,
        handleInputKeyDown,
        handleInputChange,
        handleCompositionEnd,
        handleCellClick,
        handleInputClick,
        handleClueSelected,
        registerFocusHandler,
        handleHintSelected,
        focused,
        focusedRow,
        focusedCol,
        currentDirection,
        currentNumber,
        crosswordCorrect,
        inputValue,
      ]
    );

    return (
      <ThemeProvider theme={finalTheme}>
        <CrosswordContext.Provider value={crosswordContext}>
          {children}
        </CrosswordContext.Provider>
      </ThemeProvider>
    );
  }
);

export default CrosswordProvider;

CrosswordProvider.displayName = 'CrosswordProvider';
CrosswordProvider.propTypes = crosswordProviderPropTypes;
