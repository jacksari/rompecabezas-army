<template>
  <div class="home">
    <div class="container mx-auto">
      <div class="flex border items-center">
        <Counter class="w-2/3"/>
        <div class="w-1/3 border text-2xl">
          Puntos: {{ this.puntos }}
        </div>
      </div>
      <div class=" flex my-10">
        <img class=" h-20 border mx-auto" alt="Vue logo" src="../assets/img/logo.png">
        <img class=" h-20 border mx-auto" alt="Vue logo" src="../assets/img/logo2.png">
        <img class=" h-20 border mx-auto" alt="Vue logo" src="../assets/img/logo3.png">
      </div>
      
      <div class="flex flex-wrap gap-3 my-4 justify-around">
      
          <Card v-for="item in items" :key="item.id" :item="item"/>
        
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Card from '../components/Card';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components:{
    Card,
    Footer,
    Counter
  },
  created(){
    this.getItems();
    this.getTiempo()
  },
  computed:{
    ...mapState(['items','minutes','inicio','final','puntos']),
  },
  methods: {
    ...mapActions(['getItems']),
    getTiempo(){
      let   t = new Date();
      t.setMinutes(t.getMinutes()+5)
      //console.log(t);
      let now = new Date(),
          remainTime = (t - now + 1000)/ 1000,
          reaminSeconds = ('0' + Math.floor(remainTime % 60 )).slice(-2),
          reaminMinutes = ('0' + Math.floor(remainTime / 60 % 60 )).slice(-2);


     // console.log(now);
      //console.log(t);
      //console.log(reaminSeconds);
      //console.log(reaminMinutes);
      //console.log(remainTime)
    }
  },
  
}
</script>
 