import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button,FlatList } from 'react-native'

export default function App() {

  // Hooks - useState
  const [produto, setProduto] = useState('')
  const [produtos, setProdutos] = useState([])
  const [count,setCount ]=useState(0);
  //SPREAD JS
  function handleAdicionarProduto() {
    setCount(count+1);
    setProdutos(vetorVelho => [...vetorVelho, {id:count,name:produto}])
    setProduto('')

  }
  function handleRemoverProduto(prodRemover) {
    setProdutos(vetorVelho => vetorVelho.filter(prod => prod !== prodRemover))
  }

  console.warn(produtos);


  return (
    <View>
      <Text>Lista de Compras</Text>
      <TextInput placeholder="Digite o produto!" value={produto} onChangeText={texto=>setProduto(texto)} ></TextInput>

      <Button title="Adicionar" onPress={handleAdicionarProduto} onClick></Button>
      
      {/* <Produto data={produtos[0]}/> */}
      <View style={styles.container}>
           
           <FlatList
               data={produtos} keyExtractor={(item)=>produtos.indexOf(id).toString}
               renderItem={( {item} ) => <Produto data={item}/>}
               />

       </View>

      {/* <View> */}

        {/* {

          produtos.map(pro => (
            <View key={pro} style={{ flexDirection: 'row' }}>
              <Text>{pro}</Text>

            </View>
          )
          )
        } */}

      {/* </View> */}

    </View>
  );
}


export function Produto({ data }) {
  console.warn(data);
  
    return (
        <View key={data} style={styles.produto}>
            <Text>Nome: {data.name}</Text>
            <Button title="x" onPress={() => handleRemoverProduto(data)}></Button>
        </View>
    );
}


const styles = StyleSheet.create({
  container:{
      flex:1,
      marginTop:15
     
  },
  produto:{
      backgroundColor:'#ae54de',
      height:150,
      margin:10
  }
  
  }
  )
  