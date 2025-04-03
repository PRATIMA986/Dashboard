import {DataGrid} from "@mui/x-data-grid";

function ListComponent(props) {
  return (
    <div style={{ height: '10%', width: '100%', left: '10%'}}>
        <DataGrid
            rows ={props.rows || []}
            columns={props.columns || []}
        />
    </div>
  )
}

export default ListComponent;