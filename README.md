
# <p style="text-align: center; padding: 20px;"><img src="https://tcc1sumare.blob.core.windows.net/tcc/logo.png" width="800" height="300" align="center"></p>


Neste mundo onde a quantidade de informações disponíveis são velozes, existe um grande problema a efetividade. Algumas empresas têm diversos canais que causam a interrupção ou lentidão dos processos por conta do atendimento e o tempo de abertura dessas ferramentas, ou o canal único, que pode ter algum problema e parar de funcionar. 
Existem sobrecargas e ausência de clareza na estrutura e direções, tornando a eficácia baixa, com problemas como horas de mensagens desnecessárias, pares derrotados e mais preocupações como a falta de segurança que tais condições podem afligir. 
Este site conterá informações sobre estratégias de agilidade da comunicação integrada à segurança da informação, usando tecnologia disposta.

### Objetivo Principal;

-   Criar um site sobre segurança da informação e nele mostrar formas de se obter melhor agilidade na segurança da informação.
    


### Objetivo específico;

-   Oferecer opções para que seja utilizada a agilidade integrada a segurança da informação
    
-   Incentivar o estudo da comunicação e melhora na área.
    
-   Incentivar boas práticas para com o uso, manuseio de informações.
    

Ser uma possível referência de estudo para os futuros usuários.
  

<http://http://www.datastorm.kinghost.net/>

  

# FRONT-END

  

## Pré-requisitos

  

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

Git 
Node.js
Typescript 
Angular/cli.

  

## Baixar o projeto em sua maquina

  

### 💾Clone o repositório:

  

Em seu terminal use o comando:

  

```bash

> git clone https://github.com/Andre0Luis/TCC_I_SUMARE.git
```

  

Vá para a pasta do projeto clonado:

  

```bash

> cd TCC_I_SUMARE

```

  

## 📦Instale as dependências

  

Instale os pacotes npm descritos no package.json e verifique se funciona:

  

```

> npm install

```

  

Aguarde o fim do processo, pode demorar alguns minutos.

  

## 🎲Rodar o projeto

  

use o comando:

  

```

> npm start

```

  

O comando npm start constrói (compila TypeScript e copia ativos) o aplicativo em dist /, observa as alterações nos arquivos de origem e executa o lite-server na porta 4200.

  

## GIT e GIT FLOW

  

Os comandos abaixo são utilizados para as seguintes funções:

  

```

> git checkout [nome da branch]

Além de mudar de branch, o git checkout pode ser usado para voltar um determinado arquivo para seu estado na staged area.

  

> git checkout -b [nome da branch]

Cria-se uma nova branch a partir da branch atual do projeto.

  

> git add

Git add adiciona uma alteração no diretório ativo à área de staging. Ele diz ao Git que você quer incluir atualizações a um arquivo específico no próximo commit.

  

> git add .

esse comando adiciona todas as alterações no diretório ativo à área de staging.

  

> git commit -m "[descrição do commit]"

Os commits são as unidades estruturais de um cronograma de projeto Git. Podem ser considerados instantâneos ou marcos ao longo do cronograma de um projeto Git. São criados com o comando git commit para capturar o estado de um projeto naquele momento.

  

> git push

O comando git push é mais usado para publicar modificações locais a um repositório central. Após um repositório local ter sido modificado, um comando push é executado para compartilhar as modificações com membros da equipe remota.

```

  

- MAIN - Branch destinada a build de produção.

- RELEASE - Branch destinada a build de homologação/teste.

- DEVELOPMENT - Branch destinada a build de desenvolvimento.

- [feature branch] - Branch destinada a build de desenvolvimento de novas features do produto.

  

Quando você faz a clonagem dos repositorios do projeto, precisa criar uma branch com o nome de development git checkout -b development e nela vc cria uma outra branch git checkout -b (coloca um nome que tenha referencia a sua tarefa) para fazer os commits e depois fazer o pull request no github. Passo a passo de como fazer pull request: 1: sempre seleciona a branch que vc criou para fazer os commits; 2: sempre seleciona a development ; 3: marcar os avaliadores, sempre o lider do projeto e outra pessoa que auxilia; 4: aguardar a validação do lider.

  

## Atenção

  

Mantenha as branchs **_development e release_** em sua forma mais atualizada, utilizando o método de **_pull resquests_**, pois ela é essencial para o fluxo(**_git flow_**), durante o processo de desenvolvimento e deploy da aplicação.


## 🛠 Tecnologias

  
<img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"  width="48"  height="48"  style="margin: 0px 3px">

<img  src="https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"  width="40"  height="40"  style="margin: 0px 3px">

<img  src="https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png"  width="40"  height="40"  style="margin: 0px 3px">

<img  src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"  width="40"  height="40"  style="margin: 0px 3px">

<img  src="https://thesoftaims.com/assets/node-js-0ca7d1d4e22d949b6f223ba9faef52207a823ea56f1e9f1bb50cc49ebd60f965.png"  width="40"  height="40"  style="margin: 0px 3px">

<img  src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"  width="40"  height="40"  style="margin: 0px 3px">

## Licença

  

[Data Storm - © Todos os direitos reservados 2021](http://http://www.datastorm.kinghost.net/).