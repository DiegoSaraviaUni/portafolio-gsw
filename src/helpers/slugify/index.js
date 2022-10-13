const slugify = (str) =>
	str
		.toLowerCase()
		.trim()
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
export default slugify;
