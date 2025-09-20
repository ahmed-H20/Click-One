// src/services/videoService.js
const API_URL = 'https://click-one-backend-g624.vercel.app/api';

export const videoService = {
  // جلب جميع مجموعات الفيديوهات
  async getAllVideoCollections() {
    try {
      const response = await fetch(`${API_URL}/videos/collections`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch video collections');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // جلب آخر مجموعة فيديوهات
  async getLastVideoCollection() {
    try {
      const response = await fetch(`${API_URL}/videos/last-collection`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch last collection');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // جلب آخر فيديو
  async getLastVideo() {
    try {
      const response = await fetch(`${API_URL}/videos/last-video`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch last video');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // جلب جميع الفيديوهات (مسطحة)
  async getAllVideosFlattened() {
    try {
      const response = await fetch(`${API_URL}/videos/all-videos`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch videos');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // إضافة مجموعة فيديوهات جديدة (هذا ما تحتاجه للـ submit)
  async createVideoCollection(videos) {
    try {
      const response = await fetch(`${API_URL}/videos/collections`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videos }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create video collection');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // حذف مجموعة فيديوهات
  async deleteVideoCollection(id) {
    try {
      const response = await fetch(`${API_URL}/videos/collections/${id}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete collection');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // تحديث مجموعة فيديوهات
  async updateVideoCollection(id, collectionData) {
    try {
      const response = await fetch(`${API_URL}/videos/collections/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(collectionData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update collection');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // ========= الـ functions القديمة إذا احتجتها =========
  
  // جلب جميع الفيديوهات (النموذج القديم)
  async getAllVideos() {
    try {
      const response = await fetch(`${API_URL}/videos`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch videos');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // إضافة فيديوهات جديدة (النموذج القديم)
  async createVideos(videos) {
    try {
      const response = await fetch(`${API_URL}/videos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videos }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create videos');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },
};