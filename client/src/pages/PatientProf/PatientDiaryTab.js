import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Icon } from '@material-ui/core';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';
import {getPatientRecords} from '../../actions/utilsAction'
const actionStyles = theme => 
    ({
        root: {
            color: secondary
        }
    })

export class TablePaginationAction extends Component {
    constructor(props) {
        super(props);
        this.handlePage1 = this.handlePage1.bind(this);
        this.handleBackBtn = this.handleBackBtn.bind(this);
        this.handleFwdBtn = this.handleFwdBtn.bind(this);
    }
    handlePage1 = (e) => {
        this.props.onChangePage(e, 0)
    }
    handleBackBtn = (e) => {
        this.props.onChangePage(e, this.props.page - 1)
    }
    handleFwdBtn = (e) => {
        this.props.onChangePage(e, this.props.page + 1)
    }
    render() {

        const { classes, count, page, rowsPerPage, theme, onChange } = this.props;

        return (
            <div>
                <IconButton 
                onClick={this.handlePage1}
                disabled = {this.page === 0}>
                    {theme.direction === "" ? (
                        <LastPageIcon />
                    ) : (
                        <FirstPageIcon />
                    )}
                </IconButton>
                <IconButton 
                onClick = {this.handleBackBtn}
                disabled = {this.page === 0}>
                    {theme.direction === "" ? (
                        <KeyboardArrowRightIcon />
                    ) : (
                        <KeyboardArrowLeftIcon />
                    )}
                </IconButton>
                <IconButton 
                onClick={this.handleFwdBtn}
                disabled = {this.page === 0}>
                    {theme.direction === "" ? (
                        <KeyboardArrowRightIcon />
                    ) : (
                        <KeyboardArrowLeftIcon />
                    )}
                </IconButton>
            </div>
        )
    }
}

TablePaginationAction.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.object.isRequired,
    page: PropTypes.object.isRequired,
    rowsPerPage: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onChange: PropTypes.object.isRequired
};

export class PatientDiaryTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 5
        }
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangePage.bind(this);
    };

    componentDidMount() {
        this.props.getPatientsRecords(this.props.auth.user.id)
    }
    handleChangePage = (page) => {
        this.setState({
            page
        })
    }  
    handleChangeRowsPerPage = (e) => {
        this.setState({
            rowsPerPage: e.target.value
        })
    }  
    render() {

        return (
            <div>
                
            </div>
        )
    }
}

export default PatientDiaryTab

