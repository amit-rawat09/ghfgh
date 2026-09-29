import Link from "next/link";
import React from "react";

async function Articles({ params }) {
  const { id } = await params;
  return (
    <div>
      Articles : {id}
      <Link href={`/blog/${id}/article`}>
        <button>Go to article</button>
      </Link>
    </div>
  );
}

export default Articles;
