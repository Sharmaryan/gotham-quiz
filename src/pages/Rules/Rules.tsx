import './Rules.css';
export const Rules = () => {
  return (
    <div className='rules'>
        <h1 className="rules__heading">Rules</h1>
        <ol className="rules__descriptons">
          <li className="rules__description">Do not cheat.</li>  
          <li className="rules__description">Don't forget rules number one.</li>  
        </ol>
        <button className="rules__btn">Start</button>
    </div>
  )
}
