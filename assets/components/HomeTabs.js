import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Customer from "./Customer";
import ListCustomers from "./ListCustomers";
import {MaterialIcons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function HomeTabs(){

    return(
        <Tab.Navigator
                screenOptions={{
                headersShow:false,
                tabBarActiveBackgroundColor:'orange'    
            }}
        >
            <Tab.Screen
            name="Customer"
            component={Customer}
            options={{title: 'Clientes',
                    tabBarIcon:({color,size}) => (<MaterialIcons name="person" color="white" size={25}/>)
                }}
            />
            <Tab.Screen
             name="ListCustomers"
             component={ListCustomers} 
             options={{title: 'Listado Clientes',
                 tabBarIcon:({color,size}) => (<MaterialIcons name="view-list" color="blue" size={25}/>)

            }}  
            />
        </Tab.Navigator>
    )
}