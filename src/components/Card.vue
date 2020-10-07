<template>
  <div class=" w-1/6 border-2 bg-teal-100 border-pink-500 rounded-lg flex flex-wrap justify-center items-center shadow-2xl cursor-pointer" :class="{'pointer-events-none': !this.item.bloqueo,hidden: !this.inicio}" v-on:click="true ? click(item) : clicko()">
        
            
            <div class="cartas cursor-pointer flex flex-col justify-around p-2 rounded-lg" >
                <div class="flex justify-around my-1">
                    <h2 :class="{hidden: !item.cara}" class=" text-red-500 font-bold">{{this.item.name}}</h2>
                    <h2 :class="{hidden: !item.cara}" class=" text-blue-500">Point: <span class=" text-red-500 font-bold">{{this.item.point}}</span></h2>
                </div>
                <div class=" flex justify-center">
                    <img class="carta border-red-400" :src="item.src" :alt="this.item.name"  :class="{hidden: !item.cara}">
                </div>
            </div>
        
  </div>
</template>

<style >
.cartas{
    min-height: 208px !important;
    min-width: 160px !important;
}
.carta{
    max-height: 160px;
    max-width: 160px;
}
</style>

<script>
import {mapActions, mapState, mapMutations} from 'vuex';
export default {
    name:'card',
    data() {
        return {
            isHidden: true,
        }
    },
    props:['item'],
    created(){
        //console.log('item', this.items)
    },
    methods:{
        ...mapActions(['elegirCarta','seleccionarCartas','vaciarCartas','eliminarCartas','actualizarBlock']),
        ...mapMutations(['suma']),
        click(item){
            let count = this.cartas.length > 1? 0 : this.cartas.length;
            this.elegirCarta(item.id);
            let carta = {
                
                id: item.id,
                count,
                name: item.name,
                point: item.point
            }
            
            this.seleccionarCartas(carta);
             this.verdaderos(carta);
            
        },
         verdaderos(carta){
            if(this.cartas.length== 2){
                if(this.cartas[0].name == this.cartas[1].name && this.cartas[0].id !== this.cartas[1].id){
                    
                    
                    let ax = this.cartas;
                    setTimeout(() => {
                        console.log('son iguales');
                        this.block = false;
                        this.actualizarBlock(ax[0].id);
                        this.actualizarBlock(ax[1].id);
                    }, 3000);
                    this.alert('success','Son iguales, éxito')
                    console.log('ponit',this.cartas[0].point)
                    this.suma(this.cartas[0].point)
                    this.eliminarCartas();
                    
                }else{
                    let ax = this.cartas;
                    //console.log(ax)
                    setTimeout(() => {
                        console.log('no son iguales')
                        this.elegirCarta(ax[0].id);
                        this.elegirCarta(ax[1].id);
                    }, 3000);
                    this.suma(-10)
                    this.eliminarCartas();
                    this.alert('error',`Son diferentes, una pena miahne. Puntos: ${this.puntos}`)
                }
                
            }
            
        },
        clicko(){
            console.log('bloqueado')
        },
        alert(icon,mensaje){
            const Toast = this.$swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            Toast.fire({
                icon: icon,
                title: mensaje
            });
        }
    },
    computed:{
        ...mapState(['items','cartas','inicio','puntos']),
    }
}
</script>

<style>
.card-image{
    min-height: 160px;
    min-width: 160px;
    
}
</style>