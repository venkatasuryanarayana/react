// function loadjson(file,callback) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState===4 && xhr.status=="200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// }

// loadjson("data.json",function(text){
// 	let data = JSON.parse(text); //serialised data
// 	console.log(data);
// 	basic(data.details);
// 	careerinfo(data.careerobjective);
// 	education(data.educationalqualification);
// 	skills(data.techinicalskills);
// })


function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
careerinfo(data.careerobjective);
education(data.educationalqualification);
skills(data.techinicalskills);
})

var child1 = document.querySelector(".child1");

function basic(det){

	var image1 = document.createElement("img");
	image1.src=det.image;
	child1.appendChild(image1);


	var name = document.createElement("h4");
	name.textContent = det.name;
	child1.appendChild(name);

	var email = document.createElement("a");
	email.href="mailto:suryanarla54121@gmail.com";
	email.textContent=det.email;
	child1.appendChild(email);

	var number = document.createElement("h4");
	number.textContent=det.number;
	child1.appendChild(number);

	var address = document.createElement("h2");
	address.textContent="Address";
	child1.appendChild(address);

	child1.appendChild(document.createElement("hr"));

	var address1 = document.createElement("p");
	address1.textContent=det.address;
	child1.append(address1);

}

var child2 = document.querySelector(".child2");

function careerinfo(info1){
	var heading1 = document.createElement("h2");
	heading1.textContent="careerobjective :";
	child2.appendChild(heading1);

	child2.appendChild(document.createElement("hr"));

	var heading2 = document.createElement("p");
	heading2.textContent=info1.info;
	child2.appendChild(heading2);

}

function education(edu){
	var heading3 = document.createElement("h2");
	heading3.textContent="Educational qualification";
	child2.appendChild(heading3);

	child2.appendChild(document.createElement("hr"));

	var table1 = document.createElement("table");
	table1.border="1";
	child2.appendChild(table1);

	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}

function skills(skillinfo){
	var hd = document.createElement("h2");
	hd.textContent="techinicalskills";
	child2.appendChild(hd);

	child2.appendChild(document.createElement("hr"));

	for(i=0;i<skillinfo.length;i++){
		var title = document.createElement("h4");
		title.textContent=skillinfo[i].title;
		child2.appendChild(title);

		var skillul = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);

	}

}
