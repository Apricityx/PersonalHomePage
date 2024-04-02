import React, {useState} from 'react';
import './TicTac.css';

function Square({value, onSquareClick}) {
    return (
        <div className="square" onClick={onSquareClick}>
            {value}
        </div>
    );
}

function TicTac() {
    const [isClicked, setIsClicked] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [isXNext, setIsXNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill('.'));
    const [history, setHistory] = useState([Array(9).fill('.')]);

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] !== '.' && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function handleClick(i) {
        if (isClicked[i]) return;
        const nextSquares = squares.slice(); //slice() 方法可从已有的数组中返回选定的元素,此处是复制squares数组
        if (isXNext) {
            nextSquares[i] = 'X';
            setIsXNext(false);
        } else {
            nextSquares[i] = 'O';
            setIsXNext(true);
        }

        setIsClicked(isClicked.map((item, index) => index === i ? 1 : item)); //默认给item赋值
        setSquares(nextSquares);
        setTimeout(() => {
            const winner = calculateWinner(nextSquares);
            if (winner) {
                alert('Winner: ' + winner);
                setSquares(Array(9).fill('.'));
                setIsClicked([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            }
        }, 100)
    }

    return (
        <div id="TicTac_Main">
            <div id="game">
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
                </div>
            </div>
            <div id="game-info">
                <ol>

                </ol>
            </div>
            {/*<p style={{color:"red"}}>{isXNext? 1:0}</p>*/}
        </div>
    );
}

export default TicTac;
