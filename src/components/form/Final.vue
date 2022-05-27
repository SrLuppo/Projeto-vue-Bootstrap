<template>
<div class="center-screen">
    <div class="container-fluid">
        <div class="container">
            <img src="https://cdn-icons-png.flaticon.com/512/4861/4861675.png" alt="médica" class="imgMedica">
        </div>
        <h1 class="titulo">Obrigado por se cadastrar</h1>
        <h2 class="subtitulo">Em breve você receberá seus agendamentos de consulta no telefone cadastrado!</h2>
        
    </div>
</div>
   
</template>



<style scoped>
.container {
    padding-top: 10px;
}
.container-fluid{
        background-color:#fff;
        height: auto;
        width: 900px;
        border-radius: 20px;
        box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
    }
    .center-screen {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;
    }
    .titulo {
        text-align: center;
        margin-left: 20%;
        margin-right: 20%;
    }
    .subtitulo {
        text-align: center;
    }

.imgMedicacontainer {
    height: 20em;
    position: center;
    margin-left: 350px;
}
@media only screen and (min-width: 320px) and (max-width: 390px) {
    .imgMedica {
        height: 17em;
    }

    .subtitulo {
        text-align: center;
    }
}

@media only screen and (min-width: 450px) and (max-width: 500px) {
    .imgMedica {
        height: 22em;
    }

    .subtitulo {
        text-align: center;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
    .container {
        width: 40vh;
        text-align: center;
    }

    .subtitulo {
        text-align: center;
    }
    
}
</style>