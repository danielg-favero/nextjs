import Head from 'next/head'
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Nextjs</title>
      </Head>

      <h1>Estrutura de um projeto Nextjs</h1>
      <p>Made by: Daniel Gustavo Favero, in reference to Rocketseat</p>
    </Container>
  )
}

export default Home;