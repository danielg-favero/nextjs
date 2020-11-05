# NEXTJS

## CRIANDO UM PROJETO NEXTJS

`create next-app nome-do-projeto`



## RODANDO APLICAÇÃO NEXT

`yarn dev` 

**OBS:** A aplicação irá rodar na *Localhost:3000*



## STYLED COMPONENTS

`yarn add styled-components`

**OBS:** É preciso fazer uma configuração diferente para utilizar o styled components no nextjs, por que devido ao fato do nextjs possuir *server-side rendering*, o styled components não tem funcionamento no lado do servidor, apenas pelo lado do cliente.



#### Configurando o styled-components no nextjs:

Criar um arquivo `babel.config.js` e dentro dele:

```javascript
module.exports = {
    "presets": ["next/babel"],
    "plugins": [["styled-components", { "css": true }]]
};
```



## ESQUEMA DE ROTAS NO NEXT

Cada arquivo dentro da pasta *pages* é considerado uma rota, por exemplo:

- **Pages>index.tsx** (`http://localhost:3000`)
- **Pages>members>[users].tsx** (`http://localhost:3000/members/daniel-favero`)



## GERAÇÃO DE PÁGINAS ESTÁTICAS

Toda vez que uma página de uma aplicação não possui chamada a API, ou não ocorre comunicação com o servidor, o next transforma essa página automaticamente em uma página estática. 

O next cria essa página pronta com HTML, CSS e JS antes do usuário acessar essapágina.

Para gerar uma página estática, dentro do arquivo do componente da sua página, é preciso incluir:

```typescript
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
```



## GERAR PÁGINAS ESTÁTICAS COM PARÂMETROS NA URL

Ao criar um arquivo com [], você está indicando para o next que existe um parâmetro na url que pode ser acessado, por exemplo: `[usuarios].tsx`. Portanto é preciso criar uma página estática para cada parâmetro que é passado na url.

```typescript
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
        fallback: false,
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
        }
    }
}
```

