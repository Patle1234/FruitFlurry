class StudentEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
        this.student = props.student
        this.save = this.save.bind(this)
        this.delete = this.delete.bind(this)
        console.log(this.props.session)
    }
    valueChange(ele, data) {
        this.newStudentData[data] = ele.target.value
    }
    save() {
        var keys = Object.keys(this.newStudentData)
        for (let k = 0; k < keys.length; k++) {
            this.student[keys[k]] = this.newStudentData[keys[k]]
        }

        let stuData = this.newStudentData
        stuData["ID"] = this.student.ID
        console.log(stuData)

        $.ajax({
            url: 'https://api.compscikids.net/updateData',
            headers: { 'School': 'chs' },
            type: 'POST',
            processData: false,
            dataType: 'json',
            data: JSON.stringify({ values: stuData, session: this.props.session }),
            contentType: "application/json; charset=utf-8"
        });


        this.newStudentData = {}
        this.setState({
            editing: false
        })
    }
    delete() {
        console.log("DELTE")
        let id = this.props.student.ID
        $.ajax({
            url: 'https://api.compscikids.net/deleteData',
            headers: { 'School': 'chs' },
            type: 'POST',
            processData: false,
            dataType: 'json',
            data: JSON.stringify({ id: id, session: this.props.session }),
            contentType: "application/json; charset=utf-8"
        });
        this.setState({
            delete: true
        })
    }
    render() {
        if (this.state.delete) {
            return e("tr", null, null)
        }
        this.newStudentData = {}
        var order = ["ID", "firstName", "lastName", "dob", "advanced", "waitlist", "grade", "school", "shirtSize", "numberOfSessions", "parentName", "parentRelationship", "parentEmail", "parentPhone", "emergencyName", "emergencyRelationship", "emergencyPhone", "parentConfirmed", "appliedAdv"]
        var columns = []
        for (var o = 0; o < order.length; o++) {
            var children;
            let data = order[o]
            if (this.state.editing && o != 0) {
                var inputBox = e("input", {
                    style: {
                        fontSize: "13px"
                    }, type: "text", onChange: (val) => this.valueChange(val, data), defaultValue: this.student[order[o]]
                })
                children = inputBox
            } else {
                children = this.student[order[o]]
            }
            columns.push(e("td", {
                style: {
                    textAlign: "center",
                    fontSize: "13px"
                }
            }, children))
        }
        if (this.state.editing) {
            var saveButton = e("input", {
                type: "submit", value: "Save", className: "primary", onClick: this.save, style: {
                    fontSize: "13px",
                    margin: 0
                }
            })
            columns.push(e("td", {}, saveButton))
            var deleteButton = e("input", {
                type: "submit", value: "Delete", className: "primary", style: {
                    fontSize: "13px",
                    margin: 0
                },
                onClick: this.delete
            })
            columns.push(e("td", {}, deleteButton))
            var cancelButton = e("input", {
                type: "submit", value: "Cancel", style: {
                    fontSize: "13px",
                    margin: 0
                },
                onClick: () => this.setState({ editing: false })
            })
            columns.push(e("td", {}, cancelButton))
        } else {
            var editButton = e("input", {
                type: "submit", value: "Edit", className: "primary", style: {
                    fontSize: "13px",
                    margin: 0
                },
                onClick: () => this.setState({ editing: true })
            })
            columns.push(e("td", {}, editButton))
        }

        var row = e("tr", null, columns)
        return row
    }
}