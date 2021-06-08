function desdobrar() {
    for (let i = 1; i <= 12; i++) {
        let valor = $("#pos_" + i).val();
        $(".casa_" + i).val(valor);
        console.log(
            `Entrou no for com i valendo ${i}, pegou o id pos_${i} com valor ${valor} e passou para as classes casa_${i}.`
          );
    }
}