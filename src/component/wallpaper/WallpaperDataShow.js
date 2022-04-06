import UnsplashReact, {
  Base64Uploader,
  withDefaultProps,
} from "unsplash-react";
import "./WallpaperDataShow.css";
import "../../App.css"

const MY_ACCESS_KEY = "yetH22SxHdQddrqZQ41GfTYsq7N-U78AuByI0G9Atxo";
const MY_SECRET_KEY = "knk0R0vAU4hhqMbLmDKX92x5c3WXojdK6LrSzqYIpyY";
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
