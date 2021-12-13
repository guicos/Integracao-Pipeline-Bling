# Integracao-Pipeline-Bling

Integração do Pipeline com o Bling utilizando banco de dados mongo (banco não relacional).

Inicializando o projeto...

1. realizar GIT CLONE do repositorio ( verificar se o ramo selecionado é a master)
2. Alteral o arquivo .env.staging para .env onde se encontra as crendencias de acessos às APIs e Banco de dados.
3. rodar o comando npm install no console dentro da pasta integração.
4. configurar o ambiente com o comando yarn install no console
5. Após tudo configurado somente rodar o comando yarn start no console dentro da pasta integração

O projeto foi contruindo tentando respeitar ao maximo às regras de SOLID e Arquitetura Limpa dentro do meu pouco conhecimento;

Single Responsability Principle (Princípio da Responsabilidade Única);
Open/Closed Principle (Princípio do “Aberto para Extensão/Fechado para Implementação);
Liskov Substitution Principle (Princípio da Substituição de Liskov);
Interface Segregation Principle (Princípio da Segregação de Interfaces);
Dependency Inversion Principle (Princípio da Inversão de Dependências);

Porque SOLID ?
  Pensando na legibilidade do codigo e entendimento para quem bater o olho entender.
  Na melhor perfomace para API
  Melhor estrutura do codigo tendo suas devidas separações facilitando uma futura refatoção ou mudança de pacotes externos como banco de dados
  de forma que minha aplicação não seja dependente de uma tecnologia especifica.
  Separando minha regra de negocio do mundo externo.
  
 Para realizar essa construção de SOLID utilizei TypeScript
 
 Porque TypeScript ?
  Type auxilia o desenvolvedor a tipar a liguagem como javascript, antecipa os erros para o desenvolvedor auxiliando no desenvolvimento e evitando alguns erros.
 
 Gaps e Melhorias.
 
  Atualmente a API não pega datas a qual o pedido foi no dia anterior ele somente trará o resultado total das datas vigentes já salvas.
  Para uma futura melhoria seria o usuario enviar uma data para realizar o total do dia que citado e realizar o fechamento geral.
  
  A bling tem uma limitação de 3 request por 1 seg sendo assim ela emite um erro e depois roda outras 3 futuramente seria ideal tratar esse erro respeitando o
  limite de resquest por segundo da bling.
  
  Aceitando dicas e melhorias para futuro.
  
  
 







