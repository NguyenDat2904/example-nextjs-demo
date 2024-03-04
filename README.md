This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

// Implement the getStaticPaths function // Dynamic Page
export async function getStaticPaths() {
  // Fetch the dynamic paths from an API or any data source
  const response = await fetch('https://api.example.com/posts');
  const posts = await response.json();

  // Generate an array of paths based on the fetched data
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // Return the array of paths
  return {
    paths,
    fallback: false, // or 'blocking' or true
  };
}

// Implement the getStaticProps function // SSG
export async function getStaticProps() {
  // Fetch the data from an API or any data source
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  // Return the fetched data as props
  return {
    props: {
      data,
    },
  };
}
