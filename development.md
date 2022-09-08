## next app

- npx create-next-app --typescript my-app

- npx create-next-app@latest --ts

## mongoose

- yarn add mongoose
- yarn add -D @types/mongoose

## tailwind

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- npm install -D @tailwindcss/typography

## styled-components

- npm install --save styled-components

## prettier

- npm install --save-dev prettier
- create .prettierrc.js

```javascript
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
}
```

- add scripts

```json
"scripts": {
    "format": "prettier --check --ignore-path .gitignore .",
    "format:fix": "prettier --write --ignore-path .gitignore .",
    "fileFormat": "prettier --write"
}
```
