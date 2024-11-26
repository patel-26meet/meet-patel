import { Square } from "./types"

export const createBoard = (rows: number, cols: number): Square[][] => {
    return new Array(rows).fill(null).map(()=>
        new Array(cols).fill(null).map(() =>({
            isRevealed : false,
            isFlagged : false,
            hasMine : false,
            neighbourMines : 0
        }))
    )
}

export const randomMines = (squares: Square[][], mines: number) => {
    const rows = squares.length
    const cols = squares[0].length

    let distinctNumbers = new Set<number>()

    while(distinctNumbers.size < mines){
        let number = Math.floor(Math.random()*rows*cols)
        distinctNumbers.add(number)
    }

    Array.from(distinctNumbers).forEach(num => {
        const row = Math.floor(num  / rows);
        const col = Math.floor(num % cols);

        squares[row][col].hasMine = true;

    })

    return squares;
}

export const getMinesAround = (squares: Square[][]) => {
    for(let i=0; i<squares.length; i++){
        for(let j=0; j<squares.length; j++){
            if(squares[i][j].hasMine){
                for (let k = i-1; k <=i+1; k++) {
                    for (let l = j-1; l <=j+1; l++) {
                        if(squares?.[k]?.[l]?.hasMine === false){
                            squares[k][l].neighbourMines++;
                        }     
                    }  
                }
            }
        }
    }

    return squares
}
 