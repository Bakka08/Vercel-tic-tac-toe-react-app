import "./App.css";
import myGif from "./wp2757868-wallpaper-gif.gif";
import React, { useState } from 'react';

function App() {
  const gif = {
    backgroundImage: `url(${myGif})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "827px",
  };
  const marg = {
    height: "70px",
  };
  

  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showThirdDiv, setShowThirdDiv] = useState(false);
  const [showFourthDiv, setShowFourthDiv] = useState(false);
  const [showFifthDiv, setShowFifthhDiv] = useState(false);
  const [w, setw] = useState(false);
  const [d, setd] = useState(false);
  
  function handw () {
    setw(true);
    setd(false);
  };
  function handd () {
    setd(true);
    setw(false);
  }

  const handleShowFirst = () => {
    setShowFirstDiv(true);
    setShowSecondDiv(false);
    setShowThirdDiv(false);
    setShowFourthDiv(false);
    setShowFifthhDiv(false);
    setBoard((Array(9).fill(null)));
  };

  const handleShowSecondDiv = () => {
    setShowFirstDiv(false);
    setShowSecondDiv(true);
    setShowThirdDiv(false);
    setShowFourthDiv(false);
    setShowFifthhDiv(false);
    setBoard((Array(9).fill(null)));
  };
  
  const handleShowThirdDiv = () => {
    setShowFirstDiv(false);
    setShowSecondDiv(false);
    setShowThirdDiv(true);
    setShowFourthDiv(false);
    setShowFifthhDiv(false);
    setBoard((Array(9).fill(null)));
  };
  
  const handleShowFourthDiv = () => {
    setShowFirstDiv(false);
    setShowSecondDiv(false);
    setShowThirdDiv(false);
    setShowFourthDiv(true);
    setShowFifthhDiv(false);
    setBoard((Array(9).fill(null)));
  };

  function showFidthDiv() {
    setShowFirstDiv(false);
    setShowSecondDiv(false);
    setShowThirdDiv(false);
    setShowFourthDiv(false);
    setShowFifthhDiv(true);
    setBoard((Array(9).fill(null)));
  }
 function d3(){
  
      setShowFirstDiv(false);
    setShowSecondDiv(false);
    setShowThirdDiv(true);
    setShowFourthDiv(false);
    setShowFifthhDiv(false);
 }
  const count = () => {{
    if(win === selectedValue){
      setcountWin(counWin + 1);
      d3();
    setBoard((Array(9).fill(null)));
    }else if(win === output){
      setcountLose(counLose + 1);
      d3();
    }else {
      setcountDraw(counDraw + 1);
      d3();
    }

  }}
 const quite = () => {{
  setShowFirstDiv(true);
  setShowSecondDiv(false);
  setShowThirdDiv(false);
  setShowFourthDiv(false);
  setShowFifthhDiv(false);
  setBoard((Array(9).fill(null)));
  setcountDraw=0;
  setwin('null');
  setcountLose=0;
  setcountWin=0;


 }}
  
  const [selectedValue, setSelectedValue] = useState("X");
  const output = (selectedValue === 'X') ? 'O' : 'X';
  const [counWin, setcountWin] = useState(0);
  const [counDraw, setcountDraw] = useState(0);
  const [counLose, setcountLose] = useState(0);
  const [win , setwin] = useState(null);

  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };
  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(index) {
    // check if the square has already been clicked
    if (board[index] !== null) {
      return;
    }
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }
  

  function renderSquare(index) {
    return (
      <button 
        onClick={() => handleClick(index)}
        className="btn btn-primary text-uppercase fs-1 fw-bold" type="button" style={{ height: "150px", marginLeft: "10px", marginRight: "10px", width: "150px", backgroundColor: "none",borderRadius:"25px" }}
      >
        {board[index]}
      </button>
    );
  }

  const winner = calculateWinner(board);

  let status;
  if (winner) { 
    setwin(winner)
    showFidthDiv();
    handw();
    status = `Winner: ${winner}`;
   
  } else if (board.every((square) => square !== null)) {
    status = "It's a tie!";
    showFidthDiv();
    setwin('tie')
    handd();

  } else {
    status = ` ${isXNext ? 'X' : 'O'}`;
  }
  
  
  return (
    <div id="bd" style={gif}>
      <div style={marg}></div>

      <div id="main" className="container" style={{ display: showFirstDiv ? 'block' : 'none' }}>
        <div
          style={{
            width: "30%",
            margin: "auto",
            height: "150px",
            marginBottom: "20px",
            backgroundColor: "white",
            borderRadius: "35px",
          }}
        >
          <h4
            className="font-monospace fw-bold text-center"
            style={{ marginTop: "20px" }}
          >
            CHOOSE YOUR SYMBOL
          </h4>
          <div
            style={{
              width: "80%",
              margin: "auto",
              height: "100px",
              backgroundColor: "#be4bb1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
            <button
              className="btn btn-primary btn-lg fs-3 fw-bold text-center"
              type="button"
              style={{
                width: "98%",
                border: "0px",
                borderRadius: "0px",
                backgroundColor: selectedValue === "X" ? "#134cae" : "#be4bb1" ,
                height: "50%",
                fontFamily: "cursive",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
              }}onClick={() => handleButtonClick("X")}
            >
              X
            </button>
            <button
              className="btn btn-primary fs-3 fw-bold text-center"
              type="button"
              style={{
                width: "98%",
                border: "0px",
                borderRadius: "0px",
                height: "50%",
                backgroundColor: selectedValue === "O" ? "#134cae" : "#be4bb1" ,
                fontFamily: "cursive",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}onClick={() => handleButtonClick("O")}
            >
              O
            </button>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            margin: "auto",
            height: "100px",
            backgroundColor: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            className="btn btn-primary btn-lg fs-3 fw-bold text-center"
            type="button"
            style={{
              width: "98%",
              border: "0px",
              borderRadius: "20px",
              backgroundColor: "#febc55",
              height: "50%",
              fontFamily: "cursive",
              marginBottom: "10px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}  onClick={handleShowSecondDiv}
            on
          >
            Game vs Computer
          </button>
          <button
            className="btn btn-primary fs-3 fw-bold text-center"
            type="button"
            style={{
              width: "98%",
              border: "0px",
              borderRadius: "20px",
              height: "50%",
              backgroundColor: "#508faf",
              fontFamily: "cursive",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}  onClick={handleShowThirdDiv}
          >
            Game vs Player
          </button>
        </div>
      </div>;

      <div id="vsplayer" style={{ display: showThirdDiv   ? 'block' : 'none' }}>
  <div>
    <div className="container">
      <div
        style={{
          width: "40%",
          margin: "auto",
          height: "670px",
          marginBottom: "20px",
          backgroundColor: "white",
          borderTopRightRadius: "35px",
          borderTopLeftRadius: "35px",
        }}>
        <div>
          <button
            className="btn btn-primary disabled fw-bold text-start"
            type="button"
            style={{
              borderRadius: "0PX",
              color: "black",
              backgroundColor: "inherit",
              border: "0px",
              marginLeft: "10px",
              marginTop: "10px",
            }}
            disabled>
            <span style={{ color: "rgb(171, 24, 166)" }}>{status} </span>TURN
          </button>
          <button
            className="btn btn-primary fw-bold text-start"
            type="button"
            style={{
              borderRadius: "0PX",
              color: "white",
              border: "0px",
              marginLeft: "10px",
              marginTop: "10px",
              float: "right",
              marginRight: "20px",
              background:
                'url("assets/img/75655051616276572973767-128.png") bottom / contain no-repeat, #ffffff',
              height: "30px",
            }}  onClick={handleShowFourthDiv}
          />
        </div>
        <div style={{ height: "70%" }}>
        <div>
      <br></br>
      <div className="board-row" style={{marginBottom: '10px'}}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row" style={{marginBottom: '10px'}}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row" >
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  
          <div style={{ marginTop: "10px" }}>
            <button
              className="btn btn-primary disabled"
              type="button"
              style={{
                height: "100px",
                marginLeft: "11px",
                marginRight: "10px",
                width: "150px",
                backgroundColor: "white",
                color: "black",
              }}
              disabled
            >
             <strong>&nbsp;{selectedValue}(PLAYER1)&nbsp; {counWin}</strong></button>
            <button
              className="btn btn-primary disabled"
              type="button"
              style={{
                height: "100px",
                marginLeft: "10px",
                marginRight: "10px",
                width: "150px",
                backgroundColor: "white",
                color: "black",
              }}
              disabled
            >
            
              <strong>&nbsp;(TIES)&nbsp; {counDraw}</strong>
              
            </button>
            <button
              className="btn btn-primary disabled"
              type="button"
              style={{
                height: "100px",
                marginLeft: "10px",
                marginRight: "10px",
                width: "150px",
                backgroundColor: "white",
                color: "black",
              }}
              disabled
            >
              <strong>&nbsp;{output}(PLAYER2)&nbsp; {counLose}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      </div>;

      <div id="vscomp" style={{ display: showSecondDiv ? 'block' : 'none' }}>
  <div>
    <div className="container">
      <div
        style={{
          width: "40%",
          margin: "auto",
          height: "670px",
          marginBottom: "20px",
          backgroundColor: "white",
          borderTopRightRadius: "35px",
          borderTopLeftRadius: "35px",
        }}
      >
        <div>
          <button
            className="btn btn-primary disabled fw-bold text-start"
            type="button"
            style={{
              borderRadius: "0PX",
              color: "black",
              backgroundColor: "inherit",
              border: "0px",
              marginLeft: "10px",
              marginTop: "10px",
            }}
            disabled
          >
            <span style={{ color: "rgb(171, 24, 166)" }}>X </span>TURN
          </button>
          <button
            className="btn btn-primary fw-bold text-start"
            type="button"
            style={{
              borderRadius: "0PX",
              color: "white",
              border: "0px",
              marginLeft: "10px",
              marginTop: "10px",
              float: "right",
              marginRight: "20px",
              background:
                'url("assets/img/75655051616276572973767-128.png") bottom / contain no-repeat, #ffffff',
              height: "30px",
            }}  onClick={handleShowFourthDiv}
          />
        </div>
        <div style={{ height: "70%" }}>
          <div style={{ marginTop: "30px" }}>
            <button
              className="btn btn-primary text-uppercase fs-1 fw-bold"
              type="button"
              style={{
                height: "150px",
                marginLeft: "14px",
                marginRight: "10px",
                width: "150px",
                borderRadius: "0px",
                backgroundColor: "#134cae",
                textAlign: "center",
              }}
            >
              <strong>X</strong>
            </button>
            <button
              className="btn btn-primary text-uppercase fs-1 fw-bold"
              type="button"
              style={{
                height: "150px",
                marginLeft: "10px",
                marginRight: "10px",
                width: "150px",
                borderRadius: "0px",
                backgroundColor: "#134cae",
              }}
            >
              X
            </button>
            <button
              className="btn btn-primary text-uppercase fs-1 fw-bold"
              type="button"
              style={{
                height: "150px",
                marginLeft: "10px",
                marginRight: "10px",
                width: "150px",
                borderRadius: "0px",
                backgroundColor: "#134cae",
              }}
            >
              X
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button
              className="btn btn-primary text-uppercase fs-1 fw-bold"
              type="button"
              style={{
                height: "150px",
                marginLeft: "14px",
                marginRight: "10px",
                width: "150px",
                borderRadius: "0px",
                backgroundColor: "#134cae",
              }}
            >
              X
            </button>
            <button
              className="btn btn-primary text-uppercase fs-1 fw-bold"
              type="button"
              style={{
                height: "150px",
                marginLeft: "10px",
                marginRight: "10px",
                width: "150px",
                borderRadius: "0px",
                backgroundColor: "#134cae",
              }}
            >
              X
            </button>
            <button
              className="btn btn-primary text-uppercase fs-1 fw-bold"
              type="button"
              style={{
                height: "150px",
                marginLeft: "10px",
                marginRight: "border-radius: 0px",
                backgroundColor: "#134cae",
                width: "150px",
                borderRadius: "0px",
              }}
            >
              X
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button
              className="btn btn-primary text-uppercase fs-1 fw-bold"
              type="button"
              style={{
                height: "150px",
                marginLeft: "14px",
                marginRight: "10px",
                width: "150px",
                borderRadius: "0px",
                backgroundColor: "#134cae",
              }}
            >
              X
            </button>
            <button
              className="btn btn-primary text-uppercase fs-1 fw-bold"
              type="button"
              style={{
                height: "150px",
                marginLeft: "10px",
                marginRight: "10px",
                width: "150px",
                borderRadius: "0px",
                backgroundColor: "#134cae",
              }}
            >
              X
            </button>
            <button
              className="btn btn-primary text-uppercase fs-1 fw-bold"
              type="button"
              style={{
                height: "150px",
                marginLeft: "10px",
                marginRight: "10px",
                width: "150px",
                borderRadius: "0px",
                backgroundColor: "#134cae",
              }}
            >
              X
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button
              className="btn btn-primary disabled"
              type="button"
              style={{
                height: "100px",
                marginLeft: "15px",
                marginRight: "10px",
                width: "150px",
                backgroundColor: "white",
                color: "black",
              }}
              disabled
            >
              &nbsp; &nbsp; &nbsp; &nbsp;<strong> X (You)&nbsp; </strong>&nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;#&nbsp;&nbsp;
            </button>
            <button
              className="btn btn-primary disabled"
              type="button"
              style={{
                height: "100px",
                marginLeft: "10px",
                marginRight: "10px",
                width: "150px",
                backgroundColor: "white",
                color: "black",
              }}
              disabled
            >
              <strong>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Ties&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; #
              </strong>
            </button>
            <button
              className="btn btn-primary disabled"
              type="button"
              style={{
                height: "100px",
                marginLeft: "10px",
                marginRight: "10px",
                width: "150px",
                backgroundColor: "white",
                color: "black",
              }}
              disabled
            >
              <strong>&nbsp;O(COMPUTER)&nbsp; #</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>;

      <div id="leave" style={{ display: showFourthDiv ? 'block' : 'none' }}>


      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>tic</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <div className="container">
          <div style={{width: '30%', margin: 'auto', height: '150px', marginBottom: '20px', backgroundColor: 'none', borderRadius: '35px'}}>
            <h4 className="font-monospace fw-bold text-center" style={{marginTop: '20px'}}>DO YOU WANT TO RESTART YOUR GAME ?</h4>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <button className="btn btn-primary" type="button" style={{margin: '0 10px', width: '50%', borderRadius: '0px', backgroundColor: 'white', color: 'black', border: '0px'}} ><strong>No thanks&nbsp;</strong></button> 
            <button className="btn btn-primary" type="button" style={{margin: '0 10px', width: '50%', borderRadius: '0px', backgroundColor: 'white', color: 'black', border: '0px'}}onClick={handleShowFirst}><strong>Yes Do it&nbsp;</strong></button>
            </div>
          </div>
        </div>
      </div>

   
  
      </div>

      <div id="main" className="container" style={{ display: showFifthDiv ? 'block' : 'none' }}>
  

      <div className="container">
        <div style={{width: '30%', margin: 'auto', height: '150px', marginBottom: '20px', backgroundColor: 'none', borderRadius: '35px'}}>
          <h4 className="font-monospace fw-bold text-center" style={{marginTop: '20px', display: w  ? 'block' : 'none' }}>{win}&nbsp;TAKES THE ROUND</h4>
          <h4 className="font-monospace fw-bold text-center" style={{marginTop: '20px', display: d  ? 'block' : 'none' }}>&nbsp;it's a tie</h4>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <button className="btn btn-primary" type="button" style={{margin: '0 10px', width: '30%', borderRadius: '0px', backgroundColor: 'var(--bs-white)', color: 'black', border: '0px'}} onClick={handleShowFirst}><strong>Quite</strong></button>
            <button className="btn btn-primary" type="button" style={{margin: '0 10px', width: '80%', borderRadius: '0px', backgroundColor: '#31ccee', color: 'black', border: '0px'}} onClick={count}><strong>Next Round</strong></button></div>
        </div>
      </div>

       
      </div>;
    </div>
  );
}

export default App;
