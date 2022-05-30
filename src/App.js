import { useState } from "react"
import "./App.css"
import List from "./components/List"
import { data } from "./components/data"

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        {/* kate ota list xa bhanara check garrako */}
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {/* clear garaxa sabai list or data lai */}
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
