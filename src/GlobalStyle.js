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
        --dark-one: #333333;
        --dark-two: #222222;
        --gray: #aaaaaa;
        --pink: #ed6ea4;

        /* Theme */
        ${(props) => {
            switch (props.theme) {
                default:
                case 'light':
                    return `
                        --background-one: #f2d9f2;
                        --background-two: #eeccee;
                        --header: rgba(255, 255, 255, 0.9);
                        --footer: rgba(255, 255, 255, 0.9);
                    `;
                case 'dark':
                    return `
                        --background-one: #404e8c;
                        --background-two: #38447a;
                        --header: rgba(255, 255, 255, 0.9);
                        --footer: rgba(255, 255, 255, 0.9);
                    `;
            }
            
        }}
    }
`;

export default GlobalStyle;
