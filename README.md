# ArtGallery Application

This is a simple application to display art objects based on React + Vite + Typescript.

## Running the application

First clone the repository then install the dependencies and run the application.
You need to have an API key from the [Rijksmuseum](https://www.rijksmuseum.nl) website to run the application.
To run the application, use the following command:

```bash
npm install
npm run dev
```

## API Usage for art objects and configuration

Art objects are fetched from the following endpoint: `https://data.rijksmuseum.nl`.

You must set your API key in the `.env` file.

Create a `.env` file in the root of the project and add the following line:
`VITE_RISK_MUSEUM_API_KEY="YOUR_API_KEY"`

## Running storybook for components

Storybook is a tool to visualize your component library
To run storybook, use the following command:

```bash
npm run storybook
```

Then you can view your components in the browser at http://localhost:6006.

NB : Not all designed components are currently visualized.

## Running e2e tests

First you need to start the dev server.

To run e2e tests, use the following command:

```bash
npm run e2e
```

If you want to run e2e tests with UI, use the following command:

```bash
npm run e2e:ui
```
