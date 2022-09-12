// Components (function) : all on our client-side
// Intefaces (interface) : props from Components for change behavior

interface ButtonProps {
  title: string
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="NLW"/>
      <Button title="eSports"/>
      <Button title="Never Stop!"/>
    </div>
  )
}

export default App
