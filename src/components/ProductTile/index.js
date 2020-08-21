import React from 'react';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import './index.css';

class ProductTile extends React.Component {
  state = { open: false, };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  thisProductChecked = () => {
    return this.props.allProducts.findIndex((product) => {
      return this.props.product.name === product.name
    })
  }

  renderProductLinks = () => {
    return Object.keys(this.props.product.shop).map((key, i) => {
      let url = this.props.product.shop[key];
      if (String(key) === 'banggood') url += '?p=H101138294533201701A';
      return <a key={i} className="ProductLink" href={url} target="_blank" rel="noopener noreferrer">{key}</a>
    })
  }

  render = () => {
    return (
      <div className="ProductTile" >
        <Paper elevation={3}>
          <div>
            <span className="ProductName">{this.props.product.name}</span>
          </div>
          <div className="ProductLinkList">
            <span className="ProductPrice">${this.props.product.price.toFixed(2)}</span>
            {this.renderProductLinks()}
          </div>

          <div className="ProductImageContainer">
            <div className="ProductCheckContainer">
              <Checkbox
                color="primary"
                checked={this.thisProductChecked() !== -1}
                onClick={() => {
                  const index = this.thisProductChecked();
                  if (index !== -1) {
                    return this.props.onProductDeselect(this.props.product);
                  }
                  this.props.onProductSelect(this.props.product);
                }}
              />
            </div>
            <a onClick={this.handleOpen} style={{ cursor: "poointer" }}>
              <img className="ProductImage"
                src={this.props.product.image}
                alt={this.props.product.name}
              />
            </a>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
            >
              <DialogTitle onclose={this.handleClose}>{this.props.product.name}</DialogTitle>
              <DialogContent dividers>
                <p>{this.props.product.notes}</p>
                <img className="ProductImageLarge"
                  src={this.props.product.image}
                  alt={this.props.product.name}
                />
                <h3>Shopping Links</h3>
                {this.renderProductLinks()}
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Paper>
      </div>
    )
  }
}

export default ProductTile;