<template>
    <div class="flex justify-around">
        <div>
            <h2>Contador</h2>
            <div class="flex mx-auto w-32 justify-center border">
                <p class="text-2xl mx-1">{{ minutos }} </p>
                <p class="text-2xl mx-1">:</p>
                <p class="text-2xl mx-1">{{ segundos }}</p>
            
            </div>
        </div>
        <div>
            <button @click="iniciar" class="px-4 py-2 bg-blue-500 text-white rounded uppercase my-4">Iniciar</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    
    data() {
        return {
            minutos: '05',
            segundos: '00'
        }
    },
    watch: {
        //minutos
    },
    computed:{
        ...mapState(['inicio','final'])
    },
    methods:{
        ...mapMutations(['setInicio','setFinal']),
        iniciar(){
                this.setInicio(true);
                let   t = new Date(); //Tiempo despues de 5 minutos
                t.setMinutes(t.getMinutes()+5);
                //console.log(t);
                //console.log('futuro',t);
                
            setInterval(() => {
                let now = new Date(),
                remainTime = (t - now + 1000)/ 1000,reaminSeconds,reaminMinutes;
                this.segundos = reaminSeconds = ('0' + Math.floor(remainTime % 60 )).slice(-2),
                this.minutos = reaminMinutes = ('0' + Math.floor(remainTime / 60 % 60 )).slice(-2);
                console.log('seconds', remainTime);
                if(remainTime <= 0 ){
                    this.setInicio(false);
                    this.segundos = '00';
                    this.minutos = '00'
                }
            }, 1000);
            console.log('Holi')
        }
    }
    
}
</script>