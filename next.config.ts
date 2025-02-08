/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: [  "encrypted-tbn0.gstatic.com", // ✅ Add Google-hosted images
        "images.unsplash.com",        // ✅ Example: Add Unsplash if needed
        "cdn.example.com" ,'i0.wp.com','img.freepik.com','images.fineartamerica.com','www.pngall.com',"static.vecteezy.com",'png.pngtree.com','images.fineartamerica.com'],
    },
};

export default nextConfig;
