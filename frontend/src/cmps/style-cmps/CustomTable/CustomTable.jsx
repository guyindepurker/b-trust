
import React from 'react'

import './Table.scss'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AvatarFlag from '../AvatarFlag/AvatarFlag';
import _ from 'lodash'
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: '#B3B8C1',
        textTransform: 'upperCase',
        fontSize: 12
    },
    body: {
        fontSize: 13,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#FAFBFD',
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 800,
    },
});

export default function CustomTable({ data }) {
    const columnTitles = Object.keys(data[0])
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {columnTitles.map((columnTitle, i) => <StyledTableCell key={i}>{_.lowerCase(columnTitle)}</StyledTableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, idx) => (
                        <StyledTableRow key={idx}>
                            {columnTitles.map((columnTitle, i) => (
                                <StyledTableCell key={i}>
                                    {columnTitle === 'country' ? <AvatarFlag className="small" name={row[columnTitle]} /> : row[columnTitle]}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



