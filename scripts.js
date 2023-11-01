//Precio de los jugos

const jugos = {
    precio:2000
}


//descuentos
const descuentos = {
    tropicales: 0.15,
    premium: 0.10,
    saludable: 0.20
}


//Agarramos los elementos de la pagina para tomar sus propiedades y poder interactuar con ellos.
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');



//LA CANTIDAD.VALUE SIRVE PARA AGARRAR LA CANTIDAD DE QUE QUIERES COMPRAR
//LA CATEGORIA.VALUE SIRVE PARA AGARRAR QUE TIPO DE JUGOS QUIERES Y APLICAR EL DESCUENTO.

function calcularPago() {
    total = cantidad.value * jugos.precio;

    switch (categoria.value) {
        case "jugosTropicales":
            total = total - (total * descuentos.tropicales)
            break;

        case "naranjaPremium":
            total = total - (total * descuentos.premium)

            break;

        case "detoxSaludable":
            total = total - (total * descuentos.saludable)

            break;

        default:
            total = alert("Seleccione un tipo")
            break;
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;

}


//Para sacar la funcion predeterminada de la pagina de recargarse cuando se apreta un boton.
btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();
});


