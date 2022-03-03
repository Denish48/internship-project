import UnsplashReact, {
  Base64Uploader,
  withDefaultProps,
} from "unsplash-react";
import "./WallpaperDataShow.css";
import "../../App.css"

const MY_ACCESS_KEY = "WqDpKTnRaRLgHVyNOExPGeSFVdujHOpYhl4jWJ2w3L4";
const MY_SECRET_KEY = "wl4gRWE6FgygtlF9koseXM5_Yr1Ta_cipZ8WV2zkeTw";
const COLOR = "#00000";

function WallpaperDataShow() {
  return (
    <>
      <div className="main_wall">
        <div className="App">
          <UnsplashReact
            highlightColor={COLOR}
            photoRatio={10 / 18}
            secretkey={MY_SECRET_KEY}
            accessKey={MY_ACCESS_KEY}
            columns={7}
            Uploader={withDefaultProps(Base64Uploader, { name: "event[logo]" })}
          />
        </div>
      </div>
    </>
  );
}

export default WallpaperDataShow;
