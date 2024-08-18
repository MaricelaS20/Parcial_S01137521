const { createApp, ref } = Vue;

createApp({
    setup() {
        // Aqui cambian los números y el resultado
        const numero1 = ref(0);
        const numero2 = ref(0);
        const resultado = ref(null);

        // esta función es para para realizar una operación matemática
        function realizarOperacion(operacion) {
            switch (operacion) {
                case '+':
                    resultado.value = numero1.value + numero2.value;
                    break;
                case '-':
                    resultado.value = numero1.value - numero2.value;
                    break;
                case '*':
                    resultado.value = numero1.value * numero2.value;
                    break;
                case '/':
                    if (numero2.value === 0) {
                        alert("No se puede dividir por cero.");
                        resultado.value = null;
                    } else {
                        resultado.value = numero1.value / numero2.value;
                    }
                    break;
                default:
                    resultado.value = null;
            }
        }

        return {
            numero1,
            numero2,
            resultado,
            realizarOperacion
        };
    }
}).mount('#app');
