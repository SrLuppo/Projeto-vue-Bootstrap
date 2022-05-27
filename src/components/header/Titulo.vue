<template>

</template>

<script>
export default{
    name: 'Titulo'
}
</script>
<style>
    .titulo{
        display: flex;
        color: #483698;
        font-size: 35px;
        margin: 5% 0px 0px 5%;
        font-family: 'Comfortaa', cursive;
        font-weight:800;
    }
    @media (max-width: 600px)
    {
        .titulo{
            font-size:30px;
            margin-top: 60px;
        }
    }
</style>
