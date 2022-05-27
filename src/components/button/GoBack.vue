<template>
    <div class="goBack">
        <a @click="goBack"> 
            <img src="../../assets/goBack.png" style="width:25px;height:25px;" class="rounded " >
        </a>
    </div>
</template>

<script>

export default {
    name: 'GoBack',
    methods: {
        goBack(){
            return this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .goBack{
        margin-left:300px;
    }
    .goBack:hover{
        cursor: pointer;

    }
    @media (max-width: 600px){
    .goBack{
        margin: 20px 0px -20px 20px;
    }
    }
</style>