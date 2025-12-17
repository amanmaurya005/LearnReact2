import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
// import App from './App.jsx'
import Routing from './routing.jsx'
import TodoList from './Reducer.jsx'
import Zustand from './Zustand.jsx'
import Form from "./Form.jsx"
import ColorBox from "./ColorBox.jsx"
import Bcrypt_Routing from './Bcrypt_Routing.jsx'
import Checkbox from './CheckBox.jsx'

createRoot(document.getElementById('root')).render(
 
    // <App />
    // <TodoList />  
    // <Form />
    // <Zustand />
    // {/* <Routing /> */}
    // <ColorBox />
    // <Bcrypt_Routing />
    <Checkbox />

)
