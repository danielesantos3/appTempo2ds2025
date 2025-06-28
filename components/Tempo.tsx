import {View, Text, StyleSheet} from 'react-native';

 interface propsTempo{
        date:string,
        max:number,
        min:number,
        description:string,
        condition:string
    }

export default function Tempo({date, max, min, description, condition } : propsTempo){

    return(
        <View style={styles.principal}>
                <Text style={styles.texto}>Previsão para o dia: {date}</Text>
                <Text style={styles.texto}>Máx: {max}</Text>
                <Text style={styles.texto}>Mín: {min}</Text>
                <Text style={styles.texto}>Descrição: {description}</Text>
                <Text style={styles.texto}>Cond: {condition}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    principal:{
        width:'80%',
        borderWidth:2,
        borderRadius:30,
        padding:20,
        margin:20
    },
    texto:{
        fontSize:20
    }
});