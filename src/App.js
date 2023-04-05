import './App.css';
import {useState} from 'react';


function App() {
  const[char,setChar]=useState('x');
  const[count,setCount]=useState(1);
  const [winner,setWinner]=useState();
  const [matrix,setMatrix] = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ]);

  const handleClick=(r,c)=>{
    if (matrix[r][c]) return;
 const tempMatrix =[...matrix];
 
 tempMatrix[r][c]=char;
 setMatrix(tempMatrix);
 setChar(char==='x'?'o':'x');
 setCount(count+1)
 checkWinner();
 checkExist(r,c);

  }
  const checkExist=(r,c)=>{
    if (matrix[r][c]!=='');
    return 'value'
  }
  const getBgClass=(value)=>{
    if (value=='x') return 'red';
    if (value=='o') return 'blue';
    return '';

  }
  
  const checkWinner=()=>{
    if( matrix[0][0] && matrix[0][0]===matrix[0][1]&& matrix[0][1]===matrix[0][2]) {
    setWinner(matrix[0][0]+' is the winner');
  }
  if( matrix[1][0] && matrix[1][0]===matrix[1][1]&& matrix[1][1]===matrix[1][2]) {
    setWinner(matrix[1][0]+' is the winner');
  }
  if(matrix[2][0] &&matrix[2][0]===matrix[2][1]&& matrix[2][1]===matrix[2][2]) {
    setWinner(matrix[2][0]+' is the winner');
  }
  if( matrix[0][0] &&matrix[0][0]===matrix[1][0]&& matrix[1][0]===matrix[2][0]) {
    setWinner(matrix[0][0]+' is the winner');
  }
  if( matrix[0][1] &&matrix[0][1]===matrix[1][1]&& matrix[1][1]===matrix[2][1]) {
    setWinner(matrix[0][1]+' is the winner');
  }
  if( matrix[0][2] &&matrix[0][2]===matrix[1][2]&& matrix[1][2]===matrix[2][2]) {
    setWinner(matrix[0][2]+' is the winner');
  }
  if( matrix[0][0] &&matrix[0][0]===matrix[1][1]&& matrix[1][1]===matrix[2][2]) {
    setWinner(matrix[0][0]+' is the winner');
  }
  if(matrix[2][0] &&matrix[2][0]===matrix[1][1]&& matrix[1][1]===matrix[0][2]) {
    setWinner(matrix[2][0]+' is the winner');
  }
  if(count===9){
    setWinner("The Match Is Drawn")
  }
  }
  return (
    <div className="App">
    
      <div className="header center">Tic Tac Toe</div>
      <div className='center turn'>
        {!winner && <p>{char} Turn now</p>}</div>
      <div className="board center">
      <div className='center gameover'>{winner && <p>GAME OVER</p>}</div>
      <div className='center winner'> {winner} </div>
        <div>
        {winner ||matrix.map((row,rIndex) =>(
       <div className='row'>
       
        {row.map((cell,cIndex)=>(
          <div onClick={()=>handleClick(rIndex,cIndex)}className={`cell center ${getBgClass(matrix[rIndex][cIndex])}`}>{matrix[rIndex][cIndex]}</div>
        ))}
       </div>
       
       
  ))}
  </div>
  <button onClick={()=>{
    setWinner('')
    setChar('x')
    setCount(1)
    setMatrix([
      ['','',''],
      ['','',''],
      ['','',''],
    ])
  }}
   >
    Restart
  </button>

      </div>
      
    </div>
  );
}

export default App;
