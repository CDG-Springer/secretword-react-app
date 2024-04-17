import './Over.css'

const Over = ({restart}) => {
  return (
    <div>
      <h1>Você perdeu :(</h1>
      <h1>Jogar novamente?</h1>
      <button onClick={restart}>Reinciar</button>
    </div>
  )
}

export default Over
