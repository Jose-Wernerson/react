import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Container,
   ToDoList, 
   StyleInput, 
   StyleButton, 
   ListItem, 
   Trash, 
   Check, 
   H3,
  } from './styles.js'


function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState("")


  function inputMudou(event) {

    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }


  }

  function finishTask(id) {
    const newlist = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newlist)
  }
  function deleteItem(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (

    <Container>
      <ToDoList>
        <StyleInput onChange={inputMudou} placeholder="Digite o que tem a fazer" />
        <StyleButton onClick={cliqueiNoBotao}> Adicionar</StyleButton>
        <ul>
          {
            list.length > 0 ? (

              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finishTask(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteItem(item.id)} />
                </ListItem>
              ))
            ) : (
              <H3>Não há itens na lista</H3>
            )}

        </ul>
      </ToDoList>
    </Container>

  )
}

export default App
