export type PageId = 'home' | 'about' | 'practice' | 'contact' | 'insights';

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  context: string;
  stages: string[];
  keyProvisions: string[];
  clientConsiderations: string[];
}

export interface LegalArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  practicalTips: string[];
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email?: string;
  matterType: string;
  urgency: 'critical' | 'urgent' | 'routine';
  currentStage: string;
  briefSummary: string;
  confidentialAgreement: boolean;
}

export interface SearchResultItem {
  id: string;
  title: string;
  category: 'Practice Area' | 'About' | 'Legal Insight' | 'Contact & Location';
  snippet: string;
  page: PageId;
  anchor?: string;
}
