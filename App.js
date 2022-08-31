import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Banner from './components/Banner'
import { styles1,viewsChilds } from './assets/styles/myStyles';
//const App = () => {
export default function App(){
  //Defición de estados con sus respectivos metodos de actualización
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');
  //Metodos
  let calcular  = (oper) =>{
    //Actualice el estado resultado, a traves de su metodo de actualización
    let miResultado = 0;
    switch (oper) {
      case "+":
        miResultado = (parseFloat(valor1) + parseFloat(valor2))
          break;
      case "-":
          miResultado = (parseFloat(valor1) - parseFloat(valor2))
          break;
      case "*":
            miResultado = (parseFloat(valor1) * parseFloat(valor2))
          break;
      case "/":
              miResultado = (parseFloat(valor1) / parseFloat(valor2))
          break;
    }
    setResultado(miResultado);
  }
 
  return (
    <View style={[styles1.container,styles1.alignViews,{borderRadius:10,flexDirection: 'column'}]}>
      <Banner img="cal.jpg"></Banner>
      {/* <View style={[viewsChilds.views,styles1.alignViews,{flex:4, backgroundColor:'#E3CCF9'}]}>
        <Text>Barra De Navegacion</Text>
      </View> */}
      <View style={[viewsChilds.views,styles1.alignViews,{flex:5,backgroundColor:'gray',marginBottom:10}]}>
          <Text>Valor 1</Text>
          <TextInput
            placeholder='Ingrese valor 1'
            style={{fontSize:20, borderWidth:2, borderColor:'red',padding:10, textAlign:'center',borderRadius:10}}
            keyboardType={Number}
            onChangeText={valor1 => setValor1(valor1)}
            value={valor1}
            autoFocus
          />
          <Text>Valor 2</Text>
          <TextInput
            placeholder='Ingrese valor 2'
            style={{fontSize:20, borderWidth:2, borderColor:'red',padding:10, textAlign:'center',borderRadius:5}}
            keyboardType={Number}
            onChangeText={valor2 => setValor2(valor2)}
            value={valor2}
          />
          <Text>Resultado</Text>
          <Text>{parseFloat(resultado).toFixed(1)}</Text>
          <Text>{'\n'}</Text>
          <Button
            title='Sumar'
            onPress={()=>calcular("+")}
          />
          <Text>{'\n'}</Text>
          <Button
            title='Restar'
            onPress={()=>calcular("-")}
          />
          <Text>{'\n'}</Text>
          <Button
            title='Multiplicar'
            onPress={()=>calcular("*")}
          />
          <Text>{'\n'}</Text>
          <Button
            title='Dividir'
            onPress={()=>calcular("/")}
          />

      </View>
      {/* <View style={[viewsChilds.views,styles1.alignViews,{flex:1,backgroundColor:'pink',marginBottom:10}]}>
          <Text>Footer</Text>
      </View> */}
    </View>
  );
}

/* const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75B7F8'
  },
  texts:{
    fontSize:18,
    fontWeight: 'bold',
    color:'red'
  },
  alignViews: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}); */


//export default App;
