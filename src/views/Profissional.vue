<template>
    <div>
      
        <Titulo/>
        <Subtitulo/>
        <FormProfissional/>
    </div>
</template>

<script>
    import Titulo from '../components/header/Titulo.vue'
    import Subtitulo from '../components/header/Subtitulo.vue'
    import FormProfissional from '../components/form/FormProfissional.vue'

    export default {
        name: 'Profissional',
        components: {
            Titulo,
            Subtitulo,
            FormProfissional
        }
    }
</script>
