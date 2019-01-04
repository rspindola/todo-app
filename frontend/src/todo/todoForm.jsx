import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }
    
    return (
        <div>
            <div className='todoForm' role="form">
                <Grid cols='12 9 10'>
                    <input id="description" 
                        className="form-control" 
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}
                        value={props.description}
                        placeholder="Adicione uma Tarefa"/>
                </Grid>            
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={props.handleAdd}/>
                    <IconButton style='info' icon='search' onClick={props.handleSearch}/>
                    <IconButton style='default' icon='close' onClick={props.handleClear}/>
                </Grid>
            </div>
        </div>
    )
}