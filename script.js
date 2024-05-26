function createInputFields(){

    const Heading = document.createElement('h1');
    Heading.innerHTML = "Survey Form Task";
    Heading.id = "title";

    const taskDescription = document.createElement('p');
    taskDescription.id = 'description';
    taskDescription.innerHTML = `<p><i>The data entered below gets updated in the table once 'Submit' button is clicked. Click on 'Reset' button if you wish to reset the table<i></p>`

    const form = document.createElement('form');
    form.className = 'survey-form';
    form.id = 'form';

    const formHolder = document.createElement('div');
    formHolder.className = "row form-group";
    form.append(Heading, taskDescription, formHolder);

    // First Name Details
    const firstNameColumn = document.createElement('div');
    firstNameColumn.className = 'custom-fields col-md-6';

    const firstName_label = document.createElement('label');
    firstName_label.className = 'form-label';
    firstName_label.setAttribute("for", "first_name");
    firstName_label.id = 'name-label';
    firstName_label.innerHTML = "First Name <span class = mandatory>*</span>";
    const inputTag_firstname = document.createElement('input');
    inputTag_firstname.className = 'form-control';
    inputTag_firstname.id = "first-name"
    inputTag_firstname.type = 'text';
    inputTag_firstname.required = 'Name input field should be required '
    inputTag_firstname.setAttribute("placeHolder", "Please enter your first name")
    inputTag_firstname.setAttribute("aria-label", "First Name")
    firstNameColumn.append(firstName_label, inputTag_firstname)

    //Last name Details
    const lastNameColumn = document.createElement('div');
    lastNameColumn.className = 'custom-fields col-md-6';

    const lastName_label = document.createElement('label');
    lastName_label.className = 'form-label';
    lastName_label.setAttribute("for", "last_name");
    lastName_label.innerHTML = "Last Name <span class = mandatory>*</span>";
    lastName_label.id = 'name-label';
    const inputTag_lastname = document.createElement('input');
    inputTag_lastname.className = 'form-control';
    inputTag_lastname.id = 'last-name';
    inputTag_lastname.type = 'text';
    inputTag_lastname.required = 'Name input field should be required '
    inputTag_lastname.setAttribute("placeHolder", "Please enter your last name")
    inputTag_lastname.setAttribute("aria-label", "Last Name")
    lastNameColumn.append(lastName_label, inputTag_lastname);

    //email
    const emailColumn = document.createElement('div');
    emailColumn.className = 'custom-fields col-12';

    const email_label = document.createElement('label');
    email_label.className = 'form-label';
    email_label.setAttribute("for", "email");
    email_label.innerHTML = "Email ID <span class = mandatory>*</span>";
    email_label.id = 'email-label';
    const inputTag_EmailID = document.createElement('input');
    inputTag_EmailID.className = 'form-control';
    inputTag_EmailID.id = 'email';
    inputTag_EmailID.type = 'email';
    inputTag_EmailID.required = 'Name input field should be required '
    inputTag_EmailID.setAttribute("placeHolder", "Something@example.com")
    inputTag_EmailID.setAttribute("aria-label", "email address")
    emailColumn.append(email_label, inputTag_EmailID)

    //Address1
    const addressOneColumn = document.createElement('div');
    addressOneColumn.className = 'custom-fields col-12';

    const addresOne_label = document.createElement('label');
    addresOne_label.className = 'form-label';

    addresOne_label.setAttribute("for", "address1");
    addresOne_label.innerHTML = "Address Line 1 <span class = mandatory>*</span>";
    const inputTag_AddressLineOne = document.createElement('textarea');
    inputTag_AddressLineOne.className = 'form-control';
    inputTag_AddressLineOne.id = 'address';
    inputTag_AddressLineOne.required = 'Name input field should be required '
    inputTag_AddressLineOne.setAttribute("placeHolder", "1234 Main St")
    inputTag_AddressLineOne.setAttribute("aria-label", "Address Line 1")
    addressOneColumn.append(addresOne_label, inputTag_AddressLineOne)


    //city
    const cityColumn = document.createElement("div");
    cityColumn.className = 'custom-fields col-md-6';

    const city_label = document.createElement('label');
    city_label.className = 'form-label';
    city_label.setAttribute("for", "city");
    city_label.innerHTML = "City <span class = mandatory>*</span>";
    const inputTag_city = document.createElement('input');
    inputTag_city.className = 'form-control';
    inputTag_city.id = 'City';
    inputTag_city.required = 'Name input field should be required '
    inputTag_city.setAttribute("placeHolder", "Please enter your last name")
    inputTag_city.setAttribute("aria-label", "Last Name")
    cityColumn.append(city_label, inputTag_city);

    //State
    const statesOfIndia = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
    ];
    const stateColumn = document.createElement("div");
    stateColumn.className = 'custom-fields col-md-4';

    const state_label = document.createElement('label');
    state_label.className = 'form-label';
    state_label.setAttribute("for", "state");
    state_label.innerHTML = "State <span class = mandatory>*</span>";
    const state_dropdown = document.createElement('select');
    state_dropdown.className = 'form-select';
    state_dropdown.id = "state-dropdown";
    state_dropdown.required = 'Name input field should be required '

    const default_state_option = document.createElement('option');
    default_state_option.textContent = "Select State";
    default_state_option.value = "";
    default_state_option.disabled = true;
    default_state_option.selected = true;
    state_dropdown.append(default_state_option);

    statesOfIndia.forEach(state =>{
        const option = document.createElement('option');
        option.value= state.toLowerCase();
        option.textContent = state;
        state_dropdown.append(option);
    })

    stateColumn.append(state_label, state_dropdown)
   
     //pincode
     const pincodeColumn = document.createElement("div");
     pincodeColumn.className = 'custom-fields col-md-2';
 
     const pincode_label = document.createElement('label');
     pincode_label.className = 'form-label';
     pincode_label.setAttribute("for", "pincode");
     pincode_label.innerHTML = "Pin Code <span class = mandatory>*</span>";
     const inputTag_pinCode = document.createElement('input');
     inputTag_pinCode.className = 'form-control';
     inputTag_pinCode.id = 'pincode';
     inputTag_pinCode.required = 'Name input field should be required '
     inputTag_pinCode.setAttribute("placeHolder", "123456")
     inputTag_pinCode.setAttribute("aria-label", "pin code")
     pincodeColumn.append(pincode_label, inputTag_pinCode);

    //  country
    const countryColumn = document.createElement("div");
    countryColumn.className = 'custom-fields col-md-6';

    const country_label = document.createElement('label');
    country_label.className = 'form-label';
    country_label.setAttribute("for", "country");
    country_label.innerHTML = "Country <span class = mandatory>*</span>";
    const inputTag_country = document.createElement('input');
    inputTag_country.className = 'form-control';
    inputTag_country.id = 'country';
    inputTag_country.required = 'Name input field should be required '
    inputTag_country.setAttribute("placeHolder", "India")
    inputTag_country.setAttribute("aria-label", "Last Name")
    countryColumn.append(country_label, inputTag_country);

    //  GenderDropdown
    const genders = ["Male", "Female", "Other"];
    const genderColumn = document.createElement("div");
    genderColumn.className = 'custom-fields col-md-6';

    const gender_label_container = document.createElement('div');
    gender_label_container.className = 'custom-fields'
    gender_label_container.ariaRequired = 'Name input field should be required '
    const gender_label = document.createElement('label');
    gender_label.className = 'form-label';
    gender_label.setAttribute("for", "gender");
    gender_label.innerHTML = "Gender <span class = mandatory>*</span>";
    gender_label_container.append(gender_label);
    genderColumn.append(gender_label_container);

    for(let i = 0; i<genders.length; i++){
        const genderContainer = document.createElement('div');
        genderContainer.className = "form-check form-check-inline";
        genderContainer.innerHTML = 
                `<input class="form-check-input" type="radio" name="gender" id="inlineCheckbox${i+1}" value="${genders[i]}">
                <label class="form-check-label" for="inlineCheckbox${i+1}">${genders[i]}</label>`;
            genderColumn.append(genderContainer);
    }
    

    // choice of food
    const food_choice = ["Impure Veg", "Pure Non-Veg", "Red Meat", "White Meat", "Drinks", "Banned Vegetables"];
    const foodChoiceColumn = document.createElement("div");
    foodChoiceColumn.className = 'custom-fields col-12';
    foodChoiceColumn.id = 'choiceOfFood';
    const foodChoice_label = document.createElement('label');
    const foodChoice_labelContainer = document.createElement("div");
    foodChoice_label.className = 'form-label';
    foodChoice_label.setAttribute("for", "food Choice");
    foodChoice_label.innerHTML = "Choice of Food (Select at least 2) <span class = mandatory>*</span>";
    foodChoice_labelContainer.append(foodChoice_label);
    foodChoiceColumn.append(foodChoice_labelContainer);

    for(let i = 0; i<food_choice.length; i++){
        const foodChoiceContainer = document.createElement('div');
        foodChoiceContainer.className = "form-check form-check-inline";
        foodChoiceContainer.innerHTML = 
                `<input class="form-check-input" type="checkbox" name="food" id="inlineCheckbox${i+1}" value="${food_choice[i]}">
                <label class="form-check-label" for="inlineCheckbox${i+1}">${food_choice[i]}</label>`;
        foodChoiceColumn.append(foodChoiceContainer);
    }

    //Comments
    const CommentsColumn = document.createElement('div');
    CommentsColumn.className = 'custom-fields col-12';

    const comments_label = document.createElement('label');
    comments_label.className = 'form-label';

    comments_label.setAttribute("for", "address1");
    comments_label.innerHTML = "Comments";
    const inputTag_comments = document.createElement('textarea');
    inputTag_comments.className = 'form-control';
    inputTag_comments.id = 'comments';
    inputTag_comments.setAttribute("placeHolder", "Additional inputs")
    inputTag_comments.setAttribute("aria-label", "Address Line 1")
    CommentsColumn.append(comments_label, inputTag_comments)


    const buttonsColumn = document.createElement("div");
    buttonsColumn.className = 'custom-fields col-md-12';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'submit';
    submitButton.className = 'btn btn-primary btn-dark custom-fields col-3';
    submitButton.innerHTML = 'Submit';

    const resetButton = document.createElement('button');
    resetButton.type = 'reset';
    resetButton.id = 'reset';
    resetButton.className = 'btn btn-dark custom-fields col-3';
    resetButton.innerHTML = 'Reset';

    buttonsColumn.append(submitButton, resetButton);

    //Appending Details
    formHolder.append(firstNameColumn, lastNameColumn, emailColumn, addressOneColumn, 
        cityColumn, stateColumn, pincodeColumn, countryColumn, genderColumn, foodChoiceColumn, CommentsColumn, buttonsColumn);
    document.body.append(form);
}

