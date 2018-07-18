import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import { SearchIcon } from '../IconsSVG';


class SearchCoins extends Component {
  render(){
    return(
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button outline color="info">
            {SearchIcon}
          </Button>
        </InputGroupAddon>
      </InputGroup>
    )
  }
}

export default SearchCoins;
