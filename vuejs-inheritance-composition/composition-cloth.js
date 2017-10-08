
export default {
    data(){
      return {
        suitColor:'black',
        suitThickness:5
      }
    },
    computed:{
      heatGenerate(){
          return this.suitThickness*3
      }
    }
  }
  