import { PortfolioData, DEFAULT_DATA } from '../types';

const STORAGE_KEY = 'portfolio_data_v1';

export const getStoredData = (): PortfolioData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to load data", e);
  }
  return DEFAULT_DATA;
};

export const saveStoredData = (data: PortfolioData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save data", e);
  }
};