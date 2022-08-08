// GET /v1.1/:dongleId/stats
import type { NextApiRequest, NextApiResponse } from 'next'
import GET_dongle_id_stats from './GET_dongle_id_stats'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { slugs } = req.query
  req.query = { ...req.query, dongleId: slugs?.[0] }

  const switchCase = slugs?.[1]
  if (req.method === 'GET') {
    switch (switchCase) {
      case 'stats':
        GET_dongle_id_stats(req, res)
        break
    }
  }
}
