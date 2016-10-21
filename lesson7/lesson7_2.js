function pick(obj, keys) {
	if (typeof obj!="object" || obj==null || !Array.isArray(keys) || keys==null) console.log("Error!");
	else {
		var resultObj ={};
		for (var i = 0; i<keys.length; i++) {
			if (keys[i] in obj) resultObj[keys[i]] = obj[keys[i]];
		}
		return resultObj;
	}
	return false;
}

var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
}
console.log(pick(user, ['name'])); // {name: 'Sergey'}
console.log(pick(user, ['name', 'second-name'])); // {name: 'Sergey'}
console.log(pick(user, ['name', 'friends'])); // {name: 'Sergey', friends:['Sveta', 'Artem']}
console.log(pick(user, ['age', 'email']));
