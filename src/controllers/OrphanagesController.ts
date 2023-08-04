import { Request, Response } from "express";

import prisma from "../outils/prisma";

export class OrphanageController {
  async getAll(req: Request, res: Response) {
    const orphanages = await prisma.orphanage.findMany({
      include: {
        images: true,
      },
    });
    res.status(200).json(orphanages);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const orphanage = await prisma.orphanage.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        images: true,
      },
    });
    res.status(200).json(orphanage);
  }

  async create(req: Request, res: Response) {
    const { name, latitude, longitude, about, instructions } = req.body;

    const requestImages = req.files as Express.Multer.File[];

    const images = requestImages?.map((image) => {
      return { path: "http://localhost:3000/uploads/" + image.filename };
    });

    const newOrphanage = await prisma.orphanage.create({
      data: {
        name,
        latitude: Number(latitude),
        longitude: Number(longitude),
        about,
        instructions,
        images: {
          create: images,
        },
      },
    });

    return res.status(200).json(newOrphanage);
  }

  async deleteOrphanege(req: Request, res: Response) {
    const { id } = req.params;

    const userExist = await prisma.orphanage.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        images: true,
      },
    });

    if (userExist) {
      await prisma.orphanage.delete({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).send(`Orphanage ${id} is deleted`);
    }

    throw new Error(`User ${id} not found`);
  }
}
