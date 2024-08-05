'use client';

import React,{ useState, useEffect } from 'react';
import BannerImageComp from '@/app/components/BannerImageComp';
import EditBannerTemplateBs from '@/app/components/EditBannerTemplateBs';

type Banner = {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
};

const fetchBannerData = async (): Promise<Banner[]> => {
  const res = await fetch('/bannerData.json');
  const data = await res.json();
  return data;
};

const Home = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  useEffect(() => {
    const getBanners = async () => {
      const bannersData = await fetchBannerData();
      setBanners(bannersData);
    };
    getBanners();
  }, []);

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
  };

  const handleSave = (title: string, description: string, cta: string, image: string, background: string) => {
    setBanners((prevBanners) =>
      prevBanners.map((banner) =>
        banner.id === editingBanner!.id ? { ...banner, title, description, cta, image, background } : banner
      )
    );
    setEditingBanner(null);
  };

  return (
    <div>
      {banners.map((banner) => (
        <BannerImageComp
          key={banner.id}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          onEdit={() => handleEdit(banner)}
        />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs
          title={editingBanner.title}
          description={editingBanner.description}
          cta={editingBanner.cta}
          image={editingBanner.image}
          background={editingBanner.background}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Home;
