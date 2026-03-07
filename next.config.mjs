/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
const repoName = '/Canvas-Portfolio'

const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? repoName : '',
  assetPrefix: isGitHubPages ? repoName : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? repoName : '',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
