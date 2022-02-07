import React from 'react'
import styled from '@emotion/styled'

// pull in the array at ./blog.json
import blog from './blog.json';
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
]

const PostContainer = styled.div`
	background-color: white;
	position: relative;
	font-weight: 500;
	padding: 0;
	padding-bottom: 2rem;
	border-radius: 1rem;
	box-shadow: 0px 2px 10px 0px var(--orc-beige);
	@media (min-width: 768px) {
		box-shadow: 0px 4px 20px 0px var(--orc-beige);
		min-height: 14rem;
	}
`;
const PostImage = styled.div`
	& > img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 1rem 1rem 0 0;
		object-fit: cover;
		aspect-ratio: 1.9;
	}
`;

const PostTitle = styled.div`
	padding: 0.5rem;
	line-height: 1.2;
`;
const PostDate = styled.div`
	padding: 0.5rem;
	bottom: 0;
	right: 0;
	position: absolute;
	color: #a29ec0;
`;
const PostLink = styled.a`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const BlogPosts = (props) => {
	const posts = [];
	for (let i = 0; i < Math.min(blog.length, 6); i++) {
		const date = new Date(blog[i].date);
		posts.push(
			<PostContainer key={i}>
				<PostImage>
					<img src={blog[i].featuredimage} loading="lazy" alt="" width="1200" height="720" />
				</PostImage>
				<PostTitle>{blog[i].title}</PostTitle>
				<PostDate>{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</PostDate>
				<PostLink to={blog[i].url} />
			</PostContainer>
		);
	}
	return (<>
		{posts}
	</>)
}

export default BlogPosts
