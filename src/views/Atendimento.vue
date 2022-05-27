<template>
    <div>
        <GoBack/>
        <Titulo/>
        <Subtitulo/>
        <FormAtendimento/>
    </div>
</template>

<script>
    import Titulo from '../components/header/Titulo.vue'
    import Subtitulo from '../components/header/Subtitulo.vue'
    import FormAtendimento from '../components/form/FormAtendimento.vue'
    import GoBack from '../components/button/GoBack.vue'

    export default {
        name: 'Atendimento',
        components: {
            Titulo,
            Subtitulo,
            FormAtendimento,
            GoBack
        }
    }
</script>