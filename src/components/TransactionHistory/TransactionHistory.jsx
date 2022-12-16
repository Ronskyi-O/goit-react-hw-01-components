import { Table, TableHead, TableHeadCell, TableBodyCell } from './TransactionHistory.styled'
import PropTypes from "prop-types"

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <TableHead>
                <tr>
                    <TableHeadCell>Type</TableHeadCell>
                    <TableHeadCell>Amount</TableHeadCell>
                    <TableHeadCell>Currency</TableHeadCell>
                </tr>
            </TableHead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id}>
                            <TableBodyCell>{type}</TableBodyCell>
                            <TableBodyCell>{amount}</TableBodyCell>
                            <TableBodyCell>{currency}</TableBodyCell>
                        </tr>
                    )
                })}

            </tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}


