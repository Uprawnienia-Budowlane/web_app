import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    div:'',
    font: ''
}

export const darkTheme = {
    div:'#292929',
    div_second:'#575757',
    fontColor: '#dedede',
    BgBlueGray: '#1f1f1f',
    BgBlueGrayHover: '#2b2b2b',
    SvgChange: 'rgba(255, 255, 255, var(--tw-text-opacity))',
    SvgChangeLight: 'rgba(255, 255, 255, var(--tw-text-opacity))'
}

export const GlobalStyles = createGlobalStyle`

.bg-blueGray-100 {
    background-color: ${props => props.theme.BgBlueGray};
}

.bg-blueGray-100:hover {
    background-color: ${props => props.theme.BgBlueGrayHover}
}

.mr-4 {
    background-color: ${props => props.theme.SvgChangeLight};
}

.mt-8 {
    background-color: ${props => props.theme.div};
}

.h-full {
    background-color: ${props => props.theme.div};
}

div {
    background-color: ${props => props.theme.div};
    color: ${props => props.theme.fontColor};
}

`