function removeTags(str) {
    try {
        if ((str === null) || (str === ''))
            return '';
        else
            str = str.toString();
        return str.replace(/(<([^>]+)>)/ig, '');
    } catch(e) {
        return '';
    }
}
function generateDescription(post) {
    let description = post.frontmatter.description;

    if (!description || description === "") {
        if (post.html) {
            const textArray = removeTags(`${post.html}`).split('\n');

            for (let index = 0; index < textArray.length; index++) {
                const text = textArray[index];
                if (text.length > 5) {
                    description = text;
                    break;
                }
            }
            if (description.length > 300) {
                let array = description.substr(0, 300).split(' ');
                array.splice(array.length - 1, 1);
                description = array.join(' ') + '...';
            }
        } else if (post.excerpt) {
            post.frontmatter.description = post.excerpt;
        }

        post.frontmatter.description = description;
    }
}

module.exports = {
    generateDescription,
    removeTags,
}