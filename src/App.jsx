import { Route, Routes } from 'react-router-dom'
import ReceiptList from './components/ReceiptList'
import ReceiptDetails from './components/ReceiptDetails'
import './App.css'
function App () {
  return (
    <div>
      <h2>Recetario de MealDB</h2>
      <Routes>
        <Route exact path='/' element={<ReceiptList />} />
        <Route path='/receipts/:id' element={<ReceiptDetails />} />
      </Routes>
    </div>
  )
}
export default App