function createTableHeaders(){
    const tableHolder = document.createElement('div');
    tableHolder.className = "table";


    const masterTable = document.createElement("table");
    masterTable.className = 'table table-bordered table-success';
    masterTable.id = "table"
    

    const tableHeader = document.createElement("thead");
    const tableBody = document.createElement("tbody");
    
    
    const tableRow = document.createElement("tr");
    tableRow.className = "table-active";

    const tableHeaderData_ID = document.createElement('th');
    tableHeaderData_ID.setAttribute("scope", "col");
    tableHeaderData_ID.innerHTML = "#"

    const tableHeaderData_firstName = document.createElement('th');
    tableHeaderData_firstName.setAttribute("scope", "col");
    tableHeaderData_firstName.innerHTML = "First Name"

    const tableHeaderData_lastName = document.createElement('th');
    tableHeaderData_lastName.setAttribute("scope", "col");
    tableHeaderData_lastName.innerHTML = "Last Name"

    const tableHeaderData_email = document.createElement('th');
    tableHeaderData_email.setAttribute("scope", "col");
    tableHeaderData_email.innerHTML = "Email"

    const tableHeaderData_Address = document.createElement('th');
    tableHeaderData_Address.setAttribute("scope", "col");
    tableHeaderData_Address.innerHTML = "Address"

    const tableHeaderData_pincode = document.createElement('th');
    tableHeaderData_pincode.setAttribute("scope", "col");
    tableHeaderData_pincode.innerHTML = "PinCode"

    const tableHeaderData_gender = document.createElement('th');
    tableHeaderData_gender.setAttribute("scope", "col");
    tableHeaderData_gender.innerHTML = "Gender"

    const tableHeaderData_food = document.createElement('th');
    tableHeaderData_food.setAttribute("scope", "col");
    tableHeaderData_food.innerHTML = "Food"

    const tableHeaderData_state = document.createElement('th');
    tableHeaderData_state.setAttribute("scope", "col");
    tableHeaderData_state.innerHTML = "State"

    const tableHeaderData_country = document.createElement('th');
    tableHeaderData_country.setAttribute("scope", "col");
    tableHeaderData_country.innerHTML = "Country"

    const tableHeaderData_comments = document.createElement('th');
    tableHeaderData_comments.setAttribute("scope", "col");
    tableHeaderData_comments.innerHTML = "Comments"

    tableHolder.append(masterTable);
    masterTable.append(tableHeader, tableBody);
    tableHeader.append(tableRow);
    tableRow.append(tableHeaderData_firstName, tableHeaderData_lastName, tableHeaderData_email, tableHeaderData_Address, tableHeaderData_pincode,
        tableHeaderData_gender, tableHeaderData_food, tableHeaderData_state, tableHeaderData_country, tableHeaderData_comments
    );
    document.body.append(tableHolder);

}

