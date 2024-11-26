import React, { useEffect, useState } from "react";
import { Square } from "./types";
import { createBoard, randomMines, getMinesAround } from "./helper";
import './minesweeper.css';

const ROWS = 10;
const COLS = 10;
const MINES = 10;

const Minesweeper = () => {
    const init = () => {
        let squares = createBoard(ROWS, COLS);
        squares = randomMines(squares, MINES);
        squares = getMinesAround(squares);

        return squares;
    }

    const [squares, setSquares] = useState<Square[][]>(init());

    const reveal = (rowIdx: number, colIdx: number) => {
        if(
            squares[rowIdx][colIdx].isFlagged || 
            squares[rowIdx][colIdx].isRevealed
        ) {
            return;
        }

        if(squares[rowIdx][colIdx].hasMine){
            alert("Game Over")
            setSquares(init())
            return;
        }

        const stack = [{rowIdx, colIdx}]

        while(stack.length>0){
            const {rowIdx,colIdx} = stack.pop()!

            const currentCell = squares[rowIdx][colIdx]
            if(!currentCell.isRevealed){
                currentCell.isRevealed = true;

                if(!currentCell.hasMine && currentCell.neighbourMines === 0){
                    for(let i=-1; i<=1; i++){
                        for(let j=-1; j<=1; j++){
                            const newRow = rowIdx + i;
                            const newCol = colIdx + j;
                            if(
                                newRow >= 0 && 
                                newRow < ROWS && 
                                newCol >= 0 && 
                                newCol < COLS && 
                                !squares[newRow][newCol].hasMine && 
                                !squares[newRow][newCol].isRevealed
                            ){
                                stack.push({rowIdx: newRow, colIdx: newCol});
                            }
                        }
                    }
                }
            }
        }

        setSquares([...squares])
    }

    const setFlag = (
        e:React.MouseEvent<HTMLDivElement> ,
        rowIdx:number, 
        colIdx:number
    )=>{
        e.preventDefault();
        if(squares[rowIdx][colIdx].isRevealed) return;

        const newSquares = [...squares]
        newSquares[rowIdx][colIdx].isFlagged = !newSquares[rowIdx][colIdx].isFlagged

        setSquares(newSquares);
    }

    useEffect(()=>{
        const revealed = squares.reduce((acc, row) => {
            acc += row.reduce((acc2, sq) => {
                acc2 += sq.isRevealed ? 1 : 0;
                return acc2;
            }, 0)
            return acc
        }, 0)
        
        if(revealed === ROWS*COLS - MINES){
            alert("You won!");
            setSquares(init());
            return;
        }
    }, [squares])


    return ( 
        <div className="minesweeper-main"> 
        <div>
           {squares.map((row, rowIdx) => (
                <div key={rowIdx}className="row">
                    {row.map((square, colIdx) => 
                        <div 
                            key={colIdx}
                            className={`square square--${square.isRevealed && "revealed"}`}
                            data-value={square.neighbourMines}
                            onClick={() => reveal(rowIdx, colIdx)}
                            onContextMenu={(e)=>setFlag(e,rowIdx, colIdx)}
                        >
                            {square.isRevealed && square.neighbourMines !== 0 ? 
                            square.neighbourMines: ""}

                            {square.isFlagged ? '🚩':''}
                        </div>
                )}
                </div>
            ))}
            </div>
            <div className="minesweeper-text">
               <div>  Normal minesweeper rules...  </div>
               <div>  Right Click (long press on phone) to add flag '🚩' </div>
               <div>  10 Mines </div>
            </div>
        </div>
     );
}
 
export default Minesweeper;

