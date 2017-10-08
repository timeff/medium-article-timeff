<script>
    import Sword from './composition-sword.js'
    import Cloth from './composition-cloth.js'
    export default {
        name: 'JonSnow',
        mixins:[Sword,Cloth],
        data(){
            return{
                title:'King of the north',
                surname:'Snow'
            }
        }
    }
</script>