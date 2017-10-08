<script>
    import Dragon from './inheritant-parent'
    export default {
        name: 'StupidDragonDiedBecauseOfNightKing',
        extends: {
            props: {
                ...Dragon.props,
            },
            data() {
                return {
                    ...Dragon.data(),
                }
            },
            computed: {
                ...Dragon.computed,
            },
            methods: {
                ...Dragon.methods,
            }
        },
        methods:{
            destroyTheWall(){
                console.log('Go to the wall')
                this.dracarys()
            }
        }
    }
</script>