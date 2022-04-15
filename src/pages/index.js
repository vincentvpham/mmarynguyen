import React, { useState, useCallback } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';

import PageLayout from '../layouts/PageLayout/PageLayout';

import '../styles/index.scss';

const PHOTO_SET = [
  {
    src:
      'https://cdna.artstation.com/p/assets/images/images/047/394/710/large/mary-nguyen-sarscov-2.jpg?1647482042',
    width: 3,
    height: 3,
  },
  {
    src:
      'https://cdnb.artstation.com/p/assets/images/images/047/917/887/large/mary-nguyen-revisednguyen-3cellassignment-copy.jpg?1648750239',
    width: 4,
    height: 3,
  },
  {
    src:
      'https://cdna.artstation.com/p/assets/images/images/047/394/738/large/mary-nguyen-ins1.jpg?1647482122',
    width: 3,
    height: 4,
  },
  {
    src:
      'https://cdna.artstation.com/p/assets/images/images/045/329/084/large/mary-nguyen-a10.jpg?1642470564',
    width: 4,
    height: 3,
  },
  {
    src:
      'https://cdna.artstation.com/p/assets/images/images/045/329/082/large/mary-nguyen-a14.jpg?1642470531',
    width: 3,
    height: 4,
  },
  {
    src:
      'https://cdna.artstation.com/p/assets/images/images/045/327/956/large/mary-nguyen-a1.jpg?1642467545',
    width: 5,
    height: 3,
  },
  {
    src:
      'https://cdnb.artstation.com/p/assets/images/images/045/329/297/large/mary-nguyen-img-1227.jpg?1642471131',
    width: 3,
    height: 4,
  },
  {
    src:
      'https://cdna.artstation.com/p/assets/images/images/045/697/802/large/mary-nguyen-final1.jpg?1643306656',
    width: 3,
    height: 4,
  },
  {
    src:
      'https://cdna.artstation.com/p/assets/images/images/045/327/816/large/mary-nguyen-untitled-artwork.jpg?1642467146',
    width: 5,
    height: 3,
  },
  {
    src:
      'https://cdna.artstation.com/p/assets/images/images/045/328/846/large/mary-nguyen-a9.jpg?1642469920',
    width: 3,
    height: 4,
  },
  {
    src: 'https://i.imgur.com/RWnGssX.jpg',
    width: 3,
    height: 3,
  },

  {
    src: 'https://i.imgur.com/11bu6qc.png',
    width: 3,
    height: 3,
  },

  {
    src:
      'https://cdnb.artstation.com/p/assets/images/images/045/329/747/large/mary-nguyen-2.jpg?1642472257',
    width: 3,
    height: 4,
  },
  {
    src: 'https://i.imgur.com/NfeiMy5.jpg',
    width: 5,
    height: 3,
  },

  {
    src:
      'https://cdna.artstation.com/p/assets/images/images/047/394/700/large/mary-nguyen-nguyen-assignment2608revised.jpg?1647481933',
    width: 3,
    height: 4,
  },
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setModalIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setModalIsOpen(false);
  };

  return (
    <PageLayout>
      <div className="home">
        <Gallery
          className="gallery"
          photos={PHOTO_SET}
          margin={0}
          onClick={openLightbox}
          targetRowHeight={500}
        />
        <ModalGateway>
          {modalIsOpen && (
            <Modal onClose={closeLightbox} allowFullscreen={false}>
              <Carousel
                currentIndex={currentImage}
                views={PHOTO_SET.map((photo) => ({
                  ...photo,
                  srcset: photo.src,
                  // caption: photo.title,
                }))}
              />
            </Modal>
          )}
        </ModalGateway>
      </div>
    </PageLayout>
  );
};

export default HomePage;
