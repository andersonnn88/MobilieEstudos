const versao = "anteriores";
// Versões anteriores criava compenent baseados em class
class TextoInicial  extends Component {
    render(){
        return (
            <Text>Texto</Text>
        )
    }
}
// podemos criar Componente baseados em "const"
const Textinit = () => {
    return (
        <Text>Component</Text>
    )
}
// podemos criar baseados em função
 function TextoInicall() {
     return (
         <Text>Component</Text>
     )
 }
 // podemos reduzir uma função
 const TextoIn = ()=> <Text>Component</Text>;
