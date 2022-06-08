import React, { useState, useEffect } from "react";
import "./Profile.scss";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Profile = () => {
  const [brands, setBrands] = useState([]);
  const [profile, setProfile] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "profile"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setProfile(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {profile.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(profile[currentIndex].imageUrl)}
              alt={profile[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{profile[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{profile[currentIndex].name}</h4>
                <h4 className="p-text">{profile[currentIndex].company}</h4>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? profile.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === profile.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Profile, "app__profile"),
  "profile",
  "app__primarybg"
);
