// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 's3.amazonaws.com',
//           port: '',
//           pathname: '/my-bucket/**',
//         },
//       ],
//     },
//   }

// export default nextConfig;
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ecommerce.routemisr.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  