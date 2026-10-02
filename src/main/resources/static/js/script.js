document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const pedidos = document.querySelectorAll('a[href="#pedidos"]');

    pedidos.forEach(pedido => {
        pedido.addEventListener("click", function () {
            const secao = document.querySelector("#pedidos");

            if (secao) {
                secao.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    const botoes = document.querySelectorAll(".card .btn");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            const produto = this.closest(".card").querySelector(".card-title");

            if (produto) {
                console.log("Produto selecionado: " + produto.textContent);
            }
        });
    });

    const parametros = new URLSearchParams(window.location.search);
    const produtoSelecionado = parametros.get("produto");

    const selectProduto = document.getElementById("produto");
    const produtoResumo = document.getElementById("produtoResumo");

    if (produtoSelecionado && selectProduto) {
        selectProduto.value = produtoSelecionado;
    }

    if (produtoSelecionado && produtoResumo) {
        produtoResumo.textContent = produtoSelecionado;
    }

    if (selectProduto && produtoResumo) {
        selectProduto.addEventListener("change", function () {
            produtoResumo.textContent = this.value || "Nenhum produto selecionado";
        });
    }

});