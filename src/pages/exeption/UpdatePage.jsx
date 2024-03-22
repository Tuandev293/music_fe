import { t } from "i18next";
import { Link } from "react-router-dom";
import { useSetBreadcrumb } from "src/hooks/useSetBreadcrumb";

const UpdatePage = () => {
    useSetBreadcrumb([
        {
          title: t("home.home_page"),
          url:'/'
        },
        {
          title:t("home.updatePage"),
          url:"/*"
        }
      ])
  return (
     <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-5xl">
                                {t("home.update")}
                            </h1>
                            <p className="my-2 text-gray-800">{t("home.update_Page")}</p>
                            <Link to='/'><button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-opacity-50">{t("home.back_Home")}</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://png.pngtree.com/png-vector/20220718/ourmid/pngtree-data-leakage-abstract-concept-vector-illustration-png-image_5914663.png"/>
            </div>
        </div>
  );
};

export default UpdatePage;
