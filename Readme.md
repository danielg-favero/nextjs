# NEXTJS

### CRIANDO UM PROJETO NEXTJS

`create next-app nome-do-projeto`



### RODANDO APLICAÇÃO NEXT

`yarn dev` 

**OBS:** A aplicação irá rodar na *Localhost:3000*



### STYLED COMPONENTS

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

