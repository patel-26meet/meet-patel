export type Square = {
    isRevealed: boolean;
    isFlagged: boolean;
    hasMine: boolean;
    neighbourMines: number;
}