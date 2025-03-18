Amigo Secreto

Este é um aplicativo web simples para organizar e sortear amigos secretos. Ele permite adicionar nomes de amigos, atualizar a lista de amigos e sortear um amigo aleatoriamente para a troca de presentes.
Funcionalidades
Adicionar Amigos

    Capturar o valor do campo de entrada: Utiliza document.getElementById ou document.querySelector para obter o texto inserido pelo usuário no campo de entrada.

    Validar a entrada: Verifica se o campo de entrada não está vazio. Se estiver, exibe um alerta com a mensagem "Por favor, insira um nome."

    Atualizar o array de amigos: Se a entrada for válida, adiciona o nome ao array amigos usando o método .push().

    Limpar o campo de entrada: Após adicionar o nome, o campo de texto é limpo para permitir a inserção de novos nomes.

Atualizar Lista de Amigos

    Obter o elemento da lista: Utiliza document.getElementById ou document.querySelector para selecionar a lista HTML onde os nomes dos amigos serão exibidos.

    Limpar a lista existente: Define lista.innerHTML = "" para garantir que não haja duplicatas ao atualizar a lista.

    Iterar sobre o array: Usa um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.

    Adicionar elementos à lista: Para cada amigo, cria um novo elemento de lista e o adiciona à lista HTML.

Sortear Amigos

    Validar que há amigos disponíveis: Verifica se o array amigos não está vazio antes de realizar o sorteio.

    Gerar um índice aleatório: Utiliza Math.random() e Math.floor() para selecionar um índice aleatório do array amigos.

    Obter o nome sorteado: Usa o índice aleatório para acessar o nome correspondente no array.

    Mostrar o resultado: Atualiza o conteúdo do elemento de resultado com o nome do amigo sorteado usando document.getElementById e innerHTML.

Uso

    Adicionar Amigos:

        Insira o nome do amigo no campo de entrada.

        Clique no botão "Adicionar" para adicionar o nome à lista de amigos.

    Atualizar Lista de Amigos:

        A lista de amigos é atualizada automaticamente após adicionar um novo amigo.

    Sortear Amigos:

        Clique no botão "Sortear amigo" para realizar o sorteio aleatório de um amigo da lista.

Estrutura do Projeto

    index.html: Contém a estrutura HTML da página web, incluindo os elementos de entrada, botões e a lista de amigos.

    app.js: Contém a lógica JavaScript para adicionar amigos, atualizar a lista e sortear amigos.

    style.css: Define os estilos CSS para a interface do usuário, garantindo uma apresentação visual agradável e funcional.

Notas

    Este aplicativo é projetado para ser simples e direto, ideal para eventos de troca de presentes entre amigos ou familiares.

    Não há necessidade de registro ou login, tornando-o fácil de usar em qualquer dispositivo com acesso à internet.

    A funcionalidade de exclusão de pares (para evitar que casais se presenteiem) não foi implementada, mas pode ser adicionada em futuras atualizações.

Contribuições

Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Fork este repositório, faça suas alterações e envie um pull request.
Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Este README fornece uma visão geral clara e concisa das funcionalidades e do uso do aplicativo Amigo Secreto, ajudando os usuários a entender como ele funciona e como podem utilizá-lo para organizar suas trocas de presentes.
