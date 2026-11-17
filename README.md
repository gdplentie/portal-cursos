# Tarefa de Aplicativos Web  

* Pedro Vitor Santos de Oliveira *

** Para executar: **  
git clone git@github.com:gdplentie/portal-cursos.git  
cd portal-cursos  
npm install  
npm run dev  
  
A navegação foi implementada usando a biblioteca "react-router", que permite simular múltiplas páginas numa só  
A validação foi feita através da função validar() em App.jsx, que checa diretamente os valores que os inputs (e o select) armazenaram, para ver se eles estão batendo ou não com os requisitos. Se der certo, ele exibe a mensagem de sucesso e permite o formulário a ser enviado, caso contrário ele impede a página de enviar, explicando onde deu errado