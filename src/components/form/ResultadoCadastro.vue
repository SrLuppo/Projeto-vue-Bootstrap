<template>
<div class="center-screen">
<div class="container-fluid">
    <!-- Container Branco Comeco-->
    <h2 class="titulo">{{ Titulo }}</h2>
    <div class="row">
        <div style="margin: 5% 0px 0px 10%;" >
                <div class="form-group">
                    <label class="tituloInput resultadoTitulo" for="name">Nome Completo</label>
                    <p class="tituloInput" id="nomeVolta"></p>
                    <label class="tituloInput resultadoTitulo" for="name">CPF</label>
                    <p class="tituloInput" id="cpfVolta"></p>
                    <label class="tituloInput resultadoTitulo" for="name">Número de celular ou telefone</label>
                    <p class="tituloInput" id="phone"></p>
                    <label class="tituloInput resultadoTitulo" for="name">Estado/Cidade</label>
                    <p class="tituloInput" id="estado"></p><p class="tituloInput" id="cidade"></p>
                    <label class="tituloInput resultadoTitulo" for="name">Especialidade principal</label>
                    <p class="tituloInput" id="consulta"></p>
                    <label class="tituloInput resultadoTitulo" for="name">Preço da consulta</label>
                    <p class="tituloInput" id="dinheiro"></p>
                    <!-- <label class="tituloInput resultadoTitulo" for="name">Formas de pagamento da consulta</label>
                    <p class="tituloInput" id="pagamento"></p> -->
            </div>

            <a type="submit" class="buttonCadastro btn" href="/">CADASTRAR PROFISSIONAL</a><br/>
            <a style="font-family: 'Comfortaa', cursive;color:#483698;" @click="$router.push('/')" >Editar cadastro</a>
        </div>
    <img src="../../assets/desktop-pagina-3.png" style="width:400px;height:400px;"  class="rounded" >
    </div>
       <!-- Container Branco Final-->
</div>
</div>
</template>

<script>


    export default{
        name: 'FormAtendimento',
        data() {
            return{        
                Titulo: 'Revisão do Cadastro'
            }
        },
        mounted(){

            document.getElementById('nomeVolta').innerHTML = localStorage.getItem("name");
            document.getElementById('cpfVolta').innerHTML = localStorage.getItem("CPF");
            document.getElementById('phone').innerHTML = localStorage.getItem("phone");
            document.getElementById('estado').innerHTML = localStorage.getItem("select1");
            document.getElementById('cidade').innerHTML = localStorage.getItem("select2");
            document.getElementById('consulta').innerHTML = localStorage.getItem("tipoConsulta");
            document.getElementById('dinheiro').innerHTML = localStorage.getItem("dinheiro");

            if(localStorage.getItem("checkboxPix") == 'on'){
                document.getElementById('pagamento').innerHTML = 'Pix';
            }
            if(localStorage.getItem("checkboxDinheiro") == 'on'){
                document.getElementById('pagamento').innerHTML = 'Dinheiro';
            }
            if(localStorage.getItem("checkboxCartao") == 'on'){
                document.getElementById('pagamento').innerHTML = 'Cartão de Crédito';
            }
            
        }
    }
        


</script>

<style scoped>

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
    .tituloInput{
        max-width: 300px;
        min-width: 100px;
        display: flex;
    }
    .inputName{
        width: 400px;
    }
    .precoInput{
        width: 210px;
    }
    
    .resultadoTitulo{
        font-weight:bold;
    }
    input, select{
        border-color: #483698;
    }

    input:focus, select:focus{
        border-color: #483698;  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(72, 54, 152, 0.6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(72, 54, 152, 0.6);
    }

    h6{
        font-family: 'Comfortaa', cursive;
        color:#483698;
    }
    .formTotal{
        margin-left:4%;
    }
    .buttonCadastro{
        margin-bottom:30px;
        border-radius: 15px;
        width:400px;
        margin-top:15px;
        text-align: center;
        background-color:#FBDE40;
        color:#000;
        font-family: 'Comfortaa', cursive;
    }
    .progress{
        width:300px;
    }
    .contagem{
        margin-top:30px;
        font-size:20px;
        margin-right:-300px;
    }
    .box-check{
        width: 300px;
        font-family: 'Open Sans', sans-serif;
        height:auto;
        background-color: #F9F9F9;
        border-radius: 10px;
        box-shadow:  3px 3px 2px rgba(0, 0, 0, 0.09)
    }
    .box-check-cartao{
        width: 300px;
        font-family: 'Open Sans', sans-serif;
        height:auto;
        background-color: #F9F9F9;
        box-shadow:  3px 3px 2px rgba(0, 0, 0, 0.09)
    }
    .checkbox{filter: hue-rotate(30deg)}


    /* Escondendo as flechinhas do Input Number  */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance:textfield; /* Firefox */
    }

    /* Deixando Responsivo  */
    @media (max-width: 600px)
    {
        .container-fluid{
          border-radius: 0px;
          border-top-left-radius: 60px;
          border-top-right-radius: 60px;
          margin-top:80px;
          max-width: 100%;
          height: 92vh;
          overflow-x: hidden;
        }
        .inputName{
            width: 90%;
        }
        .inputSelect{
            width: 150px;
        }
        .inputNumber{
            width: 70%;
        }
        img{
            display: none;
        }
        .progress{
            width: 250px;
        }
        .contagem{
            margin-top:-25px;
            font-size:20px;
        }
        .buttonCadastro{
            display:auto;
            border-radius: 30px;
            white-space: nowrap;
            width:300px;
            margin-top:10px;
            text-align: center;

        }
    }
</style>

