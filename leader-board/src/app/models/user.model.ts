export class User {

    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cohort: number;
    department: string;
   

    constructor(
        firstName,
        lastName,
        email,
        password,
        cohort,
        department
    ) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.cohort=cohort;
        this.department=department;
    }

}
