import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Copyright from './components/Copyright'
import FloatForm from './components/FloatForm'
import Loading from './components/Loading'
import NextForm from './components/NextForm'
import Home from './pages/Home'

function App() {

  const [showFloatForm, setShowFloatForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 2000);

  if (isLoading) {
    return <Loading />
  } else {
    return (
      <div className="App">

        <FloatForm
          showFloatForm={showFloatForm}
          setShowFloatForm={setShowFloatForm}
        />

        <Routes>
          <Route path='/' element={<Home setShowFloatForm={setShowFloatForm} />} />
          <Route path='next-form' element={<NextForm />} />
        </Routes>

        <Copyright />
      </div>
    )
  }
}

export default App
