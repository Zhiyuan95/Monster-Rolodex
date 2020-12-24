import './App.css'
import React, { Component } from 'react'
import Cardlist from './Components/Card-list/Card-list.component'
import SesrchBar from './Components/SearchBar/SearchBar.component'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monster: [],
      searchfiled: ''
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ monster: user }))
  }



  render() {
    const { monster, searchfiled } = this.state;
    const filterMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchfiled.toLowerCase()));
    return (
      <div className='App'>
        <h1 id='title'>Monsters Rolodex</h1>
        <SesrchBar placeholder='monster search' handleChange={e => this.setState({ searchfiled: e.target.value })} />
        <Cardlist monster={filterMonsters} />
      </div>
    )
  }

}

export default App
