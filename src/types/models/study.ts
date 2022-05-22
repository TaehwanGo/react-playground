export interface StudyList {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  maxMember: number;
  currentMember: number;
  isActive: boolean;
  isPublic: boolean;
  isClosed: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
