import { StyleSheet, Text, View, Image } from "react-native";
import { styles1,viewsChilds } from '../assets/styles/myStyles';
//const Banner = () =>{}, export default function, otra manera de escribir la funcion de abajo
const Banner = (props) =>{
    return(
        <View style={[viewsChilds.views,styles1.alignViews,{flex:1,backgroundColor:'#F0F0F0'}]}>
          {/* <Text>{props.title}</Text>
          <Text>{props.subtitle}</Text> */}
          <Image source={require(`../assets/images/${props.img}`)}
                style={{width:'100%',height:'100%', resizeMode:'stretch', borderRadius:10}}
            />
            
        </View>
    );
}

export default Banner;

