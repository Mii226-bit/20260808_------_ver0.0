const EMPTY = 0;
const BLACK = 1;
const WHITE = 2;
const BOARD_SIZE = 8;
const boardData = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
boardData[3][3] = WHITE;
boardData[3][4] = BLACK;
boardData[4][3] = BLACK;
boardData[4][4] = WHITE;

let currentPlayer = BLACK;
// 盤面の要素を取得
const board = document.getElementById("board");

for (let row = 0; row < BOARD_SIZE; row++) {
  for (let col = 0; col < BOARD_SIZE; col++) {
    const cell = document.createElement("div");

    cell.classList.add("cell");

    cell.dataset.row = row;
    cell.dataset.col = col;

    cell.addEventListener("click", () => {
      console.log(`Clicked cell at row ${row}, col ${col}`);

      if (boardData[row][col] === EMPTY) {
        boardData[row][col] = currentPlayer;
        renderBoard();

        // 駒が置けたらプレイヤーを切り替える
        if (currentPlayer === BLACK) {
          currentPlayer = WHITE;
        } else {
          currentPlayer = BLACK;
        }
        console.log(
          `Current player is now ${currentPlayer === BLACK ? "BLACK" : "WHITE"}`,
        );
      } else {
        alert("そこには置けません。");
      }
    });
    board.appendChild(cell);
  }
}

//cells:マス目の要素を取得してvalueに格納
function renderBoard() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    const value = boardData[row][col];

    //前の色を消す
    cell.innerHTML = "";

    if (value === EMPTY) {
      return;
    }

    //piece=駒 を作る
    const piece = document.createElement("div");
    piece.classList.add("piece");

    if (value === BLACK) {
      piece.classList.add("black");
    }
    if (value === WHITE) {
      piece.classList.add("white");
    }
    cell.appendChild(piece);
  });
}

function cellClick() {}
//初期状態の盤面を描画
renderBoard();
