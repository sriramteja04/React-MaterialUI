import React from 'react';

import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

const EnhancedTableBody = ({ rows, page, rowsPerPage, isSelected, handleClick }) => {
    return (
        <TableBody className={'table__body'}>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                const isItemSelected = isSelected(row.promo_name);
                return (
                    <TableRow
                        className={'table__row'}
                        hover
                        onClick={event => handleClick(event, row.promo_name)}
                        role="checkbox"
                        tabIndex={-1}
                        aria-checked={isItemSelected}
                        key={row.promo_name}
                        selected={isItemSelected}
                    >
                        <TableCell className={'table__row checkbox'} padding="checkbox">
                            <Checkbox checked={isItemSelected} />
                        </TableCell>
                        <TableCell className={'table__row data'} align={'left'}>
                            {row.promo_name}
                        </TableCell>
                        <TableCell className={'table__row data'} align={'center'}>
                            {row.merchandising}
                        </TableCell>
                        <TableCell className={'table__row data'} align={'center'}>
                            {row.marketing}
                        </TableCell>
                        <TableCell className={'table__row data'} align={'center'}>
                            {row.promo_slin}
                        </TableCell>
                        <TableCell className={'table__row data'} align={'center'}>
                            {row.approval_status}
                        </TableCell>
                        <TableCell className={'table__row data'} align={'center'}>
                            {row.published}
                        </TableCell>
                        <TableCell className={'table__row data'} align={'center'}>
                            {row.reporting}
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default EnhancedTableBody;
