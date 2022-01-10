import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        /* size */
        --min-width: 10vw;
        --small: calc(0.25rem - 1px) calc(0.375rem - 1px);
        --medium: calc(0.25rem - 1px) calc(0.5rem - 1px);
        --large: calc(0.5rem - 1px);
        --lineHeight: 1.5;

        /* Global colors */
        --white: #ffffff;
        --black: #000000;
        --dark-one: #404040;
        --dark-two: #222222;
        --gray: #8c8c8c;
        --pink: #ed6ea4;

        /* Theme */
        ${(props) => {
            switch (props.theme) {
                default:
                case 'light':
                    return `
                        --background-one: #c2d0ef;
                        --background-two: #aec0ea;
                        --title-color: rgba(255, 255, 255, 0.5);
                        --text-color: var(--dark-one);
                        --block-color: var(--dark-two);
                        --header-background-color: rgba(255, 255, 255, 0.9);
                        --footer-background-color: rgba(255, 255, 255, 0.9);
                        --header-text-color: var(--black);
                        --footer-text-color: var(--black);
                    `;
                case 'dark':
                    return `
                        --background-one: #404e8c;
                        --background-two: #38447a;
                        --title-color: rgba(38, 38, 38, 0.5);
                        --text-color: #8892b0;
                        --block-color: #a3aac2;
                        --header-background-color: rgba(38, 38, 38, 0.8);
                        --footer-background-color: rgba(38, 38, 38, 0.8);
                        --header-text-color: var(--white);
                        --footer-text-color: var(--white);
                    `;
            }
        }}
    }
`;

export default GlobalStyle;
