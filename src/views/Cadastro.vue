<template>
    <div>
        <GoBack/>
        <Titulo/>
        <ResultadoCadastro/>
    </div>
</template>

<script>
    import Titulo from '../components/header/Titulo.vue'
    import ResultadoCadastro from '../components/form/ResultadoCadastro.vue'
    import GoBack from '../components/button/GoBack.vue'

    export default {
        name: 'Cadastro',
        components: {
            Titulo,
            ResultadoCadastro,
            GoBack
        }
    }
</script>