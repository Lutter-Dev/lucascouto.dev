import { createApi } from '@api'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const api = createApi()
    const response = await api.createComment(req.body)
    res.status(200).json(response.createComment)
  } catch (e) {
    console.error(e)
    res.status(400).json(e)
  }
}
