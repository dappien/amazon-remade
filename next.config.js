module.exports = {
  images: {
      domains: [
        'res.cloudinary.com',
        'fakestoreapi.com'
      ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env : {
    stripe_public_key:process.env.STRIPE_PUBLIC_KEY
  }
};
