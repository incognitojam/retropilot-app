import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * GET /v1/route/:routeName
 *
 * Routes - Route Info
 *
 * Returns information about the provided route. Authenticated user must have ownership of or
 * read access to device from which route was uploaded.
 */
export default (req: NextApiRequest, res: NextApiResponse<Api.ErrorResponse>) => {
  res.status(501).json({
    code: 501,
    error: 'Not Implemented',
  });
};
