import React from 'react'
import { Paper, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    paper: {
        background: '#272d2e',
        color: '#fff'
    },
    table: {
        color: '#fff'
    }
})

const TableUI = (props) => {
    const classes = styles();
    return (
        <div>
            <Paper className={classes.paper}>
                <Table border={0}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.table} align="center">ID</TableCell>
                            <TableCell className={classes.table} align="center">User ID</TableCell>
                            <TableCell className={classes.table} align="center">Body</TableCell>
                            <TableCell className={classes.table} align="center">Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map(row => (
                            <TableRow key={row.id}>
                                <TableCell className={classes.table} align="center">{row.id}</TableCell>
                                <TableCell className={classes.table} align="center">{row.userId}</TableCell>
                                <TableCell className={classes.table} align="center">{row.body}</TableCell>
                                <TableCell className={classes.table} align="center">{row.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}

export default TableUI
