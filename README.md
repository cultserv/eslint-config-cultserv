# ESLint Config by CultServ

Install ESLint and config:

```bash
$ npm install eslint eslint-config-cultserv --save-dev
```

Create `.eslintrc` in your project containing:

```json
{
  "extends": "cultserv"
}
```

Append project-specific `env` and `globals` params:

```json
{
  "extends": "cultserv",
  "env": {
    "jquery": true,
    "jasmine": true
  },
  "globals": {
    "angular": false,
    "moment": false
  }
}
```

That's it!
