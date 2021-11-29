class Session extends React.Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
    }
    register(section, waitlist) {
        let params = new URLSearchParams()
        params.append("display", this.props.Display)
        params.append("session", this.props.Name)
        params.append("section", section)
        params.append("waitlist", waitlist ? 1 : 0)
        var advancedSections = this.props.Advanced.split(",")
        if (advancedSections.includes(section)) {
            params.append("advanced", 1)
        } else {
            params.append("advanced", 0)
        }
        console.log(params.toString())
        window.open("register.html?" + params.toString(), "_self")
    }
    render() {
        var openChild;
        var reminder = e("span", { className: "filledReminder", style: { fontSize: "18px", whiteSpace: "nowrap" } }, `*${this.props.OpenDate}`)
        openChild = reminder
        var title = e("h3", null, [`${this.props.Display} Session ${this.props.Time}`, openChild])


        var calendar = e(Calendar, { dates: this.props.Dates })
        var calendarContainer = e("div", {
            style: {
                backgroundColor: "white"
            }
        }, calendar)

        var imageContainer = e("a", { className: "image", key: 0 }, calendarContainer)
        var registerButtons = []

        var sections = this.props.Sections.split(",")
        var advancedSections = this.props.Advanced.split(",")
        // for (var s = 0; s < sections.length; s++) {
        //     let section = sections[s]
        //     var children = []
        //     let isWaitlist = false
        //     var cap = parseInt(this.props.Capacity)
        //     if (advancedSections.includes(sections[s])) {
        //         cap *= 2
        //     }
        //     if (this.props.Registrations[sections[s]] >= cap) {
        //         isWaitlist = true
        //     }
        //     //removes student signup buttons from the screen

        //     var input = e("input", { type: "submit", disabled: !this.props.Open, className: "primary", value: `${isWaitlist ? 'Waitlist' : 'Register'} For ${section.length == 1 ? "Grade": "Grades"} ${section}`, onClick: () => this.register(section, isWaitlist) })
        //     children.push(input)

        //     var listItem = e("li", {}, children)
        //     registerButtons.push(listItem)
        // }

        var children = []
        var input = e("input", { type: "submit", disabled: !this.props.Open, className: "primary", value: "Register your child!", onClick: () => window.location.href='http://parents.compscikids.net/' })
        children.push(input)

        var listItem = e("li", {}, children)
        registerButtons.push(listItem)


        var list = e("ul", { className: "actions" }, registerButtons)
        var colDiv = e("div", { className: "col-12" }, list)
        var innerDiv = e("div", { className: "inner", key: 1 }, colDiv)

        var article = e("article", null, [title, imageContainer, innerDiv])
        return article
    }
}
