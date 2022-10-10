# Planning and Execution

I decided for a tech stack that would give me the fastest start and the possibility to keep a small bundle size.

Besides what was installed to have a running Typescript React project, I installed [axios](https://axios-http.com) to handle network requests and [react-form](https://github.com/tannerlinsley/react-form) to handle forms. All styling was done with tailwind, except for global configurations of typography and custom colors. I avoided using a UI library like Material-UI to keep the bundle size low as requested.

Finally, I chose [zustand](https://github.com/pmndrs/zustand) as the app state manager, because it is a small one and easy to install and use. I prefer to have my components as dumb as possible, only fetching the necessary state pieces to render and have simple dispatch functions. No props if I can avoid them.


# Tech stack:
This is a [ReactJS](https://reactjs.org) + [Vite](https://vitejs.dev) boilerplate used with [Tailwindcss](https://tailwindcss.com).

This project also uses the following tools:

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)

Project was bootstrapped with a template made by [João Paulo Moraes](https://github.com/joaopaulomoraes) by using the following command:


```bash
npx degit joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate my-app
```


# Building
Just run

```bash
yarn build
```

# Troubles
I found it weird to receive an api payload with text content already encapsuled in html tags. In a real situation, I think the best approach would be to ask the backend team to send only string contents, but I get why it was put in the challenge. I got _pwned_ twice by the <img> tag carrying an infectious *onload* attribute. But this gave me a very good oportunity to understand why one should'nt use *dangerouslySetInnerHTML* and develop a deeper understanding of regular expressions to sanitize the payload, for which I'm glad and thankful. I hope my sanitization procedure was enough to keep the application safe.


# License

This project is licensed under the MIT License.
