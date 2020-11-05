import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from 'next/link';
import { ApiContainer, Container } from "../styles/pages/staticPage";


//Inferir a tipagem do retorno da função getStaticProps
const staticPage = ({ login, description, blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Container>
            <h1>Esse é um exemplo de página estática</h1>

            <p>Informações retiradas da api da Rocketseat</p>
            <ApiContainer>
                <h1>{login}</h1>
                <h3>{description}</h3>

                <p>Site: <a href={blog}>{blog}</a></p>
            </ApiContainer>

            <Link href="/">
                <button>Voltar</button>
            </Link>
        </Container>
    );
}

//no momento da build, o next coleta os dados dessa função e repassa para o componente Home, montando ele de forma estática
export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://api.github.com/orgs/rocketseat');
    const { login, description, blog } = await response.json();

    return {
        props: {
            login,
            description,
            blog
        },

        //manter a página em cache por 10 segundos
        //a cada 10 segundos uma nova página estática é gerada
        revalidate: 10
    }
}

export default staticPage;