class StudentContainer extends React.Component {
    constructor(props) {
        super(props)
        var sections = this.props.sections.split(",")//["1-2", "3-4", "5-6", "7-8"]
        var advanced = this.props.advanced.split(",")//["1-2", "3-4", "5-6"]

        var sortedStudents = {}
        for (let sec = 0; sec < sections.length; sec++) {
            sortedStudents[sections[sec]] = []
        }
        for (let seca = 0; seca < sections.length; seca++) {
            sortedStudents[advanced[seca] + "A"] = []
        }
        console.log(sortedStudents)

        for (var s = 0; s < this.props.students.length; s++) {
            var student = this.props.students[s]
            console.log(student.section)
            if (student.advanced == 1) {
                sortedStudents[student.section + "A"].push(student)
            } else {
                sortedStudents[student.section].push(student)
            }
        }
        console.log(sortedStudents)

        this.state = {
            sections: sections,
            advanced: advanced,
            studentData: sortedStudents
        }
        this.createTable = this.createTable.bind(this)
    }
    createTable(section, advanced) {
        var tableHead = e("caption", null, `Section: ${section} ${advanced ? "Advanced" : ""}`)
        // var tableHead = e("thead", {}, title)
        var rows = []

        var headers = ["ID", "First Name", "Last Name", "Birthday", "Advanced", "Waitlist", "Grade", "School", "Shirt", "Sessions", "Parent", "Relationship", "Email", "Phone", "Emergency", "Relationship", "Phone", "Confirmed", "App Adv."]
        var headerColumns = []
        for (let h = 0; h < headers.length; h++) {
            headerColumns.push(e("td", {
                style: {
                    textAlign: "center",
                    fontSize: "13px"
                },
                key: h
            }, headers[h]))
        }
        var headerRow = e("tr", null, headerColumns)
        rows.push(headerRow)

        var sortedSection = section
        if (advanced) {
            sortedSection += 'A'
        }

        for (var s = 0; s < this.state.studentData[sortedSection].length; s++) {
            rows.push(e(StudentEntry, { key: s, student: this.state.studentData[sortedSection][s], session: this.props.session, parent: this }))
        }

        var tableBody = e("tbody", null, rows)

        var table = e("table", {
            style: {
                width: "100%"
            },
            key: Math.random()
        }, [tableHead, tableBody])
        return table
    }
    render() {
        var containerChildren = []
        for (let s = 0; s < this.state.sections.length; s++) {

            containerChildren.push(this.createTable(this.state.sections[s], false))

            if (this.state.advanced.includes(this.state.sections[s])) {

                containerChildren.push(this.createTable(this.state.sections[s], true))
            }
        }

        var containerDiv = e("div", {
            style: {
                width: "100%"
            }
        }, containerChildren)
        return containerDiv
    }
}