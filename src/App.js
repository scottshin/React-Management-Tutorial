import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.production.min';

import Customer from './components/Customer'


const customers =[ {
  'id' : 1, 
  'image' : 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '962223',
  'gender': '남자',
  'job' : '대학생  '
},
{
  'id' : 2, 
  'image' : 'https://placeimg.com/64/64/xi2',
  'name': '신희운',
  'birthday': '962223',
  'gender': '남자',
  'job' : '개발자   '
},
{
  'id' : 3, 
  'image' : 'https://placeimg.com/64/64/3',
  'name': '지유나',
  'birthday': '962223',
  'gender': '남자',
  'job' : '가정주부 '
}

]

class App extends Component {

  render() {
    return (
      <div>
        { customers.map( c => {
            return ( 
              <Customer
              key = { c.key}  id={ c.id } image={c.image} name={ c.name }
              birthday={c.birthday} gender={ c.gender} 
              job={ c.job}
              /> 
            )
        })}
      </div>
    )
  }
}

export default App;
