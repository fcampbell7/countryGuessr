//Current Bugs:
//- When you go back into a country it appends another table
//- Properly center the input and score divs

//Features to be implemented
// - Timer
// - Give up/end game + show missed answers in red
//- Name variations e.g. United Kingdom vs UK
//  - Accents and special chars in country names e.g. Cote D'Ivore
//- World category

let score = 0;

//----------------
//Europe Functions
//----------------

function loadEuropeTable(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

    document.getElementById("europeGrid").style.display = "block";
    document.getElementById("asiaGrid").style.display = "none";
    document.getElementById("africaGrid").style.display = "none";
    document.getElementById("oceaniaGrid").style.display = "none";
    document.getElementById("naGrid").style.display = "none";
    document.getElementById("saGrid").style.display = "none";

    const countries = ['Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican'];
    
    const countryLabels = ['🇦🇱 Albania', '🇦🇩 Andorra', '🇦🇹 Austria', '🇧🇾 Belarus', '🇧🇪 Belgium', '🇧🇦 Bosnia and Herzegovina', '🇧🇬 Bulgaria', '🇭🇷 Croatia', '🇨🇾 Cyprus', '🇨🇿 Czechia', '🇩🇰 Denmark', '🇪🇪 Estonia', '🇫🇮 Finland', '🇫🇷 France', '🇩🇪 Germany', '🇬🇷 Greece', '🇭🇺 Hungary', '🇮🇸 Iceland', '🇮🇪 Ireland', '🇮🇹 Italy', '🇽🇰 Kosovo', '🇱🇻 Latvia', '🇱🇮 Liechtenstein', '🇱🇹 Lithuania', '🇱🇺 Luxembourg', '🇲🇹 Malta', '🇲🇩 Moldova', '🇲🇨 Monaco', '🇲🇪 Montenegro', '🇳🇱 Netherlands', '🇲🇰 North Macedonia', '🇳🇴 Norway', '🇵🇱 Poland', '🇵🇹 Portugal', '🇷🇴 Romania', '🇷🇺 Russia', '🇸🇲 San Marino', '🇷🇸 Serbia', '🇸🇰 Slovakia', '🇸🇮 Slovenia', '🇪🇸 Spain', '🇸🇪 Sweden', '🇨🇭 Switzerland', '🇹🇷 Turkey', '🇺🇦 Ukraine', '🇬🇧 United Kingdom', '🇻🇦 Vatican'] ;
    loadTable(countries, countryLabels, "europe");

    let total = countries.length;

    //configure scorebar
    score = 0;
    document.getElementById("score").innerHTML= score + "/" + total;
    document.getElementById("regionTitle").innerHTML= "Europe"; 

    let btn = document.getElementById("europeInput");
    btn.addEventListener("keypress", function(e){
        if (e.key == "Enter"){
            e.preventDefault();
            document.getElementById("europeBtn").click();
        }
    });
};

function checkEurope(){
    const countries = ['Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican'];
    checkCountry(countries, "europeInput");   
};

//----------------
//Asia Functions
//----------------

