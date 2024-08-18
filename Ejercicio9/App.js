const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        //  Aqui se coloca el nombre y apellido
        const nombre = ref('');
        const apellido = ref('');

        // Propiedad computada para obtener el nombre mas el apellid completo y mostrarlo.
        const nombreCompleto = computed(() => {
            return `${nombre.value} ${apellido.value}`.trim();
        });

        return {
            nombre,
            apellido,
            nombreCompleto
        };
    }
}).mount('#app');
