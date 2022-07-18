import React from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import Profile_image from "./profile_image.png";
import { Tabs } from "@mantine/core";
import { Photo, MessageCircle, Settings } from "tabler-icons-react";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={Profile_image} alt="profile" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Name</h5>
                <p className="profile-rating mt-3 mb-5">
                  test<span></span>
                </p>
                <Tabs color="red">
                  <Tabs.Tab label="Gallery" icon={<Photo size={14} />}>
                    Gallery tab content
                  </Tabs.Tab>
                  <Tabs.Tab label="Messages" icon={<MessageCircle size={14} />}>
                    Messages tab content
                  </Tabs.Tab>
                  <Tabs.Tab label="Settings" icon={<Settings size={14} />}>
                    Settings tab content
                  </Tabs.Tab>
                </Tabs>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="profile-edit-btn"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="grid profile-work">
                <p>Test</p>
                <a href="google.mn">Test</a>
                <a href="google.mn">Test</a>
                <a href="google.mn">Test</a>
                <a href="google.mn">Test</a>
                <a href="google.mn">Test</a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
