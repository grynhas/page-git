import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header'
import { Avatar } from './components/Avatar'
import { Information } from './components/Information'
import { Partition } from './components/Partition';
import { Repo } from './components/Repo';
import { DivFlex } from './components/DivFlex';


function App() {
  const [dados, setDados] = useState({})
  const [repos, setRepos] = useState([])
  const [userName, setUserName] = useState('lilex82')

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => setDados(data))
  }, [])

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])

  return (
    <>
      <Header name={dados.name} location={dados.location} />
      <DivFlex >

        <Information name='followers' num={dados.followers} />
        <Avatar url={dados.avatar_url} />
        <Information name='following' num={dados.following} />

      </DivFlex>
      <Partition title='Repositórios' />
      <DivFlex >

        {repos.map((repo, index) =>
          <Repo
            key={index}
            name={repo.name}
          />
        )}

      </DivFlex>
    </>
  );
}

export default App;
