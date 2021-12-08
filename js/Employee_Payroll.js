class Employee_Payroll_Data 
{
    /**
     * setter and getter methods
     * validating the user inputs using regular expression
     */
    get id() { return this._id; }
    set id(id) { this._id =id; }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if (nameRegex.test(name)) 
            this._name = name;
        else throw "Name is incorrect";
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) { this._department = department; }

    get salary() { return this._salary; }
    set salary(salary) { this._salary = salary; }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let future = new Date();
        future.setDate(future.getDate() + 30);
        if (startDate < new Date() || startDate < future)
            this._startDate = startDate;
        else
            throw "Date is Invalid";
    }

	get note() { return this._note; }
    set note(note) { this._note = note; }

    toString() {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const empDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return (
            "Id = " + this.id +
            ", Name = " + this.name +
            ", ProfilePic = " + this.profilePic +
			", Gender = " + this.gender +
            ", Department = " + this.department +
            ", Salary = " + this.salary +
            ", StartDate = " + empDate +
            ", Note = " + this.note
        );
    }
}