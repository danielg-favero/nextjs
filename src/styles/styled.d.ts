//ARQUIVO PARA DEFINIÇÃO DE TIPOS

//Nesse caso estamos definindo os tipos do tema

import 'styled-components';

import theme from './theme';

export type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}