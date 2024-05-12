import Datatable, { createTheme } from "react-data-table-component";
export default function DataTableTMPLT({ columns, data }: { columns: any, data: any }) {

    createTheme('solarized', {
        background: {
            default: 'transparent',
        },
        context: {
            background: '#cb4b16',
            text: '#FFFFFF',
        },
        divider: {
            default: '#CDCDCD',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'rgba(0,0,0,.08)',
            disabled: 'rgba(0,0,0,.12)',
        },
    }, 'dark');

    return (
        <Datatable
            className="mt-5"
            columns={columns}
            data={data}
            selectableRows
            paginationPerPage={10}
            pagination
            customStyles={{
                rows: {
                    style: {
                        backgroundColor: "transparent",
                        color: '#FFF',
                    }
                },
                headRow: {
                    style: {
                        backgroundColor: '#050A22',
                        color: '#FFF',
                        fontSize: '14px',
                    }
                },
            }}
            onSelectedRowsChange={(data => console.log(data))}
            theme="solarized"
        >

        </Datatable>
    )
}