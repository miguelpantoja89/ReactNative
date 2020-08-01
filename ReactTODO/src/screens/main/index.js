import React, {Component} from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, Button} from "react-native";
import TodoList from "todoList/src/components/ToDoList";
import {getTodos, addTask, updateTask, deleteTask} from "todoList/src/data/todos";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
      marginTop: 50
    },
    title:{
      fontWeight:'bold',
      fontSize: 20,
      padding:5
    },
    text:{  flex:1, padding:2, margin: 3, width: "80%",flexDirection: 'row',
    alignItems: 'center', borderBottomWidth:1},
    addRow:{
      width: "80%",flexDirection: 'row'
    }
  });


export default class MainScreen extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        data : [],
        newTask : null
      };
    };
    /// Una vez que tenemos el componente renderizado
    componentDidMount = () => {
      this.setState({data:getTodos()})
    }
    handleAdd = () => {
      const {data,newTask} = this.state;
      const newList = addTask(data,{text:newTask});
      this.setState({data: newList, newTask: null});
    }
    handleUpdate = task => {
      const {data} = this.state;
      const newList = updateTask(data,task);
      this.setState({data: newList});
    }
    handleDelete = task => {
      const {data} = this.state;
      const newList = deleteTask(data,task);
      this.setState({data: newList});
    }
   
    render(){
        const {data, newTask} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Text style= {styles.title} selectable>
                   ToDO List App 
                </Text>
                <View style={styles.addRow}>
                <TextInput value={newTask}
                onChangeText={val => this.setState({newTask:val})}
                placeholder="Create a new Task"
                style = {styles.text}
                autoCapitalize="words"
                returnKeyType="done"
                />
                <Button onPress={this.handleAdd}  title="Add"></Button>
                </View>
                <TodoList todos={data} onUpdate = {this.handleUpdate} onDelete = {this.handleDelete}/>
                
        
                
            </SafeAreaView>
        )
    }

}
