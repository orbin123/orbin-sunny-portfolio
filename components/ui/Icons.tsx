import {
  User,
  Briefcase,
  Code,
  FileText,
  Settings,
  X,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Plus,
  Trash2,
  Save,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Menu,
  GraduationCap
} from 'lucide-react';
import React from 'react';

// FontAwesome Brands Kaggle Icon Wrapper
export const Kaggle = ({ size = 22, className = "" }: { size?: number, className?: string }) => (
  <i
    className={`fa-brands fa-kaggle ${className}`}
    style={{ fontSize: size, width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    aria-hidden="true"
  />
);

// FontAwesome Brands Medium Icon Wrapper
export const Medium = ({ size = 22, className = "" }: { size?: number, className?: string }) => (
  <i
    className={`fa-brands fa-medium ${className}`}
    style={{ fontSize: size, width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    aria-hidden="true"
  />
);

export {
  User,
  Briefcase,
  Code,
  FileText,
  Settings,
  X,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Plus,
  Trash2,
  Save,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Menu,
  GraduationCap
};