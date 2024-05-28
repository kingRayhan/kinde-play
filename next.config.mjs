/** @type {import('next').NextConfig} */
const nextConfig = {
  excludeServerRoutes: [new RegExp("/api/auth/.*")],
};

export default nextConfig;
