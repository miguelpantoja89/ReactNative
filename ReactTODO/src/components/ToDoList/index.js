import React, {Fragment} from 'react';
import { Text, View ,TouchableOpacity, StyleSheet, ScrollView, FlatList} from 'react-native';

const styles = StyleSheet.create(
    {listItem: {  padding:7, margin: 2, width: "80%",flexDirection: 'row',
    alignItems: 'center'},
    container:{width:"100%"},

    text: { flex:1,color: 'blue', marginLeft:"-35%",
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
    },
    bullet:{fontWeight: 'bold',padding: 5},
    textDone:{
        color: '#aaa',
        textDecorationLine: 'line-through',
        fontWeight: 'normal',
        
    },
    delete:{alignItems: 'center', justifyContent:'center', width:44, height:44, marginRight:"10%"},
    deleteText:{color:'red',fontSize:18}


}

    );
    renderItem = (todo,onUpdate, onDelete) =>  (<TouchableOpacity style = {styles.listItem} key={todo.text} onPress = {() => onUpdate({...todo,done: !todo.done}) }>
     <Text style= {[styles.text, todo.done ? styles.textDone: styles.text]} >{todo.text}</Text>
     <TouchableOpacity style={styles.delete} onPress = {() => onDelete(todo)}>
         <Text style={styles.deleteText}>X</Text>
     </TouchableOpacity>
     </TouchableOpacity>)
const TodoList = ({
    todos, onUpdate, onDelete
}) => (
<FlatList  style={styles.container} data={todos}  renderItem={({item} ) => renderItem(item,onUpdate, onDelete)}/>
   // <ScrollView contentContainerStyle={styles.container}>
     //  {todos.map(
       //     todo => 
         //   <TouchableOpacity style = {styles.listItem} key={todo.text} onPress = {() => onUpdate({...todo,done: !todo.done}) }>
           // <Text style={styles.bullet}>--</Text>
            //<Text style= {[styles.text, todo.done ? styles.textDone: styles.text]} >{todo.text}</Text>
            //<TouchableOpacity style={styles.delete} onPress = {() => onDelete(todo)}>
              //  <Text style={styles.deleteText}>X</Text>
            //</TouchableOpacity>
            //</TouchableOpacity>
            //)}
   // </ScrollView>
);

export default TodoList;

//!todo.done && 