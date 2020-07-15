import React,{Component} from 'react';
import axios from 'axios'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:""
    }
  }

  handleChange = (e) => {
    this.setState({name:e.target.value})
  }

  submitName = () =>{
    if(this.state.name){
      axios.post('/api/add', {
        name:this.state.name
      })
      .then(response=> {
        console.log(response.data);
        this.setState({name:""})
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  fetchList = () => {
    axios.get('/api/fetch')
    .then(response=> {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render(){
    return (
      <div style={{margin:"300px"}}>
        <input type="text" value={this.state.name} onChange={this.handleChange}/><br/>
        <button onClick={this.submitName}>Insert</button>
        <button onClick={this.fetchList}>Get List</button>
      </div>
  );}
}

export default App;
