import { View, Text, FlatList } from "react-native";
import { Button } from "react-native-paper";
import { styles } from '../styles/styles';
import axios from "axios";
import { useEffect, useState } from "react";


export default function ListCustomers(){
    const [data, setData] = useState([])

    const getCustomers = async() => {
        const response = await axios.get(`http://127.0.0.1:3000/api/clientes/`)
        setData(response.data)
    }

    useEffect(()=>{
      getCustomers();
       //console.log(data);
      
    })
    
    return(
             <View style={styles.container}>
                <Text>Listado de Clientes</Text>

                <Button
                    style={{ backgroundColor: "gray", marginLeft: 10, marginBottom:10 }}
                    icon="account-credit-card-outline"
                    mode="contained"
                    onPress={getCustomers}
                    >
                    Listar clientes     
                </Button>
                <FlatList
                    data={data}
                    renderItem={({item}) => 
                    <Text style={{backgroundColor:'gray', borderRadius:10, padding:10, textAlign:'center',marginTop:5}}>
                        {item.nombre} {item.apellidos}
                    </Text>
                    }      
                />
             </View>

    )
}