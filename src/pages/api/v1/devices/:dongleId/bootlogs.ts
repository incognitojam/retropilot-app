import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * GET /v1/devices/:dongleId/bootlogs
 *
 * Device boot logs
 *
 * Returns most recent bootlogs uploaded from a device.
 */
export default (req: NextApiRequest, res: NextApiResponse<Api.ErrorResponse>) => {
  res.status(501).json({
    code: 501,
    error: 'Not Implemented',
  });
};
