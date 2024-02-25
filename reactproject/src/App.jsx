import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   function onclickhandler(){
//     setCount(count+1)
//   }
//   return (
//     <div>
//         <button onClick={onclickhandler}>
//           count :{count}
//         </button>
  
//     </div>
//   )
// }

function App() {
  const [count, setCount] = React.useState(0)


  return (
    <div>
   <costumbuttom count={count} setCount={setCount}></costumbuttom>
    </div
  )
}

function costumbuttom(props){


  function onclickhandler(){
    props.setCount(props.count + 1)
  }

  return <button onClick={onclickhandler}>
    count:{props.count}
  </button>

}

export default App
