<script>
    export default {
        name: 'Dragon',
        props: {
            parent: {
                type: String,
                default: 'Daenerys Targaryen'
            },
        },
        data() {
            return {
                inhabitantSpace: 100,
            };
        },
        computed: {
            size() {
                return this.inhabitantSpace * 2
            }
        },
        methods: {
            dracarys() {
                console.log('Breathe Fire!!!')
            },
            roar() {
                console.log('Argggggg!!!')
            }
        }
    }
</script>