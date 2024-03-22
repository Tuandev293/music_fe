import { Button } from "@material-tailwind/react";
import { t } from "i18next";
import SectionFavotire from "src/components/SectionFavotire";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DialogEditProfile from "src/components/dialog/DialogEditProfile";
import ProfileAvatar from "src/components/profile/ProfileAvatar";
import { basePath } from "src/config/constants";
import { useSetBreadcrumb } from "src/hooks/useSetBreadcrumb";
import { defaultBanner } from "src/config/constants";
import useTitle from "src/hooks/useTitle";
import RencentPlay from "src/components/sidebar/RencentPlay";

const ProfileUser = () => {
  const { userInfo, accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo?.name && !accessToken) {
      navigate("/");
    }
  }, [userInfo?.name, navigate, accessToken]);
  const [openDialog, setOpenDialog] = useState(false);
  useSetBreadcrumb([
    {
      title: t("home.home_page"),
      url: "/",
    },
    {
      title: t("admin.profile"),
      url: "/profile-user",
    },
  ]);
  useTitle(t("home.profile"));
  return (
    <div className="pl-[30px] pr-[71px] laptop:pr-[20px] h-[78vh] overflow-y-scroll none-display-scrollbar">
      <RencentPlay />
      <DialogEditProfile isOpen={openDialog} setOpen={setOpenDialog} />
      <div className="relative laptop:h-[120vh] h-full">
        <div className="w-full h-[246px] pt-1">
          <img
            src={basePath + userInfo?.cover_image || defaultBanner}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = defaultBanner;
            }}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-44 right-14 mobile-lg:top-10 mobile-lg:right-10">
          <Button
            className="bg-[#FFFFFF80] text-black font-semibold hover:bg-primary hover:text-white rounded-[22px]"
            onClick={() => setOpenDialog(true)}
          >
            {t("profile.edit_profile")}
          </Button>
        </div>
        <div className="flex justify-between tablet:justify-center">
          <div className="w-[257px] relative -top-20">
            <ProfileAvatar data={userInfo}></ProfileAvatar>
          </div>
          <div className="tablet:hidden w-full px-10">
            <SectionFavotire/>
          </div>
        </div>
        <div className="tablet:flex hidden justify-center w-full">
            <SectionFavotire/>
          </div>
      </div>
    </div>
  );
};

export default ProfileUser;
