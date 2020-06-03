import React, { Component } from "react";
import PropTypes from "prop-types"; 
import { withStyles } from "@material-ui/core/styles"; 
import ExpansionPanel from "@material-ui/core/ExpansionPanel"; 
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"; 
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionMoreIcon from "@material-ui/core/ExpansionMore";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import SnackBar from "@material-ui/core/SnackBar";
import CloseIcon from "@material-ui/core/Close";
import IconButton from "@material-ui/core/Icon";
import ProfileAction from "../../components/app-bar/ProfileActions";
import {getDoctorSettings, updateDoctorSettings} from "../../actions/settingsActions";

let scheduleObj = {
    monday: {
        fromMonday: "08:00",
        toMonday: "18:00"
    },
    tuesday: {
        fromTuesday: "08:00",
        toTuesday: "18:00"
    },
    wednesday: {
        fromWednesday: "08:00",
        toWednesday: "18:00"
    },
    thursday: {
        fromThursday: "08:00",
        toThursday: "18:00"
    },
    friday: {
        fromFriday: "08:00",
        toFriday: "18:00"
    }
};

export class DoctorSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
            openSnackBar: false,
            birthday: "",
            sex: "",
            workPhone: "",
            yearsOfPractice: "",
            achievements: "",
            clinicName: "",
            cabinetNumber: "",
            specialty: "",
            address: {
                number: "",
                street: "",
                city: "",
                zip: ""
            },
            university: {
                univName: "",
                univCity: "",
                yearOfEntry: "",
                yearOfOut: "",
                univSpecialty: ""
            },
            schedule: {
                monday: {
                    fromMonday: "08:00",
                    toMonday: "18:00"
                },
                tuesday: {
                    fromTuesday: "08:00",
                    toTuesday: "18:00"
                },
                wednesday: {
                    fromWednesday: "08:00",
                    toWednesday: "18:00"
                },
                thursday: {
                    fromThursday: "08:00",
                    toThursday: "18:00"
                },
                friday: {
                    fromFriday: "08:00",
                    toFriday: "18:00"
                }
            },
        }
        this.handleExpand = this.handleExpand.bind(this);
        this.handleCloseSnackBar = this.handleExpand.bind(this);
        this.onChangeSettings = this.onChangeSettings.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeUniversity = this.onChangeUniversity.bind(this);
        this.onSave = this.onSave.bind(this);
        this.setSchedule = this.setSchedule.bind(this);
        this.assignSchedule = this.assignSchedule.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

handleExpand = panel => (expanded) => {
    this.setState({
        expanded: expanded ? panel : false
    })
}

handleCloseSnackBar = () => {
    this.setState({
        openSnackBar = false
    })
}

onChangeSettings = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

onChangeAddress = event => {
    this.setState({
        address: Object.assign({}, this.state.address, {
            [event.target.name]: event.target.value
        })
    })
}

onChangeUniversity = event => {
    this.setState({
        university: Object.assign({}, this.state.university, {
            [event.target.name]: event.target.value
        })
    })
}

// Need to write onSave //////// 

assignSchedule(targetName, targetValue, day) {
    return Object.assign({}, this.state.schedule[day], {
        [targetName]: targetValue
    })
}

componentDidMount = () => {
    this.props.getDoctorSettings(this.props.auth.user.id)
}

componentWillReceiveProps(nextProps) {
    if (nextProps.settings) {
        this.setState(Object.assign({}, nextProps.settings));
        this.scheduleObj = nextProps.settings.schedule;
    }
}

handleDateChange = event => {
    let {name, value} = event.target;
    let day = name.match(/[A-Z].+/g)[0].toLowerCase();
    switch(day) {
        case "monday": scheduleObj.monday = this.assignSchedule(name, value, day);
        break;
        case "tuesday": scheduleObj.tuesday = this.assignSchedule(name, value, day);
        break;
        case "wednesday": scheduleObj.wednesday = this.assignSchedule(name, value, day);
        break;
        case "thursday": scheduleObj.thursday = this.assignSchedule(name, value, day);
        break;
        case "friday": scheduleObj.friday = this.assignSchedule(name, value, day);
        break;
        default: 
        throw new Error("Sorry, schedule has not been set by your doctor");
    }
    this.setState(this.state);
}





    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default DoctorSettings;



