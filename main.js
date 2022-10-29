  const { createApp } = Vue

createApp({
    data() {
        return {
            url:"./datos/subtipos.json",
            datos:[],
            opcion:"Nuevo",
            inputDesc:"",
            botonGral:"Agregar"
        }
    },
    methods: {
        btnGeneral(){
            if (this.opcion=="Nuevo" && this.datos.find(elemento => elemento.descripcion==this.inputDesc)==undefined && this.inputDesc!=""){
                alert("Agregar " + this.inputDesc)
            }else if(this.inputDesc!="" && this.opcion!="Nuevo"){
                if(this.opcion==this.inputDesc){
                    alert("No hay cambios a realizar.")
                }else{
                    alert(`Modificar ${this.opcion} con ${this.inputDesc}`)
                }
            }
            this.opcion="Nuevo"
            this.inputDesc=""
            this.botonGral="Agregar"
        },
        cambiarDesc(){
            if (this.opcion!="Nuevo"){
                this.botonGral="Modificar"
                this.inputDesc = this.opcion
            }else{
                this.botonGral="Agregar"
                this.inputDesc=""
            }
        },
        borrarClick(event){
            targetID=event.currentTarget.id;
            alert("borrar " + this.datos[targetID-1].descripcion)
        },
        editarClick(event){
            targetID=event.currentTarget.id;
            this.botonGral="Modificar"
            this.inputDesc = this.datos[targetID-1].descripcion;
            this.opcion=this.inputDesc
        },
        fetchData(url) {
            fetch(url)
            .then(response => response.json())
            .then(data => this.datos=data)
        }
    },
    created() {
        this.fetchData(this.url)
    }


}).mount('#app')