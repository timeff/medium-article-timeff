<script>
    import Sword from './composition-sword.js'
    import Cloth from './composition-cloth.js'
    export default {
        name: 'JongSnow',
        mixins:[Sword,Cloth],
        data(){
            return{
                title:'Kim of the north',
                surname:'Snow'
            }
        }
    }
</script>