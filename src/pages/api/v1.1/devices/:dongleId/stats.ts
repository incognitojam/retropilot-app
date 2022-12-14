import type { NextApiRequest, NextApiResponse } from 'next';
import { Secret, verify } from '../../../../../lib/jwt';
import prisma from '../../../../../lib/prisma';

/**
 * GET /v1.1/devices/:dongleId/stats
 *
 * Device driving statistics
 *
 * Returns aggregate driving statistics for a device.
 */
export default async (req: NextApiRequest, res: NextApiResponse<Api.Response<Api.DrivingStatistics>>) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({
      code: 401,
      error: 'Unauthorized',
      details: 'Missing authorization header',
    });
    return;
  }

  const { dongleId } = req.query;
  if (!dongleId || typeof dongleId !== 'string') {
    res.status(400).json({
      code: 400,
      error: 'Bad Request',
      details: 'Missing required parameter: dongleId',
    });
    return;
  }

  const device = await prisma.device.findFirst({ where: { dongleId } });
  if (!device) {
    res.status(404).json({
      code: 404,
      error: 'Not Found',
      details: 'Device not found',
    });
    return;
  }

  // TODO: check user auth with next-auth and check if device owner
  const decoded = await verify(authorization, device.publicKey as Secret);
  if (!decoded) {
    res.status(401).json({
      code: 401,
      error: 'Unauthorized',
      details: 'Invalid authorization token',
    });
    return;
  }

  // TODO: get stats from db
  res.json({
    all: {
      distance: 0,
      minutes: 0,
      routes: 0,
    },
    week: {
      distance: 0,
      minutes: 0,
      routes: 0,
    },
  });
};
