console.clear();

if(document.cookie.indexOf(',counter=')>=0)
{
    let counter = document.cookie.split(',')[1].split('=')[1]
    document.getElementById("badge").innerHTML = counter
}


let cartContainer = document.getElementById('cartContainer')

let boxContainerDiv = document.createElement('div')
boxContainerDiv.id = 'boxContainer'

// DYNAMIC CODE TO SHOW THE SELECTED ITEMS IN YOUR CART
function dynamicCartSection(ob,itemCounter)
{
    let boxDiv = document.createElement('div')
    boxDiv.id = 'box'
    boxContainerDiv.appendChild(boxDiv)

    let boxImg = document.createElement('img')
    boxImg.src = ob.preview
    boxDiv.appendChild(boxImg)

    let boxh3 = document.createElement('h3')
    let h3Text = document.createTextNode(ob.name + ' × ' + itemCounter)
    // let h3Text = document.createTextNode(ob.name)
    boxh3.appendChild(h3Text)
    boxDiv.appendChild(boxh3)

    let boxh4 = document.createElement('h4')
    let h4Text = document.createTextNode('Amount: Rs' + ob.price)
    boxh4.appendChild(h4Text)
    boxDiv.appendChild(boxh4)

    // console.log(boxContainerDiv);

    buttonLink.appendChild(buttonText)
    cartContainer.appendChild(boxContainerDiv)
    cartContainer.appendChild(totalContainerDiv)
    // let cartMain = document.createElement('div')
    // cartmain.id = 'cartMainContainer'
    // cartMain.appendChild(totalContainerDiv)

    return cartContainer
}

let totalContainerDiv = document.createElement('div')
totalContainerDiv.id = 'totalContainer'

let totalDiv = document.createElement('div')
totalDiv.id = 'total'
totalContainerDiv.appendChild(totalDiv)

let totalh2 = document.createElement('h2')
let h2Text = document.createTextNode('Total Amount')
totalh2.appendChild(h2Text)
totalDiv.appendChild(totalh2)

// TO UPDATE THE TOTAL AMOUNT
function amountUpdate(amount)
{
    let totalh4 = document.createElement('h4')
    // let totalh4Text = document.createTextNode(amount)
    let totalh4Text = document.createTextNode('Amount: Rs ' + amount)
    totalh4Text.id = 'toth4'
    totalh4.appendChild(totalh4Text)
    totalDiv.appendChild(totalh4)
    totalDiv.appendChild(buttonDiv)
    console.log(totalh4);
}


let buttonDiv = document.createElement('div')
buttonDiv.id = 'button'
totalDiv.appendChild(buttonDiv)

let buttonTag = document.createElement('button')
buttonDiv.appendChild(buttonTag)

let buttonLink = document.createElement('a')
// buttonLink.href = '/orderPlaced.html?'
buttonTag.appendChild(buttonLink)

buttonText = document.createTextNode('Payment')
buttonTag.onclick = function()
{
    payment()
    console.log("clicked")
}

