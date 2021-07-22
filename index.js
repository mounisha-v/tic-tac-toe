
let player = 'X'
const wincom = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]];


const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => 
    cell.addEventListener('click', handleClick)
);

function startgame() {
    cells.forEach((cell) => (cell.innerText = ''))}

function handleClick(e) {
    if (e.target.innerText === '') {
        e.target.innerText = player;
        checkwinner()
        switchplayer()
    }
}
function switchplayer() {
    player = player === 'X' ? 'O' : 'X';
}


function checkwinner() {

    const matched = wincom.some((comb) => {
        const result = comb.every((comb) => {
            return cells[comb].innerText === player
         } )
        return result
    })
    console.log(matched)

    if (matched) {
        alert(`Player ${player}:You Won!!`)
        startgame()
    } else {
        const cellsarray = Array.from(cells)
        if (cellsarray.every((cell) => cell.innerText !== '')) {
            alert('draw')
            startgame()
        }
    }
}
