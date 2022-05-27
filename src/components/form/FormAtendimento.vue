<template>
<div class="center-screen">
<div class="container-fluid">
    <!-- Container Branco Comeco-->
    <h2 style=" white-space: nowrap;" class="titulo">{{ Titulo }}</h2>
    <h5 class="subTitulo">{{ Subtitulo }}</h5>
    <div class="row">
        
        <form  @submit="$router.push('cadastro')" style="margin: 5% 0px 0px 5%;" >
            <div class="form-group">
                <label class="tituloInput" for="name">Especialidade Principal*</label>
                <select v-model="formAtend.especialidades" id="tipoConsulta" required class="form-control inputSelect" >
                    <option value="0" disabled selected>Selecione a especialidade</option>
                    <option value="Cardiologia">Cardiologia</option>
                    <option value="Dermatologia">Dermatologia</option>
                    <option value="Neurologia">Neurologia</option>
                    <option value="Oftalmologia">Oftalmologia</option>
                    <option value="Psiquiatria">Psiquiatria</option>
                    <option value="Urologia">Urologia</option>
                </select>
            </div>

            <div class="form-group">
                <label class="tituloInput" for="name">Especialidade Principal*</label>
                <div class="input-group-prepend">
                    <span style="background-color:#483698;color:#fff;font-weight:bold;" class="input-group-text">R$</span>
                    <input required type="number" style="margin-left:-10px;" v-model="formAtend.valor" id="dinheiro" class="form-control precoInput" placeholder="Valor" min="30" max="350">
                </div>   
            </div>

            
            <label class="tituloInput" for="name">Formas de pagamento da consulta*</label>
            <div class="form-group">
                
                
                <div class="box-check" >
                    <input name="check" id="checkboxPix" type="checkbox"  class="checkbox" style="margin-right:10px;" >
                    <span id="checkboxPix">Pix</span>
                </div>

                <div class="box-check" style="margin-top:15px;">
                    <input name="checkboxDinheiro" id="checkboxDinheiro" type="checkbox" class="checkbox" style="margin-right:10px;" >
                    <span >Em dinheiro</span>
                </div>

                <div class="box-check" style="margin-top:15px;">
                    <input name="check" id="checkboxCartao" type="checkbox" class="checkbox" style="margin-right:10px;" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    <span >Cartão de Crédito</span>
                    <div id="collapseExample"  class="box-check-cartao collapse">
                    <br/>
                    <span>Parcelamento em</span> <br/><br/>
                    <input name="check" id="checkbox" type="checkbox" class="checkbox" style="margin-right:10px;" >
                    <span >1x, sem juros</span> <br/><br/>
                    <input name="check" id="checkbox" type="checkbox" class="checkbox" style="margin-right:10px;" >
                    <span >2x, sem juros</span> <br/><br/>
                    <input name="check" id="checkbox" type="checkbox" class="checkbox" style="margin-right:10px;" >
                    <span >3x, sem juros</span>
                </div>
                </div>

            </div>

            <div class="row ">
                <div class="col-md-4">
                    <div class="progress" style="height: 25px;margin-top:30px;">
                        <div class="progress-bar" role="progressbar"
                         style="width: 100%;background-color: rgb(72, 54, 152);" 
                         aria-valuenow="25" aria-valuemin="0" 
                         aria-valuemax="100">
                         </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <h6 class="contagem" for="CPF">2 de 2</h6>
                </div>
            </div>
            <button type="submit" @click="save_data()" class="btn">PRÓXIMO</button>
        </form>
    <img src="../../assets/desktop-pagina-2.png" style="width:300px;height:300px;" class="rounded" >
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
                Titulo: 'Sobre o atendimento',
                Subtitulo: 'Detalhes do atendimento',
                formAtend:{
                    especialidades: '',
                    valor: '',
                    pagamento: ''
                }
                
            }
        },
         methods: {
            SubmitAtend(){
                var storeFormAtend = localStorage.setItem('FormAtend', JSON.stringify(this.formAtend))
                console.log('FormAtend', JSON.stringify(this.formAtend))
            },
            save_data() {
                var inputConsulta = document.getElementById("tipoConsulta");
                var inputDinheiro = document.getElementById("dinheiro");

                var formaPagamentoPix = document.getElementById("checkboxPix");
                var formaPagamentoDinheiro = document.getElementById("checkboxDinheiro");

                var formaPagamentoCartão = document.getElementById("checkboxCartao");
               

                localStorage.setItem("tipoConsulta", inputConsulta.value); 
                localStorage.setItem("dinheiro", inputDinheiro.value);

                localStorage.setItem("checkboxPix", formaPagamentoPix.value);
                localStorage.setItem("checkboxDinheiro", formaPagamentoDinheiro.value);
                localStorage.setItem("checkboxCartao", formaPagamentoCartão.value);
                
                
            }
        },
        };
        

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
    button{
        margin-bottom:30px;
        border-radius: 15px;
        width:400px;
        margin-top:15px;
        text-align: center;
        background-color:rgb(72, 54, 152);
        color:#fff;
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
        button{
            display:auto;
            border-radius: 15px;
            margin-left: -20px;
            width:98%;
            margin-top:15px;
            text-align: center;
            background-color:rgb(72, 54, 152);
            color:#fff;
        }
    }
</style>

