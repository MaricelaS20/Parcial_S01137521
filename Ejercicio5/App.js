const { createApp, ref } = Vue;

createApp({
    setup() {
        // Estado para controlar las tareas existentes y la tarea que se añadirá
        const tareas = ref([]);
        const nuevaTarea = ref('');

        // Esta función es para agregar una nueva tarea a la lista
        function agregarTarea() {
            if (nuevaTarea.value.trim()) {
                tareas.value.push(nuevaTarea.value.trim());
                nuevaTarea.value = ''; // Limpia el campo de entrada
            }
        }

        // Esta función es para eliminar una tarea de la lista por su índice
        function eliminarTarea(index) {
            tareas.value.splice(index, 1);
        }

        return {
            tareas,
            nuevaTarea,
            agregarTarea,
            eliminarTarea
        };
    }
}).mount('#app');
