import { Injectable } from '@nestjs/common';
import { ConversationLogic } from '../../prisma/generated/prisma-client-js';
import { CreateConversationLogicDto } from '../generated/nestjs-dto/create-conversationLogic.dto';
import { UpdateConversationLogicDto } from '../generated/nestjs-dto/update-conversationLogic.dto';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class ConversationLogicService {
  constructor(private prisma: PrismaService) {}
  create(data: any): Promise<ConversationLogic | null> {
    return this.prisma.conversationLogic.create({ data });
  }

  findAll(): Promise<ConversationLogic[]> {
    return this.prisma.conversationLogic.findMany();
  }

  findOne(id: string): Promise<ConversationLogic | null> {
    return this.prisma.conversationLogic.findUnique({ where: { id } });
  }

  update(id: string, updateAdapterDto: UpdateConversationLogicDto) {
    return this.prisma.conversationLogic.update({
      where: {
        id,
      },
      data: updateAdapterDto,
    });
  }

  remove(id) {
    return `This action removes a #${id} adapter`;
  }
}