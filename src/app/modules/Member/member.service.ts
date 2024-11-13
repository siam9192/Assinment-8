import { Member } from '@prisma/client';
import prisma from '../../shared/prisma';
import AppError from '../../Errors/AppError';
import httpStatus from '../../shared/http-status';

const createMemberIntoDB = async (data: Member) => {
  const member = await prisma.member.findUnique({ where: { email: data.email } });

  if (member) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'User is already exists in this email');
  }

  return await prisma.member.create({ data });
};

const getAllMembersFromDB = async () => {
  return await prisma.member.findMany();
};

const getMemberByIdFromDB = async (id: string) => {
  return await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });
};

const updateMemberByIdIntoDB = async (id: string, payload: Partial<IBook>) => {
  await prisma.member.findUniqueOrThrow({ where: { memberId: id } });
  return await prisma.member.update({
    where: {
      memberId: id,
    },
    data: payload,
  });
};

const deleteBookByIdFromDB = async (id: string) => {
  await prisma.member.findUniqueOrThrow({ where: { memberId: id } });
  await prisma.member.delete({
    where: {
      memberId: id,
    },
  });

  return null;
};

const MemberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getMemberByIdFromDB,
  updateMemberByIdIntoDB,
  deleteBookByIdFromDB,
};

export default MemberService;
