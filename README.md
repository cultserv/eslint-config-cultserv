# ESLint Config by Dmitry Guryev

Install ESLint and config:

```bash
$ npm install eslint eslint-config-dguryev --save-dev
```

Create `.eslintrc` in your project containing:

```json
{
  "extends": "dguryev"
}
```

Append project-specific `env` and `globals` params:

```json
{
  "extends": "dguryev",
  "env": {
    "angular": true,
    "jquery": true,
    "jasmine": true
  },
  "globals": {
    "moment": false
  }
}
```

That's all!
