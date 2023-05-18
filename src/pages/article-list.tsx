import Link from 'next/link';
import { builder } from "@builder.io/react";

builder.init('05829d3eace9455893e1d144d2d4a91a');

const articlesPerPage = 30;

function Blog({ articles }: {articles: any}) {

  return (
    <div> {/* We're hiding the first article here so we can display it on it's own at the top */}
      {articles.slice(0, -1).reverse().map((item) => (
        <Link key={item.data.date} href={`/news/${item.data.handle}`}>
          <div>
            <div>
              <img src={item.data.image} />
            </div>
            {item.data.title}<br/>
            {item.data.blurb}<br/>
            {item.data.date}<br/>
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const articles = await builder.getAll("article", {
    // Include references, like our `author` ref
    options: { includeRefs: true },
    // For performance, don't pull the `blocks` (the full blog entry content)
    // when listing
    omit: "data.blocks",
    limit: articlesPerPage,
  });

  return {  props: {
    articles,
  }, };
}

export default Blog;
