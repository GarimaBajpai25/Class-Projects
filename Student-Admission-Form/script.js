// ========================================
// GET FORM ELEMENTS
// ========================================

const form = document.getElementById("admissionForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");

const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const pincode = document.getElementById("pincode");

const course = document.getElementById("course");
const branch = document.getElementById("branch");
const qualification = document.getElementById("qualification");
const percentage = document.getElementById("percentage");

const parentName = document.getElementById("parentName");
const parentPhone = document.getElementById("parentPhone");

const studentPhoto = document.getElementById("studentPhoto");
const marksheet = document.getElementById("marksheet");

const terms = document.getElementById("terms");

const studentContainer =
    document.getElementById("studentContainer");


// ========================================
// ERROR FUNCTION
// ========================================

function showError(id, message) {
    document.getElementById(id).textContent = message;
}


// ========================================
// CLEAR ERRORS
// ========================================

function clearErrors() {

    const errors = document.querySelectorAll("small");

    errors.forEach(function (error) {
        error.textContent = "";
    });
}


// ========================================
// FORM SUBMIT
// ========================================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    clearErrors();

    let isValid = true;


    // ====================================
    // FIRST NAME
    // ====================================

    const firstNameValue = firstName.value.trim();

    if (firstNameValue === "") {

        showError(
            "firstNameError",
            "Please enter your first name."
        );

        isValid = false;

    } else if (firstNameValue.length < 2) {

        showError(
            "firstNameError",
            "First name must contain at least 2 characters."
        );

        isValid = false;
    }


    // ====================================
    // LAST NAME
    // ====================================

    const lastNameValue = lastName.value.trim();

    if (lastNameValue === "") {

        showError(
            "lastNameError",
            "Please enter your last name."
        );

        isValid = false;
    }


    // ====================================
    // EMAIL
    // ====================================

    const emailValue = email.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {

        showError(
            "emailError",
            "Please enter your email address."
        );

        isValid = false;

    } else if (!emailPattern.test(emailValue)) {

        showError(
            "emailError",
            "Please enter a valid email address."
        );

        isValid = false;
    }


    // ====================================
    // PHONE
    // ====================================

    const phoneValue = phone.value.trim();

    const phonePattern = /^[0-9]{10}$/;

    if (phoneValue === "") {

        showError(
            "phoneError",
            "Please enter your phone number."
        );

        isValid = false;

    } else if (!phonePattern.test(phoneValue)) {

        showError(
            "phoneError",
            "Phone number must contain exactly 10 digits."
        );

        isValid = false;
    }


    // ====================================
    // DATE OF BIRTH
    // ====================================

    const dobValue = dob.value;

    if (dobValue === "") {

        showError(
            "dobError",
            "Please select your date of birth."
        );

        isValid = false;
    }


    // ====================================
    // GENDER
    // ====================================

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

    if (!gender) {

        showError(
            "genderError",
            "Please select your gender."
        );

        isValid = false;
    }


    // ====================================
    // ADDRESS
    // ====================================

    const addressValue = address.value.trim();

    if (addressValue === "") {

        showError(
            "addressError",
            "Please enter your address."
        );

        isValid = false;

    } else if (addressValue.length < 10) {

        showError(
            "addressError",
            "Please enter a complete address."
        );

        isValid = false;
    }


    // ====================================
    // CITY
    // ====================================

    const cityValue = city.value.trim();

    if (cityValue === "") {

        showError(
            "cityError",
            "Please enter your city."
        );

        isValid = false;
    }


    // ====================================
    // STATE
    // ====================================

    const stateValue = state.value;

    if (stateValue === "") {

        showError(
            "stateError",
            "Please select your state."
        );

        isValid = false;
    }


    // ====================================
    // PINCODE
    // ====================================

    const pincodeValue = pincode.value.trim();

    const pincodePattern = /^[0-9]{6}$/;

    if (pincodeValue === "") {

        showError(
            "pincodeError",
            "Please enter your PIN code."
        );

        isValid = false;

    } else if (!pincodePattern.test(pincodeValue)) {

        showError(
            "pincodeError",
            "PIN code must contain exactly 6 digits."
        );

        isValid = false;
    }


    // ====================================
    // COURSE
    // ====================================

    const courseValue = course.value;

    if (courseValue === "") {

        showError(
            "courseError",
            "Please select a course."
        );

        isValid = false;
    }


    // ====================================
    // BRANCH
    // ====================================

    const branchValue = branch.value;

    if (branchValue === "") {

        showError(
            "branchError",
            "Please select your branch."
        );

        isValid = false;
    }


    // ====================================
    // QUALIFICATION
    // ====================================

    const qualificationValue =
        qualification.value;

    if (qualificationValue === "") {

        showError(
            "qualificationError",
            "Please select your previous qualification."
        );

        isValid = false;
    }


    // ====================================
    // PERCENTAGE
    // ====================================

    const percentageValue =
        percentage.value;

    if (percentageValue === "") {

        showError(
            "percentageError",
            "Please enter your percentage."
        );

        isValid = false;

    } else if (
        percentageValue < 0 ||
        percentageValue > 100
    ) {

        showError(
            "percentageError",
            "Percentage must be between 0 and 100."
        );

        isValid = false;
    }


    // ====================================
    // PARENT NAME
    // ====================================

    const parentNameValue =
        parentName.value.trim();

    if (parentNameValue === "") {

        showError(
            "parentNameError",
            "Please enter parent/guardian name."
        );

        isValid = false;
    }


    // ====================================
    // PARENT PHONE
    // ====================================

    const parentPhoneValue =
        parentPhone.value.trim();

    if (parentPhoneValue === "") {

        showError(
            "parentPhoneError",
            "Please enter parent phone number."
        );

        isValid = false;

    } else if (!phonePattern.test(parentPhoneValue)) {

        showError(
            "parentPhoneError",
            "Phone number must contain exactly 10 digits."
        );

        isValid = false;
    }


    // ====================================
    // STUDENT PHOTO
    // ====================================

    if (studentPhoto.files.length === 0) {

        showError(
            "photoError",
            "Please select a student photo."
        );

        isValid = false;
    }


    // ====================================
    // MARKSHEET
    // ====================================

    if (marksheet.files.length === 0) {

        showError(
            "marksheetError",
            "Please upload your previous marksheet."
        );

        isValid = false;
    }


    // ====================================
    // TERMS
    // ====================================

    if (!terms.checked) {

        showError(
            "termsError",
            "Please agree to the terms and conditions."
        );

        isValid = false;
    }


    // ====================================
    // STOP IF INVALID
    // ====================================

    if (!isValid) {
        return;
    }


    // ====================================
    // GET PHOTO
    // ====================================

    const photoFile =
        studentPhoto.files[0];

    const photoURL =
        URL.createObjectURL(photoFile);


    // ====================================
    // GET MARKSHEET
    // ====================================

    const marksheetFile =
        marksheet.files[0];

    const marksheetURL =
        URL.createObjectURL(marksheetFile);


    // ====================================
    // CREATE STUDENT CARD
    // ====================================

    const card =
        document.createElement("div");

    card.className = "student-card";


    card.innerHTML = `

        <img
            src="${photoURL}"
            alt="Student Photo"
            class="student-photo"
        >

        <h3>
            ${firstNameValue} ${lastNameValue}
        </h3>

        <p>
            <strong>Email:</strong>
            ${emailValue}
        </p>

        <p>
            <strong>Phone:</strong>
            ${phoneValue}
        </p>

        <p>
            <strong>Date of Birth:</strong>
            ${dobValue}
        </p>

        <p>
            <strong>Gender:</strong>
            ${gender.value}
        </p>

        <p>
            <strong>Address:</strong>
            ${addressValue}
        </p>

        <p>
            <strong>City:</strong>
            ${cityValue}
        </p>

        <p>
            <strong>State:</strong>
            ${stateValue}
        </p>

        <p>
            <strong>PIN Code:</strong>
            ${pincodeValue}
        </p>

        <p>
            <strong>Course:</strong>
            ${courseValue}
        </p>

        <p>
            <strong>Branch:</strong>
            ${branchValue}
        </p>

        <p>
            <strong>Previous Qualification:</strong>
            ${qualificationValue}
        </p>

        <p>
            <strong>Percentage:</strong>
            ${percentageValue}%
        </p>

        <p>
            <strong>Parent/Guardian:</strong>
            ${parentNameValue}
        </p>

        <p>
            <strong>Parent Phone:</strong>
            ${parentPhoneValue}
        </p>

        <p>
            <strong>Marksheet:</strong>

            <a
                href="${marksheetURL}"
                target="_blank"
            >
                View Marksheet
            </a>

        </p>

        <button
            type="button"
            class="delete-button"
        >
            Delete Student
        </button>

    `;


    // ====================================
    // ADD CARD
    // ====================================

    studentContainer.appendChild(card);


    // ====================================
    // DELETE BUTTON
    // ====================================

    const deleteButton =
        card.querySelector(".delete-button");

    deleteButton.addEventListener(
        "click",
        function () {

            card.remove();

        }
    );


    // ====================================
    // RESET FORM
    // ====================================

    form.reset();


    // ====================================
    // SUCCESS MESSAGE
    // ====================================

    alert("Student admission submitted successfully!");

});