import React from 'react';
import Image from "next/image";

const BlogPage = () => {
    return (
        <div>
            <h1 className='text-center'>This is blog page</h1>

       <Image
  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
  alt="blog"
  width={300}
  height={200}
/>
            
        </div>
    );
};

export default BlogPage;