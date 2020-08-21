import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const ShoppingCart = (props) => {
  return (
    <div className="ShoppingList">
      <Card style={{ margin: "10px" }}>
        <CardHeader style={{
          margin: "10px 10px 0px 10px",
          width: "85%",
          borderRadius: "10px",
          backgroundColor: "blue",
          color: "white"
        }}
          title="Shopping Cart"
        >
        </CardHeader>
        <CardContent>
          {
            props.products && props.products.length > 0 ?
              <Table style={{ tableLayout: 'auto' }} className="TableComponent">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell style={{ padding: '5px' }}>Product</TableCell>
                    <TableCell style={{ padding: '5px', textAlign: 'right' }}>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    props.products.map((product, i) => {
                      return (
                        <TableRow key={i} >
                          <TableCell>
                            <IconButton aria-label="delete">
                              <DeleteIcon
                                style={{ color: "red" }}
                                onClick={() => props.onProductDeselect(product)}
                              />
                            </IconButton>
                          </TableCell>
                          <TableCell style={{ padding: '5px', whiteSpace: 'wrap' }}>{product.name}</TableCell>
                          <TableCell style={{ padding: '5px', textAlign: 'right' }}>{'$' + product.price.toFixed(2)}</TableCell>
                        </TableRow>
                      )
                    })
                  }
                </TableBody>
                <TableFooter className="ProductTableFooter">
                  <TableRow style={{ fontWeight: 900, fontSize: '1.4rem' }}>
                    <TableCell style={{ padding: '5px', fontSize: '1.4rem' }}>
                      Total:
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell style={{ padding: '5px', textAlign: 'right', fontSize: '1.4rem' }}>
                      {
                        ' $' + props.products.map((product, i) => {
                          return product.price
                        }).reduce((a, b) => {
                          return a + b
                        }).toFixed(2)
                      }
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
              : <div>EMPTY</div>
          }
        </CardContent>
        <CardActions>
          {
            props.products && props.products.length > 0 ?
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                style={{ margin: "auto", }}
                onClick={() => props.removeAllItems()}
              >
                Remove All Items
              </Button>
              : null
          }
        </CardActions>
      </Card>
    </div >
  )
}

export default ShoppingCart;
