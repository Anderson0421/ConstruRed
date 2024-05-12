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
            progressPending={!data}
            progressComponent={<div className='top-0 left-0 z-50 w-full h-96 flex items-center justify-center bg-black bg-opacity-50'>
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-900"></div>
            </div>}
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