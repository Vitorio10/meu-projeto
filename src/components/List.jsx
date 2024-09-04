import Item from "./Item"

function List(){
    return(
      <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca='Audi' lancamento={1987}/>
        <Item marca='Nissan' />
      </ul>
      </>
    )
}

export default List