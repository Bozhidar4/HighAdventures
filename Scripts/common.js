alert("You Have To Meet Our Criteria In Order To Proceed With Your Booking!\n\n Age: 18 - 26 years old\n Weight: 50 - 90kg\n Height: 150 - 190cm");

function calculateUserData() {
    var age = document.userDataForm.age.value;
    var weight = document.userDataForm.weight.value;
    var height = document.userDataForm.height.value;

    document.userDataForm.userAge.value = (age > 17 && age < 27) ? "Your age is OK" : "You do Not meet the criteria. You must be between 18 and 26 years old";
    document.userDataForm.userWeight.value = (weight > 49 && weight < 91) ? "Your weight is OK" : "You do Not meet the criteria. You must be between 50 and 90kg in weight";
    document.userDataForm.userHeight.value = (height > 149 && height < 191) ? "Your height is OK" : "You do Not meet the criteria. You must be between 150 and 190cm in height";

    if ((age > 17 && age < 27) && (weight > 49 && weight < 91) && (height > 149 && height < 191)) {
        window.confirm("You can proceed to our booking page");
    }
    else if (age <= 0 || age == null) {
        alert("Please enter your correct age!");
    }
    else if (weight <= 0 || weight == null) {
        alert("Please enter your correct weight!");
    }
    else if (height <= 0 || height == null) {
        alert("Please enter your correct height!");
    }
    else {
        alert("You do not meet our criteria in order to book with us. Please see Results section for more information");
    }
}
