import Header from "./Header"
import WaifuDisplayWrapper from "./WaifuDisplayWrapper"
import TagButtons from "./TagButtons"

function App() {
  return ( 
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className="flex justify-center">
        <TagButtons />
      </div>
      <WaifuDisplayWrapper />
    </div>
  )
}

export default App
