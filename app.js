function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga a seção no console para verificação

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado!"
        return
    }
     
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa a string que armazenará os resultados
    let resultados = "";
    let titulo =  "";
    let descricao = "";

    // Itera sobre cada dado da lista (laço de repetição)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Constrói o HTML para cada item do resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="Desktop/imersao_alura_gemini/planner_1_km.pdf" download="planner_1_km.pdf">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Quer saber mais sobre Corrida?</a>
            </div>
        `;
        }
        console.log(dado.titulo.includes(campoPesquisa))
        
    }

    // Atribui os resultados construídos à seção
    section.innerHTML = resultados;
}


