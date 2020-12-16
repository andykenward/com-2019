import { NextApiHandler } from "next"

import { appSdkToggle } from "../../lib/api"

const Preview: NextApiHandler = async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.API_PREVIEW_TOKEN || !req.query.slug) {
    return res.status(401).json({ message: "Invalid token" })
  }
  const { slug } = req.query
  if (Array.isArray(slug)) {
    return res.status(401).json({ message: "Invalid slug" })
  }
  // Fetch the headless CMS to check if the provided `slug` exists
  const post = await appSdkToggle(true).Project({ slug })

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post || !post.project) {
    return res.status(401).json({ message: "Invalid slug" })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/project/${post.project?.slug}` })
  res.end()
}

export default Preview
