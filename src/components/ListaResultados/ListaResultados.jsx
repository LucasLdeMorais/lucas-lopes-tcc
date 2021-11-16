import { React } from "react"
import { List, ListItemText, ListSubheader, ListItemButton } from "@material-ui/core"

export default function ListaResultados({resultados, handleClickItemLista}){

    if(resultados) {
        return <List 
            sx={{ width: '100%', bgcolor: 'background.paper', maxHeight: "15em", overflow: "hidden", overflowY: "scroll" }}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Resultados
                </ListSubheader>
              }
        >
            { resultados ? resultados.map((resultado) => (
                <ListItemButton 
                    onClick={(event) => {
                        event.preventDefault()
                        handleClickItemLista(resultado)
                    }} 
                    key={"sr" + resultados.indexOf(resultado)}
                >
                    <ListItemText 
                        primary={resultado.label[0] = resultado.label[0].replaceAll(/<\/?[^>]+(>|$)/g, "")} 
                        secondary={resultado.resource[0]}
                    />
                </ListItemButton>
            )) : null }
        </List>
    }
    return <></>
}