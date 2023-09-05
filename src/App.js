
import './App.css';
import {Component} from 'react';

class App extends Component{

  state = {
 estudantes:[ 
    {
      matricula:1,
      nome:'Isabelly',
      curso:'Informática para Internet',
      turma: '3 período'
    },

    {
      matricula:2,
      nome:'Emilly',
      curso:'Informática para Internet',
      turma: '6 período'
    },

   {
    matricula:3,
    nome:'Laura',
    curso:'Direito',
    turma: '9 período'
  }
]
}
  render(){
    const {estudantes} = this.state;
    return(
      <div className="App">
        {estudantes.map(estudante => (
          <div key = {estudante.matricula}>
                <h1> {estudante.nome} </h1> 
                <p>{estudante.curso}</p>
                <p>{estudante.turma}</p>
           </div>
        
        ))}
      </div>
    ) 
    };

}


export default App;
