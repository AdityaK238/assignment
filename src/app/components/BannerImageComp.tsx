import React from 'react';
import style from '@/app/components/BannerImageComp.module.css';

type BannerProps = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
};

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div className={style.banner} style={{ background }}>
      <img src={image} alt={title} className={style.bannerImage}></img>
      <div className={style.bannerContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className={style.ctaButton}>{cta}</button>
      </div>
      <button className={style.editButton} onClick={onEdit}>
        ✏️
      </button>
    </div>
  );
};

export default BannerImageComp;
