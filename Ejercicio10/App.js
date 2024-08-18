const { createApp, ref, watch, computed } = Vue;

createApp({
    setup() {
        // Aqui se muestra la variable que se observa
        const valor = ref('');

        // Esta propiedad computada es para generar el mensaje basado en el valor
        const mensaje = computed(() => {
            return `El valor ha cambiado a: ${valor.value}`;
        });

        // Observar cambios en la variable `valor`
        watch(valor, (nuevoValor, valorAnterior) => {
            console.log(`Valor cambiado de "${valorAnterior}" a "${nuevoValor}"`);
        });

        return {
            valor,
            mensaje
        };
    }
}).mount('#app');
