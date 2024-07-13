
import '../src/Style.css'
import Header from './Components/Header'
import SideNave from './Components/SideNave'
import Resumo from './Pages/Resumo'
import { DataContextProvider } from '../src/Context/DataContext'
import Vendas from './Pages/Vendas'
function App() {

  return (
    <DataContextProvider>
      <div>
        <SideNave />
        <main>
          <Header />
          <Resumo />
          <Vendas />
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
