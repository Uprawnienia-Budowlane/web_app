import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    div:'',
    font: ''
}

export const darkTheme = {
    div:'#292929',
    Bg_wiget: '#3B5379',
    div_second:'#575757',
    fontColor: '#dedede',
    BgBlueGray: '#1f1f1f',
    NormalColor:'#3B82F6',
    WhiteColor:'#fff',
    BgBlueGrayHover: '#2b2b2b',
    SvgChange: 'rgba(255, 255, 255, var(--tw-text-opacity))',
    SvgChangeLight: 'rgba(255, 255, 255, var(--tw-text-opacity))'
}

export const GlobalStyles = createGlobalStyle`

.dark-mode-color_widget {
    background-color: ${props => props.theme.Bg_wiget};
}

.bg-blueGray-100 {
    background-color: ${props => props.theme.BgBlueGray};
}

.bg-blueGray-100:hover {
    background-color: ${props => props.theme.BgBlueGray}
}

svg {
    color:${props => props.theme.WhiteColor}
}

svg:hover {
    color:${props => props.theme.NormalColor}
}

.main-change-dark-mode {
    background: ${props => props.theme.BgBlueGrayHover};
}

.main-change-dark-mode svg {
    background: ${props => props.theme.BgBlueGray};
}

.bg-blueGray-100~.main-change-dark-mode svg:hover {
    background: ${props => props.theme.BgBlueGrayHover};
}

.speciality-change {
    background: ${props => props.theme.NormalColor}
}

.main-stats-dark-mode {
    background: ${props => props.theme.NormalColor};

}

.mobile-navigation {
    background: ${props => props.theme.BgBlueGrayHover};
}

.night-mode-btn {
    background: ${props => props.theme.WhiteColor};
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