import "./sidebar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarItem } from "../../userSlice";
const Sidebar = ({ SidebarData }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { sidebarItem } = userState;
  const handleChangeSide = (item) => {
    dispatch(setSidebarItem(item.title));
  };
  return (
    <>
      <div>
        <div className="sidebarmenu">
          <div className="flex-column ">
            {SidebarData.map((item, ind) => {
              return (
                <Link to={`${item.path}`} key={ind} className="link">
                  <div
                    className={`flex-row sidebaritem align-items-center ${
                      sidebarItem === item.title ? "selected" : ""
                    }`}
                    onClick={() => handleChangeSide(item)}
                  >
                    {item.icon}
                    <div
                      style={{
                        marginLeft: "20px",
                        fontSize: "18px",
                        color: "#060606",
                        fontFamily: "Roboto",
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex-column contactus">
            <div className="">CONTACT US</div>
            <div className="flex-row">
              <FacebookIcon fontSize="large" />
              <InstagramIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
            </div>
            <div className="footer-text">
              Enjoy! Now to see your channels and recommendations!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
