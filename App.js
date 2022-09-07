import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles1,viewsChilds } from './assets/styles/myStyles';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: '12 Cuotas',
  value: '12cuotas'
}, {
  id: '2',
  label: '36 Cuotas',
  value: '36cuotas'
}]


const YourApp = () => {

  const [Nombre, setNombre] = useState('');
  const [Mprestamo, setMprestamo] = useState('');
  const [Ncuotas, setNcuotas] = useState('');
  const [Vcuota, setVcuota] = useState('');
  const [Fecha, setFecha] = useState('');
  const [TipoPrestamo, setTipoPrestamo] = useState('');
  const [Total, setTotal] = useState('');
  const [radioButtons, setRadioButtons] = useState(radioButtonsData)
  const [Opcion, setOpcion] = useState('');

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    for(let btn of radioButtonsArray){
      if (btn.selected == true) {
        setOpcion(btn.value);
      }
    }
  }

  function Limpiar() {
    setNombre("");
    setMprestamo("");
    setNcuotas("");
    setVcuota("");
    setFecha("");
    setTipoPrestamo("");
    setTotal("");
    setOpcion("");
    for(let btn of radioButtonsData){
      delete btn.selected;
    }
    setRadioButtons(radioButtonsData)
  }
  return (
    <View style={[styles1.container,styles1.alignViews,{borderRadius:10,flexDirection: 'column'}]}>
     <View>
          <Text>Nombre</Text>
          <TextInput
            placeholder='Ingrese su nombre'
            style={{fontSize:20, borderWidth:2, borderColor:'#FF5C39',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Nombre => setNombre(Nombre)}
            value={Nombre}
            autoFocus
          />
          <Text>{'\n'}</Text>
          <Text>Monto Prestamo</Text>
          <TextInput
            placeholder='Ingrese valor del monto'
            style={{fontSize:20, borderWidth:2, borderColor:'#FF5C39',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Mprestamo => setMprestamo(Mprestamo)}
            value={Mprestamo}
          />
          <Text>{'\n'}</Text>
          <Text>Numero de cuotas</Text>
           <TextInput keyboardType="numeric"
            placeholder='Ingrese numero de cuotas'
            style={{fontSize:20, borderWidth:2, borderColor:'#FF5C39',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Ncuotas => setNcuotas(Ncuotas)}
            value={Ncuotas}
            /> 
          <Text>{'\n'}</Text>
          <Text>valor de cuota</Text>
          <TextInput
            placeholder='Ingrese el valor cuota'
            style={{fontSize:20, borderWidth:2, borderColor:'#FF5C39',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Vcuota => setVcuota(Vcuota)}
            value={Vcuota}
          />
          <Text>{'\n'}</Text>
          <Text>Fecha</Text>
          <TextInput
            placeholder='Digite la fecha'
            style={{fontSize:20, borderWidth:2, borderColor:'#FF5C39',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Fecha => setFecha(Fecha)}
            value={Fecha}
          />
          <Text>{'\n'}</Text>
          <Text>Tipo de prestamo</Text>
          <TextInput
            /* placeholder='Ingrese tipo de prestamo'
            style={{fontSize:20, borderWidth:2, borderColor:'#FF5C39',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={TipoPrestamo => setTipoPrestamo(TipoPrestamo)}
            value={TipoPrestamo} */
          />
          <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
            />
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Text>Total deuda</Text>
          <TextInput
            placeholder='El valor total es:'
            style={{fontSize:20, borderWidth:2, borderColor:'#FF5C39',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Total => setTotal(Total)}
            value={Total}
            
          />
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Button
            title='Calcular'
            onPress={()=>calcular("+")}
          />
          <Text>{'\n'}</Text>
          <Button
            title='Buscar'
            onPress={()=>calcular("-")}
          />
          <Text>{'\n'}</Text>
          <Button
            title='Limpiar'
            onPress={()=>Limpiar()}
          />
      </View>

      </View>
  );
}

export default YourApp;