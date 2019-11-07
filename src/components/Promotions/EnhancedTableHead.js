import React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

const EnhancedTableHead = props => {
    const headCells = [
        { id: 'promo_name', numeric: false, disablePadding: true, label: 'Promo Name' },
        { id: 'merchandising', numeric: false, disablePadding: true, label: 'Merchandising' },
        { id: 'marketing', numeric: false, disablePadding: false, label: 'Marketing' },
        { id: 'promo_slin', numeric: false, disablePadding: false, label: 'Promo Slin' },
        { id: 'approval_status', numeric: false, disablePadding: false, label: 'Approval Status' },
        { id: 'published', numeric: false, disablePadding: false, label: 'Published' },
        { id: 'reporting', numeric: false, disablePadding: true, label: 'Reporing' },
    ];

    return (
        <TableHead className={'table__head'}>
            <TableRow className={'table__row'}>
                <TableCell className={'table__row checkbox'} padding="checkbox">
                    <Checkbox
                        indeterminate={props.numSelected > 0 && props.numSelected < props.rowCount}
                        checked={props.numSelected === props.rowCount}
                        onChange={props.onSelectAllClick}
                    />
                </TableCell>
                {headCells.map(headCell => (
                    <TableCell
                        className={'table__row heading'}
                        key={headCell.id}
                        align={headCell.id === 'promo_name' ? 'left' : 'center'}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default EnhancedTableHead;
