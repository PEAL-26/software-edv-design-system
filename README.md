# Software EDV Design System

[![GitHub issues](https://img.shields.io/github/issues/PEAL-26/software-edv-design-system)](https://github.com/PEAL-26/software-edv-design-system/issues)
[![GitHub license](https://img.shields.io/github/license/PEAL-26/software-edv-design-system)](https://github.com/PEAL-26/software-edv-design-system/blob/master/LICENSE)

## Descrição

O Software EDV Design System é um sistema de design desenvolvido para o Software EDV.

## Instalação

Você pode instalar este pacote via npm:

```bash
npm install software-edv-design-system
```

Instale também o plugin @tailwindcss/forms que os inputs sejam estilizados

```bash
npm i -D @tailwindcss/forms
```

## Configurações

1. Insira as seguintes linhas no seu arquivo **tailwind.config.js**:

```js
const { tailwindConfig } = require('software-edv-design-system/configs');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/software-edv-design-system/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [tailwindConfig, forms],
};
```

## Uso

Para usar este design system em seu projeto, você pode importar os componentes necessários da seguinte maneira:

```javascript
import { Button, Input } from 'software-edv-design-system/components';
```

Certifique-se de que as dependências do React (`next`, `react` e `react-dom`) estejam instaladas em seu projeto, conforme especificado nas `peerDependencies`.

## Módulos

- Components
- Configs
- Contexts
- Helpers
- Hooks
- Libs
- Styles

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Você pode relatar problemas na [página de problemas](https://github.com/PEAL-26/software-edv-design-system/issues).

## Licença

Este projeto é licenciado sob a Licença ISC. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## Links

- [Página do Design System](https://peal-26.github.io/software-edv-design-system)
- [Página do GitHub](https://github.com/PEAL-26/software-edv-design-system)
- [Página de Problemas](https://github.com/PEAL-26/software-edv-design-system/issues)
- [Página do npm](https://www.npmjs.com/package/software-edv-design-system)
