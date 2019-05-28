import React, { Component } from 'react';
import { UncontrolledTooltip, Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import {Tooltip} from '@material-ui/core'
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import {
    Button,
    CardFooter,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label
  } from 'reactstrap';


class dataTable extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          selecionados : [],
          data : this.props.data,
        };
      }
      
      componentWillMount(){
          console.log(this.props)
      }
      componentWillReceiveProps(nextProps){
        if(this.state.data != nextProps.data){
          this.setState({
            data: nextProps.data
          })
        }
      }

    render() {
      return (
        <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> {this.props.titleTable}
              </CardHeader>
              <CardBody>
                <Table hover>
                  <thead>
                    <tr>
                        {this.props.columnData.map((column, index) =>
                                <th>{column['name']}</th>
                        )}
                    </tr>
                  </thead>
                  <tbody>
                        {this.state.data.map((item, index) =>
                            <tr>
                                {this.props.columnData.map((column, index,) =>
                                    <td>{column['id']==="editar"? 
                                        <Row>
                                            <Tooltip placement="top" title="Deletar">
                                                <DeleteIcon style={{color: '#db3d44'}}className="cui-trash icons font-2xl d-block" onClick={() => this.props.deleteItens(item)}/>

                                            </Tooltip>

                                            <Tooltip style={{paddingLeft: '5px'}} placement="top-end" title="Editar">
                                              <Link style={{ textDecoration: 'none' }} to={{pathname: this.props.editPath, props: {item: item} }}>
                                                <EditIcon style={{color: '#db3d44'}} className="cui-cog icons font-2xl d-block" />
                                              </Link>  
                                            </Tooltip>
                                        </Row>
                                        : item[column['id']]}</td>
                                )}
                            </tr>
                        )}
                  </tbody>
                </Table>
                {/* <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">   3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination> */}
              </CardBody>
            </Card>
          </Col>
      );
    }
  }
  
  export default dataTable;
  