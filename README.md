# stock-sync
A data collection and validation system for inventory management using barcode scanning.
# Backend Project stock-sync

Este é um projeto backend desenvolvido com Node.js, Express e Type ORM.

## Tecnologias Utilizadas

- **Node.js**
- **Express** - Framework para API REST
- **Type ORM** - Para interação com o banco de dados
- **TypeScript** - Tipagem estática para JavaScript
- **tsup** - Para build do projeto

## Configuração do Projeto

### Instalação das Dependências

```bash
# Usando Yarn
yarn install

# Ou usando NPM
npm install
```

### Scripts Disponíveis
- **Executar Migrações**:
  ```bash
  npx typeorm migration:run -d src/data-source.ts
  ```
- **Modo Desenvolvimento**:
  ```bash
  yarn dev
  ```
- **Build do Projeto**:
  ```bash
  yarn build
  ```
- **Iniciar o Servidor**:
  ```bash
  yarn start
  ```

## Estrutura do Projeto

```
backend-project-cnpj/
├── src/                  # Código fonte
│   ├── errors/           # Erros customizáveis
│   ├── controllers/      # Controladores das rotas
│   ├── middlewares/      # Middlewares para requisições
│   ├── repositories/     # Repositório de dados
        ├──interfaces/    #Contratos para os repositórios
│   ├── routes/           # Definição das rotas
│   ├── services/         # Regras de negócio
│   ├── utils/            # Funções auxiliares
│   ├── index.ts          # Ponto de entrada da aplicação
│
├── .env                  # Configuração de variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Configuração do projeto e dependências
├── tsconfig.json         # Configuração do TypeScript
├── README.md             # Documentação do projeto
```

## Contribuição

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature-minha-feature`)
3. Commit suas alterações (`git commit -m 'Adicionando minha feature'`)
4. Push para a branch (`git push origin feature-minha-feature`)
5. Abra um Pull Request

---

Este README pode ser melhorado futuramente com mais detalhes sobre endpoints e exemplos de uso da API.