function loadAsiaTable(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

    document.getElementById("europeGrid").style.display = "none";
    document.getElementById("asiaGrid").style.display = "block";
    document.getElementById("africaGrid").style.display = "none";
    document.getElementById("oceaniaGrid").style.display = "none";
    document.getElementById("naGrid").style.display = "none";
    document.getElementById("saGrid").style.display = "none";

    const countries = ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Palestine', 'Syria', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen'];
    
    const countryLabels = ['🇦🇫 Afghanistan', '🇦🇲 Armenia', '🇦🇿 Azerbaijan', '🇧🇭 Bahrain', '🇧🇩 Bangladesh', '🇧🇹 Bhutan', '🇧🇳 Brunei', '🇰🇭 Cambodia', '🇨🇳 China', '🇬🇪 Georgia', '🇮🇳 India', '🇮🇩 Indonesia', '🇮🇷 Iran', '🇮🇶 Iraq', '🇮🇱 Israel', '🇯🇵 Japan', '🇯🇴 Jordan', '🇰🇿 Kazakhstan', '🇰🇼 Kuwait', '🇰🇬 Kyrgyzstan', '🇱🇦 Laos', '🇱🇧 Lebanon', '🇲🇾 Malaysia', '🇲🇻 Maldives', '🇲🇳 Mongolia', '🇲🇲 Myanmar', '🇳🇵 Nepal', '🇰🇵 North Korea', '🇴🇲 Oman', '🇵🇰 Pakistan', '🇵🇭 Philippines', '🇶🇦 Qatar', '🇸🇦 Saudi Arabia', '🇸🇬 Singapore', '🇰🇷 South Korea', '🇱🇰 Sri Lanka', '🇵🇸 Palestine', '🇸🇾 Syria', '🇹🇼 Taiwan', '🇹🇯 Tajikistan', '🇹🇭 Thailand', '🇹🇱 Timor-Leste', '🇹🇲 Turkmenistan', '🇦🇪 United Arab Emirates', '🇺🇿 Uzbekistan', '🇻🇳 Vietnam', '🇾🇪 Yemen'];
    loadTable(countries, countryLabels, "asia");

    let total = countries.length;

    //configure scorebar
    score = 0;
    document.getElementById("score").innerHTML= score + "/" + total;
    document.getElementById("regionTitle").innerHTML= "Asia"; 

    let btn = document.getElementById("asiaInput");
    btn.addEventListener("keypress", function(e){
        if (e.key == "Enter"){
            e.preventDefault();
            document.getElementById("asiaBtn").click();
        }
    });
};

function checkAsia(){
    const countries = ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Palestine', 'Syria', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen'];
    checkCountry(countries, "asiaInput");   
};

//----------------
//Africa Functions
//----------------

function loadAfricaTable(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

    document.getElementById("europeGrid").style.display = "none";
    document.getElementById("asiaGrid").style.display = "none";
    document.getElementById("africaGrid").style.display = "block";
    document.getElementById("oceaniaGrid").style.display = "none";
    document.getElementById("naGrid").style.display = "none";
    document.getElementById("saGrid").style.display = "none";

    const countries = ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon', 'Cape Verde', 'Central African Republic', 'Chad', 'Comoros', 'Congo', 'Djibouti', 'DR Congo', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'];
    
    const countryLabels = ['🇩🇿 Algeria', '🇦🇴 Angola', '🇧🇯 Benin', '🇧🇼 Botswana', '🇧🇫 Burkina Faso', '🇧🇮 Burundi', '🇨🇲 Cameroon', '🇨🇻 Cape Verde', '🇨🇫 Central African Republic', '🇹🇩 Chad', '🇰🇲 Comoros', '🇨🇬 Congo', '🇩🇯 Djibouti', '🇨🇩 DR Congo', '🇪🇬 Egypt', '🇬🇶 Equatorial Guinea', '🇪🇷 Eritrea', '🇸🇿 Eswatini', '🇪🇹 Ethiopia', '🇬🇦 Gabon', '🇬🇲 Gambia', '🇬🇭 Ghana', '🇬🇳 Guinea', '🇬🇼 Guinea-Bissau', '🇨🇮 Ivory Coast', '🇰🇪 Kenya', '🇱🇸 Lesotho', '🇱🇷 Liberia', '🇱🇾 Libya', '🇲🇬 Madagascar', '🇲🇼 Malawi', '🇲🇱 Mali', '🇲🇷 Mauritania', '🇲🇺 Mauritius', '🇲🇦 Morocco', '🇲🇿 Mozambique', '🇳🇦 Namibia', '🇳🇪 Niger', '🇳🇬 Nigeria', '🇷🇼 Rwanda', '🇸🇹 Sao Tome and Principe', '🇸🇳 Senegal', '🇸🇨 Seychelles', '🇸🇱 Sierra Leone', '🇸🇴 Somalia', '🇿🇦 South Africa', '🇸🇸 South Sudan', '🇸🇩 Sudan', '🇹🇿 Tanzania', '🇹🇬 Togo', '🇹🇳 Tunisia', '🇺🇬 Uganda', '🇿🇲 Zambia', '🇿🇼 Zimbabwe'];
    loadTable(countries, countryLabels, "africa");

    let total = countries.length;

    //configure scorebar
    score = 0;
    document.getElementById("score").innerHTML= score + "/" + total;
    document.getElementById("regionTitle").innerHTML= "Africa"; 

    let btn = document.getElementById("africaInput");
    btn.addEventListener("keypress", function(e){
        if (e.key == "Enter"){
            e.preventDefault();
            document.getElementById("africaBtn").click();
        }
    });
};