function updateTableData(){
    document.getElementById('form').addEventListener('submit', function(event){
        event.preventDefault();
        

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email =  document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('City').value;
        const state = document.getElementById('state-dropdown').value;
        const pincode = document.getElementById('pincode').value;
        const country = document.getElementById('country').value;
        
        const gender = document.querySelector('input[name="gender"]:checked').value;

        const foodChoices = [];
        document.querySelectorAll('input[name="food"]:checked').forEach((checkbox) => {
                foodChoices.push(checkbox.value);
        });

        const comments = document.getElementById('comments').value;

        const tableBody = document.getElementById('table').querySelector('tbody');
        const newRow = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const lastNameCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const addressCell = document.createElement('td');
        const pincodeCell = document.createElement('td');
        const genderCell = document.createElement('td');
        const foodChoicesCell = document.createElement('td');
        const stateCell = document.createElement('td');
        const countryCell = document.createElement('td');
        const commentsCell = document.createElement('td');

        firstNameCell.textContent = firstName;
        lastNameCell.textContent = lastName;
        emailCell.textContent = email;
        addressCell.textContent = `${address}, ${city}`;
        pincodeCell.textContent = pincode;
        genderCell.textContent = gender;
        foodChoicesCell.textContent = foodChoices.join(', ');
        stateCell.textContent = state;
        countryCell.textContent = country;
        commentsCell.textContent = comments;

        newRow.append(firstNameCell, lastNameCell, emailCell,
                addressCell, pincodeCell, genderCell, foodChoicesCell,
                stateCell, countryCell, commentsCell
        );

        tableBody.append(newRow);

        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('address').value = '';

        document.getElementById('City').value = '';
        document.getElementById('state-dropdown').value = '';
        document.getElementById('pincode').value = '';
        document.getElementById('country').value = '';
        document.querySelector('input[name="gender"]:checked').checked = false;
        document.querySelectorAll('input[name="food"]:checked').forEach((checkbox) => {
            checkbox.checked = false;
        });
        document.getElementById('comments').value = '';
    });
}

function resetTableData(){
    document.getElementById('reset').addEventListener('click', function() {
        const tableBody = document.getElementById('table').querySelector('tbody');

        tableBody.innerHTML = '';
    });
}

createInputFields();
createTableHeaders();
updateTableData();
resetTableData();