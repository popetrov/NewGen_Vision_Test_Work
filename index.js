let courses = [
	{ name: 'Courses in England', prices: [0, 100] },
	{ name: 'Courses in Germany', prices: [500, null] },
	{ name: 'Courses in Italy', prices: [100, 200] },
	{ name: 'Courses in Russia', prices: [null, 400] },
	{ name: 'Courses in China', prices: [50, 250] },
	{ name: 'Courses in USA', prices: [200, null] },
	{ name: 'Courses in Kazakhstan', prices: [56, 324] },
	{ name: 'Courses in France', prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const filterCourses = (filter) => {
	courses.map((course) => {
		if (filter[0] === null) {
			if (course.prices[1] <= filter[1] || course.prices[1] === null) {
				console.log(course.name);
			}
		}
		if (filter[1] === null) {
			if (course.prices[0] >= filter[0] || course.prices[0] === null) {
				console.log(course.name);
			}
		}
		if (filter[1] !== null && filter[0] !== null) {
			if (
				course.prices[0] >= filter[0] &&
				course.prices[0] !== null &&
				course.prices[1] <= filter[1] &&
				course.prices[1] !== null
			) {
				console.log(course.name);
			}
		}
	});
};

filterCourses(requiredRange1);
