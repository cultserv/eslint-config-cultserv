# ESLint Config by Ponominalu.ru

Install ESLint and config:

```bash
npm i -D eslint \ 
eslint-config-standard \
eslint-plugin-import  \
eslint-plugin-node \ 
eslint-plugin-promise 
eslint-plugin-vue \ 
git+https://github.com/cultserv/eslint-config-cultserv.git
```

`.eslintrc` have to includes:

```json
{
  "extends": "cultserv"
}
```

That's it!