function payment() {
    totalDiv.style = "display: none"
    let paymentContainer = document.createElement("div")
    paymentContainer.id = "paymentContainer"
    totalContainerDiv.appendChild(paymentContainer)

    let heading = document.createElement("div")
    heading.className = "heading"
    let head = document.createElement('h2')
    let headNode = document.createTextNode("Pay with card")
    head.appendChild(headNode)
    heading.appendChild(head)

    let email = document.createElement("div")
    email.className = "inputBox"
    let emailPara1 = document.createElement("p")
    let emailNode1 = document.createTextNode("Email")
    emailPara1.appendChild(emailNode1)
    let emailInput = document.createElement("input")
    emailInput.type = "text"
    emailInput.name = "email"
    emailInput.id = "email"
    emailInput.placeholder = "Email"
    let emailLink = document.createElement("a")
    emailLink.href = "#"
    let emailLinkNode = document.createTextNode("@live.com")
    emailLink.appendChild(emailLinkNode)
    let emailPara2 = document.createElement("p")
    let emailNode2 = document.createTextNode("Did you mean")
    emailPara2.appendChild(emailNode2)
    emailPara2.appendChild(emailLink)
    email.appendChild(emailPara1)
    email.appendChild(emailInput)
    email.appendChild(emailPara2)

    let card = document.createElement("div")
    card.className = "inputBox"
    let cardPara = document.createElement("p")
    let cardNode = document.createTextNode("Card information")
    cardPara.appendChild(cardNode)
    let cardnoInput = document.createElement("input")
    cardnoInput.type = "tel"
    cardnoInput.maxLength = "19"
    cardnoInput.name = "cardno"
    cardnoInput.id = "cardno"
    cardnoInput.placeholder = "Card number"
    cardnoInput.oninput = function(e){
        cardno = document.getElementById('cardno')
        if(cardno.value.length==4){
            cardno.value = cardno.value + " "
        }
        if(cardno.value.length==9){
            cardno.value = cardno.value + " "
        }
        if(cardno.value.length==14){
            cardno.value = cardno.value + " "
        }
    }
    let datesInput = document.createElement("input")
    datesInput.type = "text"
    datesInput.name = "dates"
    datesInput.id = "dates"
    datesInput.maxLength = "5"
    datesInput.placeholder = "MM/YY"
    datesInput.oninput = function(e){
        date = document.getElementById("dates")
        if(date.value.length==2){
            date.value = date.value + "/"
        }
    }
    let cvcInput = document.createElement("input")
    cvcInput.type = "text"
    cvcInput.name = "cvc"
    cvcInput.id = "cvc"
    cvcInput.maxLength = "3"
    cvcInput.placeholder = "CVC"
    cvcInput.onkeypress = function(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
    card.appendChild(cardPara)
    card.appendChild(cardnoInput)
    card.appendChild(datesInput)
    card.appendChild(cvcInput)

    let nameOnCard = document.createElement("div")
    nameOnCard.className = "inputBox"
    let nameOnCardPara = document.createElement("p")
    let nameOnCardNode = document.createTextNode("Name on card")
    nameOnCardPara.appendChild(nameOnCardNode)
    let nameOnCardInput = document.createElement("input")
    nameOnCardInput.type = "text"
    nameOnCardInput.name = "name"
    nameOnCardInput.id = "name"
    nameOnCardInput.placeholder = "Name"
    nameOnCard.appendChild(nameOnCardPara)
    nameOnCard.appendChild(nameOnCardInput)

    let bill = document.createElement("div")
    bill.className = "inputBox"
    let billPara = document.createElement("p")
    let billNode = document.createTextNode("Billing address")
    billPara.appendChild(billNode)
    bill.appendChild(billPara)
    let select = document.createElement("select")
    select.name = "country"
    select.id = "country"
    let values = ["default", "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "XK", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "CS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"]
    let country = ["select country", "Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", 
        "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", 
        "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
        "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Sint Eustatius and Saba", 
        "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", 
        "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, Democratic Republic of the Congo", 
        "Cook Islands", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", 
        "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", 
        "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and Mcdonald Islands", "Holy See (Vatican City State", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of", 
        "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", 
        "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia, the Former Yugoslav Republic of", "Madagascar", "Malawi", 
        "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", 
        "Moldova, Republic of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", 
        "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", 
        "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", 
        "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", 
        "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", 
        "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy", "Saint Helena", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", 
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Serbia and Montenegro", 
        "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", 
        "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", 
        "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", 
        "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", 
        "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
        "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", 
        "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands, British", 
        "Virgin Islands, U.s", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"
    ]
    for(let i=0; i<country.length; i++){
        let option = document.createElement("option")
        option.value = values[i]
        option.text = country[i]
        select.appendChild(option)
    }
    bill.appendChild(select)
    let billAddr1 = document.createElement("input")
    billAddr1.type = "text"
    billAddr1.name = "addr1"
    billAddr1.id = "addr1"
    billAddr1.placeholder = "Address Line 1"
    let billAddr2 = document.createElement("input")
    billAddr2.type = "text"
    billAddr2.name = "addr2"
    billAddr2.id = "addr2"
    billAddr2.placeholder = "Address Line 2"
    let billCity = document.createElement("input")
    billCity.type = "text"
    billCity.name = "city"
    billCity.id = "city"
    billCity.placeholder = "City"
    let billPin = document.createElement("input")
    billPin.type = "tel"
    billPin.onkeypress = function(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
    billPin.maxLength = "6"
    billPin.name = "pin"
    billPin.id = "pin"
    billPin.placeholder = "Pin"
    let billState = document.createElement("input")
    billState.type = "text"
    billState.name = "states"
    billState.id = "states"
    billState.placeholder = "State"
    bill.appendChild(billAddr1)
    bill.appendChild(billAddr2)
    bill.appendChild(billCity)
    bill.appendChild(billPin)
    bill.appendChild(billState)

    let btn = document.createElement("div")
    btn.className = "btn"
    let btnBtn = document.createElement("button")
    let btnNode = document.createTextNode("Place order")
    btnBtn.onclick = function () {
        pay()
    }
    btnBtn.appendChild(btnNode)
    btn.appendChild(btnBtn)

    paymentContainer.appendChild(heading)
    paymentContainer.appendChild(email)
    paymentContainer.appendChild(card)
    paymentContainer.appendChild(nameOnCard)
    paymentContainer.appendChild(bill)
    paymentContainer.appendChild(btn)
}

function pay(){
    let getEmail = document.getElementById('email')
    let getcardno = document.getElementById('cardno')
    let getdates = document.getElementById('dates')
    let getcvc = document.getElementById('cvc')
    let getname = document.getElementById('name')
    let getcountry = document.getElementById('country')
    let getaddr1 = document.getElementById('addr1')
    let getcity = document.getElementById('city')
    let getpin = document.getElementById('pin')
    let getstate = document.getElementById('states')
    console.log(getcountry.value)
    
    let pass = true
    if(getEmail.value == ""){
        alert("Email not field")
        pass = false
    } else if(getcardno.value == ""){
        alert("Card not field")
        pass = false
    } else if(getdates.value == ""){
        alert("Dates not field")
        pass = false
    } else if(getcvc.value == ""){
        alert("CVC not field")
        pass = false
    } else if(getname.value == ""){
        alert("Name not field")
        pass = false
    } else if(getcountry.value == "default"){
        alert("Select your country")
        pass = false
    } else if(getaddr1.value == ""){
        alert("Address not field")
        pass = false
    } else if(getcity.value == ""){
        alert("City not field")
        pass = false
    } else if(getpin.value == ""){
        alert("Pin not field")
        pass = false
    } else if(getstate.value == ""){
        alert("States not field")
        pass = false
    }
    if(pass == true){
        location.href = "/orderPlaced.html?"
    }
}


//dynamicCartSection()
// console.log(dynamicCartSection());

// BACKEND CALL
let httpRequest = new XMLHttpRequest()
let totalAmount = 0
httpRequest.onreadystatechange = function()
{
    if(this.readyState === 4)
    {
        if(this.status == 200)
        {
            // console.log('call successful');
            contentTitle = JSON.parse(this.responseText)

            let counter = Number(document.cookie.split(',')[1].split('=')[1])
            document.getElementById("totalItem").innerHTML = ('Total Items: ' + counter)

            let item = document.cookie.split(',')[0].split('=')[1].split(" ")
            console.log(counter)
            console.log(item)

            let i;
            let totalAmount = 0
            for(i=0; i<counter; i++)
            {
                let itemCounter = 1
                for(let j = i+1; j<counter; j++)
                {   
                    if(Number(item[j]) == Number(item[i]))
                    {
                        itemCounter +=1;
                    }
                }
                totalAmount += Number(contentTitle[item[i]-1].price) * itemCounter
                dynamicCartSection(contentTitle[item[i]-1],itemCounter)
                i += (itemCounter-1)
            }
            amountUpdate(totalAmount)
        }
    }
        else
        {
            console.log('call failed!');
        }
}

httpRequest.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product', true)
httpRequest.send()




