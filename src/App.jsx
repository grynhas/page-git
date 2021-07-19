import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header'
import { Avatar } from './components/Avatar'
import { Information } from './components/Information'


function App() {
  const [dados, setDados] = useState({})

  useEffect(() => {
    fetch('https://api.github.com/users/grynhas')
      .then(response => response.json())
      .then(data => setDados(data))
  }, [])

  return (
    <>
      <Header name={dados.name} location={dados.location} />
      <div className="main">
        <Information name='followers' num={dados.followers} />
        <Avatar url={dados.avatar_url} />
        <Information name='following' num={dados.following} />
      </div>
    </>
  );
}

export default App;
