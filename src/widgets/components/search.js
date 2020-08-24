import React from 'react';
import './search.css';
import {Prompt} from 'react-router';
// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }

const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <Prompt when={props.value} message="¿Estas seguro de querer dejar la pagina? Tienes una busqueda en proceso"/>
    <input
      ref={props.setRef}
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search