function checkAfrica(){
    const countries = ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon', 'Cape Verde', 'Central African Republic', 'Chad', 'Comoros', 'Congo', 'Djibouti', 'DR Congo', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'];
    checkCountry(countries, "africaInput");   
};

//----------------
//Oceania Functions
//----------------

function loadOceaniaTable(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

    document.getElementById("europeGrid").style.display = "none";
    document.getElementById("asiaGrid").style.display = "none";
    document.getElementById("africaGrid").style.display = "none";
    document.getElementById("oceaniaGrid").style.display = "block";
    document.getElementById("naGrid").style.display = "none";
    document.getElementById("saGrid").style.display = "none";

    const countries = ['Australia', 'Fiji', 'Kiribati', 'Marshall Islands', 'Micronesia', 'Nauru', 'New Zealand', 'Palau', 'Papua New Guinea', 'Samoa', 'Solomon Islands', 'Tonga', 'Tuvalu', 'Vanuatu'];
    
    const countryLabels = ['🇦🇺 Australia', '🇫🇯 Fiji', '🇰🇮 Kiribati', '🇲🇭 Marshall Islands', '🇫🇲 Micronesia', '🇳🇷 Nauru', '🇳🇿 New Zealand', '🇵🇼 Palau', '🇵🇬 Papua New Guinea', '🇼🇸 Samoa', '🇸🇧 Solomon Islands', '🇹🇴 Tonga', '🇹🇻 Tuvalu', '🇻🇺 Vanuatu'];
    loadTable(countries, countryLabels, "oceania");

    let total = countries.length;

    //configure scorebar
    score = 0;
    document.getElementById("score").innerHTML= score + "/" + total;
    document.getElementById("regionTitle").innerHTML= "Oceania"; 

    let btn = document.getElementById("oceaniaInput");
    btn.addEventListener("keypress", function(e){
        if (e.key == "Enter"){
            e.preventDefault();
            document.getElementById("oceaniaBtn").click();
        }
    });
};

function checkOceania(){
    const countries = ['Australia', 'Fiji', 'Kiribati', 'Marshall Islands', 'Micronesia', 'Nauru', 'New Zealand', 'Palau', 'Papua New Guinea', 'Samoa', 'Solomon Islands', 'Tonga', 'Tuvalu', 'Vanuatu'];
    checkCountry(countries, "oceaniaInput");   
};

//----------------
//North America Functions
//----------------

