const fs = require('fs');

const dir = fs.readdirSync(`${__dirname}/src/pages/blog`);

for (let index = 0; index < dir.length; index++) {
	try {
		const filename = dir[index];
		const filecontents = fs.readFileSync(`${__dirname}/src/pages/blog/${filename}`, {encoding: 'utf-8'});

		const arr = filecontents.split('\n');
		let original_date = null;
		for (let i = 0; i < arr.length; i++) {
			const line = arr[i];
			if (line.match(/^date: /)) {
				original_date = line.split(' ')[1];
			}
		}

		let formated_date = original_date.split('-');

		if (Number(formated_date[1]) < 10) {
			formated_date[1] = `0${Number(formated_date[1])}`;
		}

		formated_date[2] = formated_date[2].split('T');
		if (Number(formated_date[2][0]) < 10) {
			formated_date[2][0] = `0${Number(formated_date[2][0])}`;
		}
		formated_date[2] = formated_date[2].join('T');
		formated_date = formated_date.join('-');


		const date = new Date(formated_date);



		const new_file_contents = filecontents.replace(original_date, date.getTime());

		if (date.getTime()) {
			console.log(original_date, date.getTime());
			fs.writeFileSync(`${__dirname}/src/pages/blog/${filename}`, new_file_contents);
		} else {
			console.log(original_date);
			console.log(date, date.getTime(), filename);
		}
	} catch(e) {
	}
}