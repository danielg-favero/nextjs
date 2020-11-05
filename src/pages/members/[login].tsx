//Quando um arquivo est

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { Container } from "../../styles/pages/[login]";

export default function Member({ avatar_url, name, bio }: InferGetStaticPropsType<typeof getStaticProps>) {
    const { isFallback } = useRouter();

    //Se a página está sendo construida, mostrar que ela está sendo carregada
    if (isFallback) {
        return <p>Carregando...</p>
    }

    return (
        <Container>
            <img src={avatar_url} alt={name} />
            <h1>{name}</h1>
            <p>{bio}</p>
        </Container>
    );
}

//como estamos utilizando parâmetros de forma dinâmica é preciso utilizar essa função
//é preciso gerar uma página estática para cada usuário que a api possui
export const getStaticPaths: GetStaticPaths = async () => {
    //fazendo requisição de todos os usuários
    const response = await fetch(`https://api.github.com/orgs/rocketseat/members`);
    const data = await response.json();

    //obtendo os dados de todos os usuários e criando uma rota para eles
    const paths = data.map(member => {
        return { params: { login: member.login } }
    });

    return {
        paths,
        fallback: true, //se fallback = true, a aplicação vai gerar a página estática que não existia apenas na hora que alguém entrar na rota
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { login } = context.params;

    //pegar as informações do usuário informado na url
    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();
    const { avatar_url, name, bio } = data;

    return {
        props: {
            avatar_url, name, bio
        },

        revalidate: 10,
    }
}