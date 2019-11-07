import React from 'react';

import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import CircularProgress from '@material-ui/core/CircularProgress';

import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableBody from './EnhancedTableBody';
import TableToolBar from './TableToolBar';

class PromotionsTable extends React.Component {
    state = {
        rows: [],
        page: 0,
        rowsPerPage: 10,
        selected: [],
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.rows !== prevState.rows) {
            return {
                rows: nextProps.rows,
            };
        }
        return null;
    }

    handleChangePage = (e, page) => {
        this.setState({
            page: page,
        });
    };

    handleChangeRowsPerPage = e => {
        this.setState({
            rowsPerPage: e.target.value,
            page: 0,
        });
    };

    handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = this.state.rows.map(n => n.promo_name);
            this.setState({
                selected: newSelecteds,
            });
            return;
        }
        this.setState({
            selected: [],
        });
    };

    handleClick = (event, name) => {
        const { selected } = this.state;

        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        this.setState({
            selected: newSelected,
        });
    };

    isSelected = name => this.state.selected.indexOf(name) !== -1;

    render() {
        const { rows, rowsPerPage, page, selected } = this.state;
        return (
            <Paper square={true} className={'table-paper'}>
                <div className={'table__toolbar'}>
                    <TableToolBar rows={rows} />
                    <TablePagination
                        className={'table__pagination'}
                        rowsPerPageOptions={[5, 10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        backIconButtonProps={{
                            'aria-label': 'previous page',
                        }}
                        nextIconButtonProps={{
                            'aria-label': 'next page',
                        }}
                    />
                </div>
                {!rows ? (
                    <CircularProgress disableShrink />
                ) : (
                    <Table className={'table'}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            onSelectAllClick={this.handleSelectAllClick}
                            rowCount={rows.length}
                        />
                        <EnhancedTableBody
                            rows={rows}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            isSelected={this.isSelected}
                            handleClick={this.handleClick}
                        />
                    </Table>
                )}
            </Paper>
        );
    }
}

export default PromotionsTable;