function loadNATable(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

    document.getElementById("europeGrid").style.display = "none";
    document.getElementById("asiaGrid").style.display = "none";
    document.getElementById("africaGrid").style.display = "none";
    document.getElementById("oceaniaGrid").style.display = "none";
    document.getElementById("naGrid").style.display = "block";
    document.getElementById("saGrid").style.display = "none";

    const countries = ['Antigua and Barbuda', 'Bahamas', 'Barbados', 'Belize', 'Canada', 'Costa Rica', 'Cuba', 'Dominica', 'Dominican Republic', 'El Salvador', 'Grenada', 'Guatemala', 'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Nicaragua', 'Panama', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Trinidad and Tobago', 'United States'];
    
    const countryLabels = ['🇦🇬 Antigua and Barbuda', '🇧🇸 Bahamas', '🇧🇧 Barbados', '🇧🇿 Belize', '🇨🇦 Canada', '🇨🇷 Costa Rica', '🇨🇺 Cuba', '🇩🇲 Dominica', '🇩🇴 Dominican Republic', '🇸🇻 El Salvador', '🇬🇩 Grenada', '🇬🇹 Guatemala', '🇭🇹 Haiti', '🇭🇳 Honduras', '🇯🇲 Jamaica', '🇲🇽 Mexico', '🇳🇮 Nicaragua', '🇵🇦 Panama', '🇰🇳 Saint Kitts and Nevis', '🇱🇨 Saint Lucia', '🇻🇨 Saint Vincent and the Grenadines', '🇹🇹 Trinidad and Tobago', '🇺🇸 United States'];
    loadTable(countries, countryLabels, "na");

    let total = countries.length;

    //configure scorebar
    score = 0;
    document.getElementById("score").innerHTML= score + "/" + total;
    document.getElementById("regionTitle").innerHTML= "North America"; 

    let btn = document.getElementById("naInput");
    btn.addEventListener("keypress", function(e){
        if (e.key == "Enter"){
            e.preventDefault();
            document.getElementById("naBtn").click();
        }
    });
};

function checkNA(){
    const countries = ['Antigua and Barbuda', 'Bahamas', 'Barbados', 'Belize', 'Canada', 'Costa Rica', 'Cuba', 'Dominica', 'Dominican Republic', 'El Salvador', 'Grenada', 'Guatemala', 'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Nicaragua', 'Panama', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Trinidad and Tobago', 'United States'];
    checkCountry(countries, "naInput");   
};

//----------------
//South America Functions
//----------------

function loadSATable(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

    document.getElementById("europeGrid").style.display = "none";
    document.getElementById("asiaGrid").style.display = "none";
    document.getElementById("africaGrid").style.display = "none";
    document.getElementById("oceaniaGrid").style.display = "none";
    document.getElementById("naGrid").style.display = "none";
    document.getElementById("saGrid").style.display = "block";

    const countries = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela'];
    
    const countryLabels = ['🇦🇷 Argentina', '🇧🇴 Bolivia', '🇧🇷 Brazil', '🇨🇱 Chile', '🇨🇴 Colombia', '🇪🇨 Ecuador', '🇬🇾 Guyana', '🇵🇾 Paraguay', '🇵🇪 Peru', '🇸🇷 Suriname', '🇺🇾 Uruguay', '🇻🇪 Venezuela'];
    loadTable(countries, countryLabels, "sa");

    let total = countries.length;

    //configure scorebar
    score = 0;
    document.getElementById("score").innerHTML= score + "/" + total;
    document.getElementById("regionTitle").innerHTML= "South America"; 

    let btn = document.getElementById("saInput");
    btn.addEventListener("keypress", function(e){
        if (e.key == "Enter"){
            e.preventDefault();
            document.getElementById("saBtn").click();
        }
    });
};

function checkSA(){
    const countries = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela'];
    checkCountry(countries, "saInput");   
};



//------------------
//Generic Functions
//------------------

function getCountryID(country){
    const regex = /\s+/g;
    let id = country.toLowerCase();
    id = id.replace(regex, "");
    return(id);
};

function loadTable(countries, countryLabels, regionID){
//will need to configure region later on 
    let maxRow = Math.floor(countries.length/5) + 1;

    //Creating 3 columns
    let split1 = countryLabels;
    let split2 = countryLabels.splice(maxRow);
    let split3 = split2.splice(maxRow);
    let split4 = split3.splice(maxRow);
    let split5 = split4.splice(maxRow);
    let splitArray = [split1, split2, split3, split4, split5];

    let currInd = 0;
    
    //Creating countries as HTML elements and appending to table
    for(a in splitArray){
        let tableColumn = document.createElement("th");
        let list = document.createElement("ul");

        for(c in splitArray[a])
        {
            let node = document.createElement("li");
            node.id = getCountryID(countries[currInd])
            let textnode = document.createTextNode(splitArray[a][c]);
            node.appendChild(textnode);
            list.appendChild(node);
            currInd += 1;
        }
        tableColumn.appendChild(list)
        document.getElementById(regionID).appendChild(tableColumn); //configure region here
    }

    //Example of how to edit style of specific country
    //document.getElementById(getCountryID(countries[6])).style.color = "green";
    
};

function checkCountry(countries, inputID){
    //Checks answer based on countries array passed to it
    let input = document.getElementById(inputID);
    let answer = input.value.toLowerCase();
    let total = countries.length;

    for(c in countries){
        if(answer == countries[c].toLowerCase() && document.getElementById(getCountryID(countries[c])).style.color != "black"){
            document.getElementById(getCountryID(countries[c])).style.color = "black";
            document.getElementById(getCountryID(countries[c])).style.backgroundColor = "rgb(0, 192, 54)";
            input.value = "";
            score+=1;
            document.getElementById("score").innerHTML= score + "/" + total;

            if(score == total){
                alert("Winner!");
            }

        }
        
    }

}

function loadMenu(){
    document.getElementById("menu").style.display = "block";
    document.getElementById("game").style.display = "none";
}


    